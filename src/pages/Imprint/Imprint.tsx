import { Link } from 'react-router-dom';
import Footer from '../../shared/components/Footer';
import SEO from '@/shared/components/SEO';

export default function Imprint() {
    return (
        <>
            <SEO 
                title='Imprint - Wan Abdul Aliim Wanali' 
                description='Imprint and contact information for Wan Abdul Aliim Wanali.' 
                iconPath='/images/favicon.svg' 
                previewPath='/images/favicon.svg'
                url='https://busukbangak.dev/imprint'
            />
            <main className="flex flex-col min-h-screen bg-[#0A0A0A] font-[Montserrat]">
            <div className="flex-1 flex flex-col justify-between p-8 lg:p-12 xl:p-16">
                <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-8">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-[#E0E0E0]">Imprint</h1>
                    
                    <div className="space-y-4">
                        <p className="text-base lg:text-lg text-[#C0C0C0] leading-relaxed">
                            Wan Abdul Aliim Wanali<br />
                            aliim.wanali@gmail.com
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link to={'/'} className="inline-block bg-[#5B9FD7] hover:bg-[#4A8BC6] text-white font-semibold px-8 py-3 rounded-md transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Footer />
                </div>
            </div>

            <div className="lg:hidden">
                <Footer isMobile={true} />
            </div>
        </main>
        </>
    )
}
