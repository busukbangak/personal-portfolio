import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

import targetSVG from '@/assets/portfolio/target.svg'
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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


            <section style={{ ...styles.content, ...(isMobile && { backgroundColor: '#161F22', padding: 24 }) }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}><h1 style={{ fontSize: isMobile ? '2.145922746781116vh' : '1.224489795918367vw', fontWeight: 500, color: 'white', margin: 0 }}>/awanali</h1></Link>
                    {isMobile && <img style={{ ...styles.sidebarImage, width: '2.145922746781116vh' }} src={targetSVG} />}
                </div>
                <h2 style={{ fontSize: isMobile ? '4.506437768240343vh' : '3.33333vw', fontWeight: 500, color: '#BDC1C2' }}>Privacy Policy</h2>
                <p style={{ fontSize: isMobile ? '2.145922746781116vh' : '1.224489795918367vw', fontWeight: 'normal', color: 'white' }}>We dont collect any data on this website.</p>
            </section>

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
    content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#232F35',
        flex: 3,
        padding: '1.66666vw'
    },
});
