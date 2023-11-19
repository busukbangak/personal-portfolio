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
                <div style={{ ...styles.image, backgroundImage: isHovered ? `url(${imagePath})` : `linear-gradient(rgba(196, 196, 196, 0) 0%, rgba(180, 181, 182, 0.067) 0.01%, rgb(0, 0, 0, 0.75) 99.99%, rgb(16, 28, 34, 0.75) 100%), url(${imagePath})` }} />
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
        fontWeight: 'bold',
        fontSize: '3.333333333333333vw'
    },
    subtitle: {
        margin: 0,
        fontWeight: 'normal',
        fontSize: '1.25vw'
    },
    tagListContainer: {
        display: 'flex'
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '0.7407407407407407vh'
    },
    projectNumber: {
        position: 'absolute',
        color: 'white',
        margin: 0,
        backgroundImage: `url(${targetPurpleSVG})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center',
        minWidth: '10.41666666666667vw',
        fontSize: '6.666666666666667vw',
        padding: '0.8333333333333333vw',
        bottom: '1.481481481481481vh',
        right: '0.8333333333333333vw'
    }
});

