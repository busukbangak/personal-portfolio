import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

export default function Portfolio() {
    const { width, height } = useWindowDimensions();
    const isMobile = width < 1024;

    return (
        <main className='container' style={{ ...styles.container, ...(isMobile && { flexDirection: 'column' }) }}>
            <aside style={styles.sidebar}>Hi</aside>
            <section style={styles.about}></section>
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
        flex: 1,
        backgroundColor: 'blue',
    },
    about: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'red'
    },
    projectList: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'green'
    }
});
