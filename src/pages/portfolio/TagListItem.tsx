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
        textAlign: 'center',
        fontWeight: '600',
        width: '6.510416666666667vw',
        padding: '0.3125vw',
        marginRight: '0.8333333333333333vw',
        fontSize: '0.9375vw'
    }
});

