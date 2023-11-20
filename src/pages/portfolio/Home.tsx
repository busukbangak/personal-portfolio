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
        <main className='container' style={{ ...styles.container, ...(isMobile && { flexDirection: 'column' }) }}>
            {!isMobile &&
                <aside style={styles.sidebar}>
                    <img style={styles.sidebarImage} src={targetSVG} />
                    <nav style={styles.navContainer}>
                        <Link to={'/'} style={styles.navText}>Home</Link>
                        <Link to={'/imprint'} style={styles.navText}>Imprint</Link>
                        <Link to={'/privacy-policy'} style={styles.navText}>Privacy Policy</Link>
                    </nav>
                </aside>
            }


            <section style={{ ...styles.about, ...(isMobile && { backgroundColor: '#161F22', padding: 24 }) }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1 style={{ fontSize: isMobile ? '2.145922746781116vh' : '1.224489795918367vw', fontWeight: 500, color: 'white', margin: 0 }}>/awanali</h1>
                    {isMobile && <img style={{ ...styles.sidebarImage, width: '2.145922746781116vh' }} src={targetSVG} />}
                </div>
                <h2 style={{ fontSize: isMobile ? '4.506437768240343vh' : '3.33333vw', fontWeight: 500, color: '#BDC1C2' }}>I <span style={{ color: '#1CB0F7' }}>code</span> games, {!isMobile && <br />} <span style={{ color: '#EB5A53' }}>design</span> 2D/3D assets {!isMobile && <br />} and produce <span style={{ color: '#FF9600' }}>music</span>.</h2>
                <h3 style={{ fontSize: isMobile ? '2.575107296137339vh' : '1.66666vw', fontWeight: 'bold', color: 'white' }}>Hey im Wan Abdul Aliim Wanali.</h3>
                <p style={{ fontSize: isMobile ? '2.145922746781116vh' : '1.224489795918367vw', fontWeight: 'normal', color: 'white' }}>I'm a software engineer looking for opportunities to gain experience in the industry. My interests ranges from building and designing human centered applications for web, desktop and mobile devices. Currently im working for the Lessing-Sts School in Hamburg, developing a gamification app for school kids.</p>
                <button style={{ width: '15.30612244897959vw', height: '7.407407407407407vh', maxHeight: 80, cursor: 'pointer' }}>Get in Touch</button>
            </section>

            {!isMobile ?
                <section style={styles.projectListContainer}>
                    {projectsJSON.map((item, index) => <ProjectListItem key={index} title={item.title} subtitle={item.subtitle} tags={item.tags} imagePath={item.imagePath} link={item.link} index={index + 1} />)}
                </section>
                :
                projectsJSON.map((item, index) => <ProjectListItem key={index} title={item.title} subtitle={item.subtitle} tags={item.tags} imagePath={item.imagePath} link={item.link} index={index + 1} />)
            }

            {isMobile &&
                <nav style={{ ...styles.navContainer, flexDirection: 'row', justifyContent: 'center', margin: 32 }}>
                    <Link to={'/imprint'} style={{ ...styles.navText, writingMode: 'unset', fontSize: '1.716738197424893vh' }}>Imprint</Link>
                    <Link to={'/privacy-policy'} style={{ ...styles.navText, writingMode: 'unset', fontSize: '1.716738197424893vh' }}>Privacy Policy</Link>
                </nav>
            }
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
        justifyContent: 'space-between',
        width: '3.90625vw'
    },
    sidebarImage: {
        width: '35%',
        alignSelf: 'center',
        margin: '1.66666vw'
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
        color: '#fff',
        cursor: 'pointer',
        margin: '1.66666vw',
        fontSize: '0.8163265306122449vw'
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#232F35',
        flex: 3,
        padding: '1.66666vw'
    },
    projectListContainer: {
        flex: 5,
        overflow: 'auto',
        paddingTop: '4.444444444444444vh'
    }
});
