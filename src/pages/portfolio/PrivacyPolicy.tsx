import StyleSheet from '@/shared/types/stylesheet';
import { Link } from 'react-router-dom';


import targetSVG from '@/assets/portfolio/target.svg'
export default function Imprint() {

    return (
        <div className='container' style={styles.container}>
            <main className='container' style={styles.container}>
                <aside style={styles.sidebar}>
                    <img style={styles.sidebarImage} src={targetSVG} />
                    <nav style={styles.navContainer}>
                        <Link to={'/'} style={styles.navText}>Home</Link>
                        <Link to={'/imprint'} style={styles.navText}>Imprint</Link>
                        <Link to={'/privacy-policy'} style={styles.navText}>Privacy Policy</Link>
                    </nav>
                </aside>
                <section style={styles.content}>
                    <h1 style={{}}>Privacy Policy</h1>
                    <p style={{}}>
                        text
                    </p>
                </section>
            </main>
        </div>
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
    content: {
        flex: 1,
        backgroundColor: 'gray',
        width: 750,
        padding: 32
    }
});

