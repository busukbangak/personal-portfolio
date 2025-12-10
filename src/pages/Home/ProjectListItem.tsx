import TagListItem from './TagListItem';
import targetPurpleSVG from '@/assets/target-purple.png'
import { useState } from 'react';

type Props = {
    title: string;
    subtitle: string;
    tags: string[];
    imagePath: string;
    link: string;
    index: number;
}

export default function ProjectListItem({ title, subtitle, tags, imagePath, link, index }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative flex-1 text-[#8A6AC7] p-6 lg:pt-0 lg:px-16 lg:pb-12'>
            <h1 className="m-0 font-bold text-[3.862660944206009vh] lg:text-[3.333333333333333vw]">{title}</h1>
            <h2 className='m-0 font-normal text-[1.931330472103004vh] lg:text-[1.25vw] '>{subtitle}</h2>
            <div className='flex flex-wrap my-2'>
                {tags.map((tag, index) => <TagListItem key={index} text={tag} />)}
            </div>
            <a href={link} target='_blank' rel='noopener noreferrer' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className={`w-full aspect-video bg-no-repeat bg-cover mt-[0.7407407407407407vh] ${isHovered ? 'brightness-125' : ''}`} style={{ backgroundImage: `url(${imagePath})` }} />
            </a>

            <p className={`absolute text-white m-0 bg-contain bg-no-repeat bg-center text-center min-w-[10.41666666666667vw] text-[4.506437768240343vh] right-2 bottom-2 p-2 lg:text-[6.666666666666667vw] lg:p-[0.8333333333333333vw] lg:bottom-[1.481481481481481vh] lg:-right-[0.8333333333333333vw']`} style={{ backgroundImage: `url(${targetPurpleSVG})` }}>{index > 9 ? index : `0${index}`}</p>
        </div >
    )
}
