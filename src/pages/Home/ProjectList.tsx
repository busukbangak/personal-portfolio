import ProjectListItem from './ProjectListItem';
import { Project } from '@/shared/types/types';

type Props = {
    projects: Project[];
};

export default function ProjectList({ projects }: Props) {
    if (projects.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center p-12">
                <p className="text-white/50 text-center">
                    No projects found with the selected tags.
                </p>
            </div>
        );
    }

    return (
        <>
            {projects.map((item, index) => (
                <ProjectListItem 
                    key={index} 
                    title={item.title} 
                    subtitle={item.subtitle} 
                    tags={item.tags} 
                    previewPath={item.previewPath} 
                    link={item.link} 
                />
            ))}
        </>
    );
}
