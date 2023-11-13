import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

export default function Imprint() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 1024;

    return (
        <div className='container' style={styles.container}>
            <h1 style={{ ...styles.title, ...(isMobile && { fontSize: 64 }) }}>Imprint</h1>
            <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>
                Max Mustermann <br />
                Max Strasse 1337 <br />
                47395 Hamburg <br />
                max.mustermann@gmail.com
            </p>
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
        padding: 32
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
    }
});
