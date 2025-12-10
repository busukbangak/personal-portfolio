import targetSVG from '@/assets/target.svg'
import { Link } from 'react-router-dom';

import projectsJSON from '@/assets/projects.json'
import ProjectListItem from './ProjectListItem';

import buttonSVG from '@/assets/button.svg'
import SEO from '@/shared/components/SEO';

export default function Home() {
    const navLinkClasses = "[writing-mode:vertical-lr] [text-orientation:sideways] no-underline text-white cursor-pointer m-[1.66666vw] text-[0.8163265306122449vw]";

    return (
        <>
            <SEO title='Wan Abdul Aliim Wanali' description='portfolio' iconPath='' previewPath='' />

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
                    <h2 className="text-[4.506437768240343vh] font-medium text-[#BDC1C2] lg:text-[3.13333vw]">
                        I <span className="text-[#1CB0F7]">code</span> experiences, <br className="hidden lg:block" /> <span className="text-[#EB5A53]">design</span> visuals <br className="hidden lg:block" /> and produce <span className="text-[#FF9600]">audio</span>.
                    </h2>
                    <h3 className="text-[2.575107296137339vh] font-bold text-white lg:text-[1.66666vw]">Hey I'm Wan Abdul Aliim Wanali</h3>
                    <p className="text-[2.145922746781116vh] font-normal text-white lg:text-[1.224489795918367vw]">I’m an HCI-focused developer who bridges the gap between technology and people. My interests span designing and building human-centered applications for web, desktop, and mobile platforms, as well as exploring scientific research within the field of human-computer interaction. I’m currently studying at HAW Hamburg and developing When Stars Align with the <a className='text-[#B9B9B9] no-underline cursor-pointer' href='https://www.instagram.com/heartdrivengames'> @heartdrivengames</a> team.</p>
                    <div>
                        <a href="mailto:aliim.wanali@gmail.com"><img className="w-[27.46781115879828vh] lg:w-[15.3vw]" src={buttonSVG} /></a>
                    </div>
                </section>

                <section className="hidden lg:flex flex-5 overflow-auto pt-[4.444444444444444vh] flex-col">
                    {projectsJSON.map((item, index) => <ProjectListItem key={index} title={item.title} subtitle={item.subtitle} tags={item.tags} imagePath={item.imagePath} link={item.link} index={index + 1} />)}
                </section>

                <div className="lg:hidden">
                    {projectsJSON.map((item, index) => <ProjectListItem key={index} title={item.title} subtitle={item.subtitle} tags={item.tags} imagePath={item.imagePath} link={item.link} index={index + 1} />)}
                </div>

                <nav className="flex lg:hidden flex-row items-center justify-center m-8">
                    <Link to={'/imprint'} className="no-underline text-white cursor-pointer m-[1.66666vw] text-[1.716738197424893vh]">Imprint</Link>
                    <Link to={'/privacy-policy'} className="no-underline text-white cursor-pointer m-[1.66666vw] text-[1.716738197424893vh]">Privacy Policy</Link>
                </nav>
            </main>
        </>
    )
}
