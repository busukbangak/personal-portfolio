type Props = {
    text: string;
}

export default function TagListItem({ text }: Props) {
    return (
        <span className='inline-block bg-white/10 text-white/80 text-sm font-medium px-3 py-1 rounded-full'>
            {text}
        </span>
    )
}

