import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import IndustriesMegaMenu from './IndustriesMegaMenu';
import InsightsMegaMenu from './InsightsMegaMenu';
import TechnologiesMegaMenu from './TechnologiesMegaMenu';
import { useTheme } from '../context/ThemeContext';
import { servicesMenuData } from './MegaMenu';
import { solutionsMenuData } from './SolutionsMegaMenu';
import { industriesMenuData } from './IndustriesMegaMenu';
import { insightsMenuData } from './InsightsMegaMenu';
import { technologiesMenuData } from './TechnologiesMegaMenu';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();

    const toggleMobileSubmenu = (menuName: string) => {
        setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
    };

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleMouseEnter = (menuName: string) => {
        if (window.innerWidth < 768) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menuName);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 768) return;
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const navItems = [
        { name: 'Home', path: '/', isLink: true },
        { name: 'Services', path: '#', isLink: false },
        { name: 'Solutions', path: '#', isLink: false },
        { name: 'Industries', path: '#', isLink: false },
        { name: 'Insights', path: '#', isLink: false },
        { name: 'Technologies', path: '#', isLink: false }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-slate-900 z-50 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 relative">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer z-[60]">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <img
                                src="/logo.png"
                                alt="KiRi"
                                className="h-48 w-auto object-contain absolute top-1/2 -translate-y-1/2 -left-8 filter-none transition-none opacity-100 hover:filter-none hover:opacity-100"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-center space-x-8 h-full items-center">
                        {navItems.map((item) => {
                            const hasMegaMenu = ['Services', 'Solutions', 'Industries', 'Insights', 'Technologies'].includes(item.name);
                            const content = (
                                <>
                                    {item.name}
                                    {hasMegaMenu && (
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${(activeMenu === item.name)
                                                ? 'text-blue-600 dark:text-blue-400 -rotate-180'
                                                : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                                }`}
                                        />
                                    )}
                                </>
                            );

                            const commonClasses = `group flex items-center font-medium text-[15px] transition-colors duration-200 h-full cursor-pointer ${activeMenu === item.name
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                }`;

                            return (
                                <div
                                    key={item.name}
                                    className="h-full flex items-center"
                                    onMouseEnter={hasMegaMenu ? () => handleMouseEnter(item.name) : undefined}
                                    onMouseLeave={hasMegaMenu ? handleMouseLeave : undefined}
                                >
                                    {item.isLink ? (
                                        <NavLink
                                            to={item.path}
                                            end={item.path === '/'}
                                            className={({ isActive }) =>
                                                `${commonClasses} ${isActive && item.name !== 'Home' ? 'text-blue-600 dark:text-blue-400' : ''} ${isActive && item.name === 'Home' ? 'text-slate-900 dark:text-white' : ''}`
                                            }
                                        >
                                            {content}
                                        </NavLink>
                                    ) : (
                                        <div className={commonClasses}>
                                            {content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-4 z-[60]">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-600" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Desktop Mega Menus */}
                    <div className="hidden md:block">
                        <MegaMenu
                            isOpen={activeMenu === 'Services'}
                            onMouseEnter={() => handleMouseEnter('Services')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <SolutionsMegaMenu
                            isOpen={activeMenu === 'Solutions'}
                            onMouseEnter={() => handleMouseEnter('Solutions')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <IndustriesMegaMenu
                            isOpen={activeMenu === 'Industries'}
                            onMouseEnter={() => handleMouseEnter('Industries')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <InsightsMegaMenu
                            isOpen={activeMenu === 'Insights'}
                            onMouseEnter={() => handleMouseEnter('Insights')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <TechnologiesMegaMenu
                            isOpen={activeMenu === 'Technologies'}
                            onMouseEnter={() => handleMouseEnter('Technologies')}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white dark:bg-slate-900 z-50 md:hidden transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '80px' }}
            >
                <div className="flex flex-col h-full bg-white dark:bg-slate-900 px-6 py-8 overflow-y-auto">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => {
                            const commonClasses = `text-2xl font-bold transition-colors w-full text-left flex items-center justify-between`;
                            const isSubmenuOpen = activeMobileSubmenu === item.name;

                            if (item.isLink) {
                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        end={item.path === '/'}
                                        className={({ isActive }) =>
                                            `${commonClasses} ${isActive
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-slate-900 dark:text-white'
                                            }`
                                        }
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                );
                            }

                            return (
                                <div key={item.name} className="flex flex-col">
                                    <button
                                        onClick={() => toggleMobileSubmenu(item.name)}
                                        className={`${commonClasses} text-slate-900 dark:text-white`}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isSubmenuOpen ? '-rotate-180 text-blue-600' : 'text-slate-400'}`} />
                                    </button>

                                    {/* Accordion Content */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="flex flex-col space-y-3 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                                            {item.name === 'Services' && servicesMenuData.map((cat) => (
                                                <div key={cat.id} className="space-y-2">
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.label}</p>
                                                    {cat.items.map((sub) => (
                                                        <Link
                                                            key={sub.slug}
                                                            to={`/services/${sub.slug}`}
                                                            className="block text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}

                                            {item.name === 'Solutions' && solutionsMenuData.map((cat) => (
                                                <div key={cat.id} className="space-y-2">
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.label}</p>
                                                    {cat.items.map((sub, idx) => (
                                                        <Link
                                                            key={idx}
                                                            to="#"
                                                            className="block text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}

                                            {item.name === 'Industries' && industriesMenuData.map((ind, idx) => (
                                                <Link
                                                    key={idx}
                                                    to="#"
                                                    className="block text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {ind.title}
                                                </Link>
                                            ))}

                                            {item.name === 'Insights' && insightsMenuData.map((insight, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={insight.href}
                                                    className="block text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {insight.title}
                                                </Link>
                                            ))}

                                            {item.name === 'Technologies' && technologiesMenuData.map((cat) => (
                                                <div key={cat.id} className="space-y-2">
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.label}</p>
                                                    {cat.items.map((sub, idx) => (
                                                        <Link
                                                            key={idx}
                                                            to={`/technologies/${cat.id}`}
                                                            className="block text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pb-12">
                        <Link
                            to="/contact-us"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-800">
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 uppercase tracking-widest font-bold">Contact Us</p>
                            <p className="text-slate-900 dark:text-white font-medium mb-1">kiri.tech.hub@gmail.com</p>
                            <p className="text-slate-900 dark:text-white font-medium">+91 85117 05401</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
