import useHorizontalScale from '@/shared/hooks/useHorizontalScale';
import useModerateScale from '@/shared/hooks/useModerateScale';
import StyleSheet from '@/shared/types/stylesheet';

type Props = {
    text: string;
}

export default function TagListItem({ text }: Props) {

    return (<p style={{ ...styles.tag, width: useHorizontalScale(125), padding: useModerateScale(6), marginRight: useHorizontalScale(16), fontSize: useModerateScale(18) }}>{text}</p>)
}

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#8A6AC7',
        color: '#161F22',
        textAlign: 'center',
        fontWeight: '600'
    }
});

