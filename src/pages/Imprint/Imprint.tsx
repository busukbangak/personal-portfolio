import { Link } from 'react-router-dom';

export default function Imprint() {
    return (
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

                {/* Bottom links - Desktop only */}
                <div className="hidden lg:flex gap-6 text-sm text-white/50 mt-8">
                    <Link to={'/'} className="hover:text-white/70 transition-colors">Home</Link>
                    <Link to={'/imprint'} className="hover:text-white/70 transition-colors">Imprint</Link>
                    <Link to={'/privacy-policy'} className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                </div>
            </div>

            {/* Mobile footer links */}
            <nav className="flex lg:hidden flex-row items-center justify-center gap-6 p-8 text-sm text-white/50">
                <Link to={'/'} className="hover:text-white/70 transition-colors">Home</Link>
                <Link to={'/imprint'} className="hover:text-white/70 transition-colors">Imprint</Link>
                <Link to={'/privacy-policy'} className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            </nav>
        </main>
    )
}
