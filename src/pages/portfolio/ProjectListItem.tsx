import StyleSheet from '@/shared/types/stylesheet';
import TagListItem from './TagListItem';
import targetPurpleSVG from '@/assets/portfolio/target-purple.png'
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
        <div className='container' style={styles.container}>
            <h1 style={styles.title}>{title}</h1>
            <h2 style={styles.subtitle}>{subtitle}</h2>
            <div style={styles.tagListContainer}>
                {tags.map((tag, index) => <TagListItem key={index} text={tag} />)}
            </div>
            <a href={link} target='_blank' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div style={{ ...styles.image, backgroundImage: isHovered ? `linear-gradient(rgba(196, 196, 196, 0) 0%, rgba(180, 181, 182, 0.067) 0.01%, rgb(0, 0, 0, 0.75) 99.99%, rgb(16, 28, 34, 0.75) 100%), url(${imagePath})` : `linear-gradient(rgba(196, 196, 196, 0) 0%, rgba(53, 89, 126, 0.09) 0.01%, rgb(0, 0, 0) 99.99%, rgb(16, 28, 34) 100%), url(${imagePath})` }} />
            </a>
            <p style={styles.projectNumber}>{`0${index}`}</p>
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
        fontSize: 64,
        fontWeight: 'bold'
    },
    subtitle: {
        margin: 0,
        fontSize: 24,
        fontWeight: 'normal'
    },
    tagListContainer: {
        display: 'flex'
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 8,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        
    },
    projectNumber: {
        minWidth: 200,
        position: 'absolute',
        fontSize: 128,
        color: 'white',
        bottom: 16,
        right: 16,
        margin: 0,
        padding: 16,
        backgroundImage: `url(${targetPurpleSVG})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center'
    }
});

