import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About Us', path: '/about' },
    ];

    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/logo.jpg"
                                alt="Brian's Foundation Repair Logo"
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors ${isActive(link.path)
                                    ? 'text-primary-red'
                                    : 'text-gray-600 hover:text-primary-black'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/free-inspection"
                            className="bg-primary-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-red-900/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Free Inspection
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary-black p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-4 rounded-md text-base font-semibold ${isActive(link.path)
                                ? 'bg-red-50 text-primary-red'
                                : 'text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 pb-2">
                        <Link
                            to="/free-inspection"
                            onClick={() => setIsOpen(false)}
                            className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-red hover:bg-red-700"
                        >
                            Get Free Inspection
                        </Link>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-primary-black text-white pt-20 pb-10 border-t-4 border-primary-red">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.jpg"
                                alt="Brian's Foundation Repair Logo"
                                className="h-20 w-auto object-contain bg-white p-2 rounded-xl"
                            />
                        </Link>
                        <p className="text-gray-400 max-w-md mb-8 leading-relaxed text-lg">
                            We serve customers all over Northeast Missouri, and make it our goal to provide top-notch residential and commercial services. Your home is your largest investment—trust the local experts to protect it.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-white text-xl mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/services/house-leveling" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> House Leveling</Link></li>
                            <li><Link to="/services/foundation-repair" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Foundation Repair</Link></li>
                            <li><Link to="/services/concrete-leveling" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Concrete Leveling</Link></li>
                            <li><Link to="/gallery" className="hover:text-primary-red transition-colors flex items-center gap-2 mt-4 pt-4 border-t border-white/10"><span className="text-primary-red">›</span> View Our Work</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-white text-xl mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary-red shrink-0 mt-1" />
                                <span>45325 State Highway 6<br />Hurdland MO 63547</span>
                            </li>
                            <li className="flex flex-col mt-6">
                                <span className="text-sm font-bold text-primary-red uppercase tracking-wider mb-1">Call for emergency repair</span>
                                <a href="tel:6604233468" className="text-2xl font-bold text-white hover:text-primary-red transition-colors">
                                    (660) 423-3468
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="mailto:briansfoundation@gmail.com" className="hover:text-white transition-colors">
                                    briansfoundation@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display font-bold text-white text-xl mb-6">Service Areas</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/locations/kirksville" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Kirksville, MO</Link></li>
                            <li><Link to="/locations/quincy" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Quincy, IL</Link></li>
                            <li><Link to="/locations/hannibal" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Hannibal, MO</Link></li>
                            <li><Link to="/locations/macon" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Macon, MO</Link></li>
                            <li><Link to="/locations/macomb" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Macomb, IL</Link></li>
                            <li><Link to="/locations/keokuk" className="hover:text-primary-red transition-colors flex items-center gap-2"><span className="text-primary-red">›</span> Keokuk, IA</Link></li>
                            <li className="pt-4 mt-4 border-t border-white/10 text-sm">
                                Serving a 100-mile radius across Northeast Missouri and West-Central Illinois.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Brian's Foundation Repair. All rights reserved. Northeast Missouri's Trusted Experts.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900 selection:bg-primary-red selection:text-white">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
