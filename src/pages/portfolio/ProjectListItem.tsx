import StyleSheet from '@/shared/types/stylesheet';
import TagListItem from './TagListItem';
import targetPurpleSVG from '@/assets/portfolio/target-purple.png'
import { useState } from 'react';
import useModerateScale from '@/shared/hooks/useModerateScale';
import useVerticalScale from '@/shared/hooks/useModerateScale';
import useHorizontalScale from '@/shared/hooks/useHorizontalScale';

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
        <div className='container' style={styles.container}>
            <h1 style={{ ...styles.title, fontSize: useModerateScale(64) }}>{title}</h1>
            <h2 style={{ ...styles.subtitle, fontSize: useModerateScale(24) }}>{subtitle}</h2>
            <div style={styles.tagListContainer}>
                {tags.map((tag, index) => <TagListItem key={index} text={tag} />)}
            </div>
            <a href={link} target='_blank' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div style={{ ...styles.image, marginTop: useVerticalScale(8), backgroundImage: isHovered ? `url(${imagePath})` : `linear-gradient(rgba(196, 196, 196, 0) 0%, rgba(180, 181, 182, 0.067) 0.01%, rgb(0, 0, 0, 0.75) 99.99%, rgb(16, 28, 34, 0.75) 100%), url(${imagePath})` }} />
            </a>
            <p style={{ ...styles.projectNumber, minWidth: useHorizontalScale(200), fontSize: useModerateScale(128), padding: useModerateScale(16), bottom: useVerticalScale(16), right: useVerticalScale(16) }}>{`0${index}`}</p>
        </div >
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        color: '#8A6AC7',
        padding: '0 64px 48px 64px'
    },
    title: {
        margin: 0,
        fontWeight: 'bold'
    },
    subtitle: {
        margin: 0,
        fontWeight: 'normal'
    },
    tagListContainer: {
        display: 'flex'
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    },
    projectNumber: {
        position: 'absolute',
        color: 'white',
        margin: 0,
        backgroundImage: `url(${targetPurpleSVG})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center'
    }
});

