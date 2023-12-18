import StyleSheet from '@/shared/types/stylesheet';
import TagListItem from './TagListItem';
import targetPurpleSVG from '@/assets/portfolio/target-purple.png'
import { useState } from 'react';
import useWindowDimensions from '@/shared/hooks/useWindowDimensions';

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
    const { width } = useWindowDimensions();
    const isMobile = width < 1024;

    return (
        <div className='container' style={{ ...styles.container, ...(isMobile && { padding: 24 }) }}>
            <h1 style={{ ...styles.title, ...(isMobile && { fontSize: '3.862660944206009vh' }) }}>{title}</h1>
            <h2 style={{ ...styles.subtitle, ...(isMobile && { fontSize: '1.931330472103004vh' }) }}>{subtitle}</h2>
            <div style={styles.tagListContainer}>
                {tags.map((tag, index) => <TagListItem key={index} text={tag} />)}
            </div>
            <a href={link} target='_blank' rel='noopener noreferrer' style={{ cursor: 'pointer' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div style={{ ...styles.image, backgroundImage: `url(${imagePath})`, ...(isHovered && { filter: 'brightness(1.25)' }) }} />
            </a>

            <p style={{ ...styles.projectNumber, ...(isMobile && { padding: 8, fontSize: '4.506437768240343vh', right: 8, bottom: 8 }) }}>{`0${index}`}</p>
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
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 8,
        marginBottom: 8
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

