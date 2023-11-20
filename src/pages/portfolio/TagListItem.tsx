import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

type Props = {
    text: string;
}

export default function TagListItem({ text }: Props) {
    const { width } = useWindowDimensions();
    const isMobile = width < 1024;

    return (<p style={{ ...styles.tag, ...(isMobile && { padding: 4, width: 75, marginRight: 8, fontSize: '1.28755364806867vh' }) }}>{text}</p>)
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

