import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 1024;

    return (
        <div className='container' style={styles.container}>
            <main>
                <h1 style={{ ...styles.title, ...(isMobile && { fontSize: 64 }) }}>Privacy Policy</h1>
                <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>awanali built the cat baguette app as a Free app. This SERVICE is provided by awanali at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.</p>

                <h2 style={{ ...styles.subTitle, ...(isMobile && { fontSize: 32 }) }}>Information Collection and Use</h2>
                <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>Per se, this application does not collect or store any personal data. However, the app does use third-party services that may collect information used to identify you. Links to the privacy policy of third-party service providers used by the app:</p>
                <ul>
                    <li style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}><a href='https://www.google.com/policies/privacy/' target='_blank' style={{ textDecoration: 'none' }} >Google Play Services</a></li>
                    <li style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}><a href='https://godotengine.org/privacy-policy' target='_blank' style={{ textDecoration: 'none' }} >Godot</a></li>
                </ul>

                <h2 style={{ ...styles.subTitle, ...(isMobile && { fontSize: 32 }) }}>Changes to This Privacy Policy</h2>
                <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. This policy is effective as of 2023-11-01.</p>

                <h2 style={{ ...styles.subTitle, ...(isMobile && { fontSize: 32 }) }}>Contact</h2>
                <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at aliim.wanali@gmail.com.</p>
            </main>
            <footer style={styles.footer}>
                <Link to={'/catbaguette'} style={styles.footerText}>Home</Link>
                <Link to={'/catbaguette/imprint'} style={styles.footerText}>Imprint</Link>
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
    subTitle: {
        fontSize: '50px',
        fontFamily: 'm3x6',
        color: 'black',
        margin: '16px 0 16px 0'
    },
    description: {
        fontSize: '50px',
        fontFamily: 'm3x6',
        color: 'black',
        margin: '0 0 16px 0'
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
