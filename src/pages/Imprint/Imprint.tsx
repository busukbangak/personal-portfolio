import targetSVG from '@/assets/target.svg'
import { Link } from 'react-router-dom';

export default function Imprint() {
    const navLinkClasses = "[writing-mode:vertical-lr] [text-orientation:sideways] no-underline text-white cursor-pointer m-[1.66666vw] text-[0.8163265306122449vw]";

    return (
        <main className="flex flex-col lg:flex-row flex-1 bg-[#161F22] overflow-auto font-[Montserrat]">
            <aside className="hidden lg:flex flex-col justify-between w-[3.90625vw]">
                <img className="w-[35%] self-center m-[1.66666vw]" src={targetSVG} />
                <nav className="flex flex-col items-center">
                    <Link to={'/'} className={navLinkClasses}>Home</Link>
                    <Link to={'/imprint'} className={navLinkClasses}>Imprint</Link>
                    <Link to={'/privacy-policy'} className={navLinkClasses}>Privacy Policy</Link>
                </nav>
            </aside>

            <section className="flex flex-col flex-3 bg-[#161F22] p-6 lg:bg-[#232F35] lg:p-[1.66666vw]">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className="no-underline cursor-pointer">
                        <h1 className="font-medium text-white m-0 text-[2.145922746781116vh] lg:text-[1.224489795918367vw]">/awanali</h1>
                    </Link>
                    <img className="w-[2.145922746781116vh] self-center m-[1.66666vw] lg:hidden" src={targetSVG} />
                </div>
                <h2 className="font-medium text-[#BDC1C2] text-[4.506437768240343vh] lg:text-[3.33333vw]">Imprint</h2>
                <p className="font-normal text-white text-[2.145922746781116vh] lg:text-[1.224489795918367vw]">
                    Wan Abdul Aliim Wanali <br />
                    aliim.wanali@gmail.com
                </p>
            </section>

            <nav className="flex lg:hidden flex-row items-center justify-center m-8">
                <Link to={'/imprint'} className="no-underline text-white cursor-pointer m-[1.66666vw] text-[1.716738197424893vh]">Imprint</Link>
                <Link to={'/privacy-policy'} className="no-underline text-white cursor-pointer m-[1.66666vw] text-[1.716738197424893vh]">Privacy Policy</Link>
            </nav>
        </main>
    )
}
