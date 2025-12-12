import { useState } from 'react';

import ProjectList from './ProjectList';
import TagFilter from './TagFilter';

import SEO from '@/shared/components/SEO';
import Footer from '@/shared/components/Footer';
import { Project } from '@/shared/types/types';
import cvJSON from '@/assets/cv.json';


export default function Home() {
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    return (
        <>
            <SEO 
                title='Wan Abdul Aliim Wanali - HCI focused Developer' 
                description='HCI-focused developer bridging technology and people. Designing human-centered applications for web, desktop, and mobile. Currently studying at HAW Hamburg and developing When Stars Align.' 
                iconPath='/favicon.svg' 
                previewPath='/favicon.svg'
                url='https://busukbangak.dev'
            />

            <main className="flex flex-col lg:flex-row h-screen bg-[#0A0A0A] overflow-y-auto font-[Montserrat]">
                {/* Left content section */}
                <section className="flex flex-col justify-between lg:w-[50%] lg:h-screen lg:sticky lg:top-0 bg-[#0A0A0A] p-8 lg:p-12 xl:p-16">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-8">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-[#E0E0E0]">
                            I <span className="text-[#5B9FD7]">code</span> experiences,<br />
                            <span className="text-[#E85D75]">design</span> visuals,<br />
                            and produce <span className="text-[#E8A750]">audio</span>.
                        </h1>

                        <div className="space-y-4">
                            <h1 className="text-xl lg:text-2xl font-bold text-[#F5F5F5]">Moin! I'm Wan Abdul Aliim Wanali</h1>
                            <h2 className="text-base lg:text-lg text-[#C0C0C0] leading-relaxed max-w-2xl">
                                I'm an HCI-focused developer who bridges the gap between technology and people. My interests span designing and building human-centered applications for web, desktop, and mobile platforms, as well as exploring scientific research within the field of human-computer interaction. I'm currently studying at HAW Hamburg and developing When Stars Align with the <a className="text-[#8A8A8A] no-underline cursor-pointer hover:text-[#B0B0B0]" href="https://www.instagram.com/heartdrivengames"> @heartdrivengames</a> team.
                            </h2>
                        </div>

                        <div className="pt-4 flex gap-4">
                            <a href="mailto:aliim.wanali@gmail.com" className="inline-block bg-[#5B9FD7] hover:bg-[#4A8BC6] text-white font-semibold px-8 py-3 rounded-md transition-colors">
                                Get in Touch
                            </a>
                            <a href={cvJSON.cvPath} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E85D75] hover:bg-[#D74C64] text-white font-semibold px-8 py-3 rounded-md transition-colors">
                                View CV
                            </a>
                        </div>
                    </div>

                    {/* Footer links - Desktop only */}
                    <div className="hidden lg:block">
                        <Footer />
                    </div>
                </section>

                {/* Right projects section */}
                <section className="flex-1 bg-[#0A0A0A] lg:flex flex-col hidden">
                    <TagFilter onFilteredProjectsChange={setFilteredProjects} />
                    <ProjectList projects={filteredProjects} />
                </section>

                <div className="lg:hidden">
                    <TagFilter isMobile onFilteredProjectsChange={setFilteredProjects} />
                    <ProjectList projects={filteredProjects} />

                    {/* Mobile footer links */}
                    <Footer isMobile />
                </div>
            </main>
        </>
    )
}
