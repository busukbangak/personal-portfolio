import TagList from './TagList';
import projectsJSON from '@/assets/projects.json';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FilterMode, Project } from '@/shared/types/types';

type Props = {
    isMobile?: boolean;
    onFilteredProjectsChange: (projects: Project[]) => void;
}

export default function TagFilter({ isMobile = false, onFilteredProjectsChange }: Props) {
    const { tags: tagsParam, mode: modeParam } = useParams<{ tags?: string; mode?: string }>();
    const navigate = useNavigate();
    
    // Parse filter mode from URL, default to AND
    const filterMode: FilterMode = useMemo(() => {
        if (modeParam === 'or') return 'OR';
        return 'AND';
    }, [modeParam]);
    
    // Parse tags from URL
    const selectedTags = useMemo(() => {
        if (!tagsParam) return [];
        return tagsParam.split('+').map(tag => decodeURIComponent(tag));
    }, [tagsParam]);

    // Calculate filtered projects
    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) return projectsJSON;
        
        if (filterMode === 'AND') {
            return projectsJSON.filter(project => 
                selectedTags.every(selectedTag => project.tags.includes(selectedTag))
            );
        } else {
            return projectsJSON.filter(project => 
                selectedTags.some(selectedTag => project.tags.includes(selectedTag))
            );
        }
    }, [selectedTags, filterMode]);

    // Expose filtered projects to parent
    useEffect(() => {
        onFilteredProjectsChange(filteredProjects);
    }, [filteredProjects, onFilteredProjectsChange]);

    // Get all unique tags from projects
    const allTags = useMemo(() => {
        const tagSet = new Set<string>();
        projectsJSON.forEach(project => {
            project.tags.forEach(tag => tagSet.add(tag));
        });
        return Array.from(tagSet).sort();
    }, []);

    // Toggle tag selection
    const toggleTag = (tag: string) => {
        let newTags: string[];
        if (selectedTags.includes(tag)) {
            newTags = selectedTags.filter(t => t !== tag);
        } else {
            newTags = [...selectedTags, tag];
        }
        
        if (newTags.length === 0) {
            navigate('/');
        } else {
            const encodedTags = newTags.map(t => encodeURIComponent(t)).join('+');
            const mode = filterMode === 'OR' ? 'or' : 'and';
            navigate(`/tags/${mode}/${encodedTags}`);
        }
    };

    // Toggle filter mode and update URL
    const setFilterMode = (newMode: FilterMode) => {
        if (selectedTags.length > 0) {
            const encodedTags = selectedTags.map(t => encodeURIComponent(t)).join('+');
            const mode = newMode === 'OR' ? 'or' : 'and';
            navigate(`/tags/${mode}/${encodedTags}`);
        }
    };

    const clearFilters = () => {
        navigate('/');
    };
    
    return (
        <div className={`bg-[#0A0A0A] border-b border-white/10 p-6 ${!isMobile && 'sticky top-0 z-10'}`}>
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#E0E0E0]">Filter by Tags</h3>
                <div className="flex items-center gap-3">
                    {selectedTags.length > 1 && (
                        <div className="flex gap-1 bg-white/5 rounded-md p-1">
                            <button
                                onClick={() => setFilterMode('AND')}
                                className={`${isMobile ? 'px-2' : 'px-3'} py-1 rounded text-xs font-medium transition-all ${
                                    filterMode === 'AND'
                                        ? 'bg-[#5B9FD7] text-white'
                                        : 'text-white/60 hover:text-white/80'
                                }`}
                            >
                                AND
                            </button>
                            <button
                                onClick={() => setFilterMode('OR')}
                                className={`${isMobile ? 'px-2' : 'px-3'} py-1 rounded text-xs font-medium transition-all ${
                                    filterMode === 'OR'
                                        ? 'bg-[#5B9FD7] text-white'
                                        : 'text-white/60 hover:text-white/80'
                                }`}
                            >
                                OR
                            </button>
                        </div>
                    )}
                    {selectedTags.length > 0 && (
                        <button 
                            onClick={clearFilters}
                            className="text-sm text-[#5B9FD7] hover:text-[#4A8BC6] transition-colors"
                        >
                            Clear all
                        </button>
                    )}
                </div>
            </div>
            <TagList 
                tags={allTags}
                selectedTags={selectedTags}
                onTagClick={toggleTag}
            />
            {selectedTags.length > 0 && (
                <div className={`mt-3 flex ${isMobile ? 'flex-col gap-1' : 'items-center justify-between'} text-sm text-white/50`}>
                    <p>
                        Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                    </p>
                    {selectedTags.length > 1 && (
                        <p className="text-xs">
                            {filterMode === 'AND' ? 'Must have all tags' : 'Must have any tag'}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
