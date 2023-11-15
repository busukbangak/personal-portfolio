import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

import targetSVG from '@/assets/portfolio/target.svg'
import { Link } from 'react-router-dom';

import projectsJSON from '@/assets/portfolio/projects.json'
import ProjectListItem from './ProjectListItem';
import useModerateScale from '@/shared/hooks/useModerateScale';
import useHorizontalScale from '@/shared/hooks/useHorizontalScale';
import useVerticalScale from '@/shared/hooks/useVerticalScale';
import clamp from '@/shared/utils/clamp';

export default function Home() {

    return (
        <main className='container' style={styles.container}>
            <aside style={{ ...styles.sidebar, width: useHorizontalScale(75) }}>
                <img style={{ ...styles.sidebarImage, margin: useModerateScale(32) }} src={targetSVG} />
                <nav style={styles.navContainer}>
                    <Link to={'/'} style={{ ...styles.navText, margin: useModerateScale(32), fontSize: useModerateScale(16) }}>Home</Link>
                    <Link to={'/imprint'} style={{ ...styles.navText, margin: useModerateScale(32), fontSize: useModerateScale(16) }}>Imprint</Link>
                    <Link to={'/privacy-policy'} style={{ ...styles.navText, margin: useModerateScale(32), fontSize: useModerateScale(16) }}>Privacy Policy</Link>
                </nav>
            </aside>
            <section style={{ ...styles.about, padding: (useModerateScale(32)) }}>
                <h1 style={{ fontSize: useModerateScale(24), fontWeight: 500, color: 'white', margin: 0 }}>/awanali</h1>
                <h2 style={{ fontSize: useModerateScale(64), fontWeight: 500, color: '#BDC1C2', margin: `${clamp(useVerticalScale(64), 0, 64)}px 0 ${clamp(useVerticalScale(64), 0, 64)}px 0` }}>I <span style={{ color: '#1CB0F7' }}>code</span> games, <br /> <span style={{ color: '#EB5A53' }}>design</span> 2D/3D assets <br /> and produce <span style={{ color: '#FF9600' }}>music</span>.</h2>
                <h3 style={{ fontSize: useModerateScale(32), fontWeight: 'bold', color: 'white', margin: `${clamp(useVerticalScale(32), 0, 32)}px 0 ${clamp(useVerticalScale(32), 0, 32)}px 0` }}>Hey im Wan Abdul Aliim Wanali.</h3>
                <p style={{ fontSize: useModerateScale(24), fontWeight: 'normal', color: 'white', margin: `${clamp(useVerticalScale(24), 0, 24)}px 0 ${clamp(useVerticalScale(24), 0, 24)}px 0` }}>I'm a software engineer looking for opportunities to gain experience in the industry. My interests ranges from building and designing human centered applications for web, desktop and mobile devices. Currently im working for the Lessing-Sts School in Hamburg, developing a gamification app for school kids.</p>
                <button style={{ width: useHorizontalScale(300), height: useVerticalScale(80), maxHeight: 80, margin: `${clamp(useVerticalScale(32), 0, 32)}px 0 ${clamp(useVerticalScale(32), 0, 32)}px 0`, cursor: 'pointer' }}>Get in Touch</button>
            </section>
            <section style={{ ...styles.projectListContainer, paddingTop: useVerticalScale(48) }}>
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
        justifyContent: 'space-between'
    },
    sidebarImage: {
        width: '35%',
        alignSelf: 'center'
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
        cursor: 'pointer'
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#232F35',
        flex: 3
    },
    projectListContainer: {
        flex: 5,
        overflow: 'auto'
    }
});
