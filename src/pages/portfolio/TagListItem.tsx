import StyleSheet from '@/shared/types/stylesheet';

type Props = {
    text: string;
}

export default function TagListItem({ text }: Props) {

    return (<p style={styles.tag}>{text}</p>)
}

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#8A6AC7',
        color: '#161F22',
        width: 125,
        textAlign: 'center',
        padding: 6,
        marginRight: 16,
        fontSize: 18,
        fontWeight: '600'
    }
});

