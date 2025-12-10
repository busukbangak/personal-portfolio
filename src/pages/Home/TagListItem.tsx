type Props = {
    text: string;
}

export default function TagListItem({ text }: Props) {

    return (<p className='bg-[#8A6AC7] text-[#161F22] text-center font-semibold min-w-[6.510416666666667vw] text-[1.28755364806867vh] my-1 p-1 mr-2 lg:p-[0.3125vw] lg:mr-[0.8333333333333333vw] lg:text-[0.9375vw]'>{text}</p>)
}

