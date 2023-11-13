import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

import targetSVG from '@/assets/portfolio/target.svg'
import { Link } from 'react-router-dom';

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
                <h1>/awanali</h1>
                <h2>I code games, <br /> design 2D/3D assets <br /> and produce music.</h2>
                <h3>Hey im Wan Abdul Aliim Wanali.</h3>
                <p>I'm a software engineer looking for opportunities to gain experience in the industry. My interests ranges from building and designing human centered applications for web, desktop and mobile devices. Currently im working for the Lessing-Sts School in Hamburg, developing a gamification app for school kids.</p>
                <button style={{width: 150}}>Get in Touch</button>
            </section>
            <section style={styles.projectList}></section>
        </main>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gainsboro',
        flexDirection: 'row',
        overflow: 'auto',
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        width: 75,
        justifyContent: 'space-between'
    },
    sidebarImage: {
        width: '45%',
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
        margin: 32
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        width: 700,
        padding: 32
    },
    projectList: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gainsboro'
    }
});
