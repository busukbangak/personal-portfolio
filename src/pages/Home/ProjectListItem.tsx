import TagList from './TagList';
import MediaPreview from '../../shared/components/MediaPreview';
import { useState } from 'react';

type Props = {
    title: string;
    subtitle: string;
    tags: string[];
    previewPath: string;
    link: string;
}

export default function ProjectListItem({ title, subtitle, tags, previewPath, link }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative px-8 py-6 border-b border-white/5 hover:bg-white/2 transition-colors group'>
            <a href={link} target='_blank' rel='noopener noreferrer' className="block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {/* Project video */}
                <div className={`w-full aspect-video rounded-lg overflow-hidden mb-4 transition-all ${isHovered ? 'brightness-110 scale-[1.01]' : ''}`}>
                    <MediaPreview videoPath={previewPath} alt={title} />
                </div>
                
                {/* Project info */}
                <div className="space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white m-0 group-hover:text-[#5B9FD7] transition-colors">{title}</h2>
                    <p className='text-base lg:text-lg text-[#C0C0C0] m-0 leading-relaxed'>{subtitle}</p>
                    
                    {/* Tags */}
                    <div className='pt-2'>
                        <TagList tags={tags} />
                    </div>
                </div>
            </a>
        </div>
    )
}
