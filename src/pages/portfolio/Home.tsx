import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

import targetSVG from '@/assets/portfolio/target.svg'
import { Link } from 'react-router-dom';

import projectsJSON from '@/assets/portfolio/projects.json'
import ProjectListItem from './ProjectListItem';

export default function Home() {
    const { width } = useWindowDimensions();
    const isMobile = width < 1024;

    return (
        <main className='container' style={styles.container}>
            <aside style={styles.sidebar}>
                <img style={styles.sidebarImage} src={targetSVG} />
                <nav style={styles.navContainer}>
                    <Link to={'/'} style={styles.navText}>Home</Link>
                    <Link to={'/imprint'} style={styles.navText}>Imprint</Link>
                    <Link to={'/privacy-policy'} style={styles.navText}>Privacy Policy</Link>
                </nav>
            </aside>
            <section style={styles.about}>
                <h1 style={{ fontSize: 24, fontWeight: 500, color: 'white', margin: 0 }}>/awanali</h1>
                <h2 style={{ fontSize: 64, fontWeight: 500, color: '#BDC1C2' }}>I <span style={{ color: '#1CB0F7' }}>code</span> games, {/* <br /> */} <span style={{ color: '#EB5A53' }}>design</span> 2D/3D assets {/* <br /> */} and produce <span style={{ color: '#FF9600' }}>music</span>.</h2>
                <h3 style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Hey im Wan Abdul Aliim Wanali.</h3>
                <p style={{ fontSize: 24, fontWeight: 'normal', color: 'white' }}>I'm a software engineer looking for opportunities to gain experience in the industry. My interests ranges from building and designing human centered applications for web, desktop and mobile devices. Currently im working for the Lessing-Sts School in Hamburg, developing a gamification app for school kids.</p>
                <button style={{ width: 300, height: 80, margin: '32px 0 32px 0', cursor: 'pointer' }}>Get in Touch</button>
            </section>
            <section style={styles.projectListContainer}>
                {projectsJSON.map((item, index) => <ProjectListItem key={index} title={item.title} subtitle={item.subtitle} tags={item.tags} imagePath={item.imagePath} link={item.link} index={index + 1} />)}
            </section>
        </main>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#161F22',
        flexDirection: 'row',
        overflow: 'auto',
        fontFamily: 'Montserrat'
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        width: 75,
        justifyContent: 'space-between'
    },
    sidebarImage: {
        width: '35%',
        alignSelf: 'center',
        margin: 32
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    navText: {
        writingMode: 'vertical-lr',
        textOrientation: 'sideways',
        textDecoration: 'none',
        margin: 32,
        color: '#fff',
        fontSize: 16,
        cursor: 'pointer'
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#232F35',
        flex: 3,
        padding: 32
    },
    projectListContainer: {
        flex: 5,
        overflow: 'auto',
        paddingTop: 48
    }
});
