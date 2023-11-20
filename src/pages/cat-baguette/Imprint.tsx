import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';
import { Link } from 'react-router-dom';

export default function Imprint() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 1024;

    return (
        <div className='container' style={styles.container}>
            <main>
                <h1 style={{ ...styles.title, ...(isMobile && { fontSize: 64 }) }}>Imprint</h1>
                <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>
                    Max Mustermann <br />
                    Max Strasse 1337 <br />
                    47395 Hamburg <br />
                    max.mustermann@gmail.com
                </p>
            </main>
            <footer style={styles.footer}>
                <Link to={'/catbaguette/imprint'} style={styles.footerText}>Imprint</Link>
                <Link to={'/catbaguette/privacy-policy'} style={styles.footerText}>Privacy Policy</Link>
            </footer>

        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gainsboro',
        flexDirection: 'column',
        overflow: 'auto',
        padding: 32,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '100px',
        fontFamily: 'm3x6',
        margin: 0,
        color: 'black'
    },
    description: {
        fontSize: '50px',
        fontFamily: 'm3x6',
        color: 'black',
        margin: '16px 0 16px 0'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 16,
        justifyContent: 'center'
    },
    footerText: {
        margin: '0 16px 0 16px',
        fontFamily: 'm3x6',
        fontSize: 32,
        textDecoration: 'none',
        cursor: 'pointer'
    }
});
