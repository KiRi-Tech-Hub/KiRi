import { useState, useRef } from 'react';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import IndustriesMegaMenu from './IndustriesMegaMenu';
import InsightsMegaMenu from './InsightsMegaMenu';
import TechnologiesMegaMenu from './TechnologiesMegaMenu';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (menuName: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menuName);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const navItems = [
        { name: 'Services', path: '/services', hasMegaMenu: true },
        { name: 'Solutions', path: '/solutions', hasMegaMenu: true },
        { name: 'Industries', path: '/industries', hasMegaMenu: true },
        { name: 'Insights', path: '/insights', hasMegaMenu: true },
        { name: 'Technologies', path: '/technologies', hasMegaMenu: true }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-slate-900 z-50 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 relative">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="KiRi"
                                className="h-48 w-auto object-contain absolute top-1/2 -translate-y-1/2 -left-8 filter-none transition-none opacity-100 hover:filter-none hover:opacity-100"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 h-full items-center">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="h-full flex items-center"
                                onMouseEnter={item.hasMegaMenu ? () => handleMouseEnter(item.name) : undefined}
                                onMouseLeave={item.hasMegaMenu ? handleMouseLeave : undefined}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group flex items-center font-medium text-[15px] transition-colors duration-200 h-full ${isActive || (activeMenu === item.name)
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                        }`
                                    }
                                >
                                    {item.name}
                                    {item.hasMegaMenu && (
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${(activeMenu === item.name)
                                                ? 'text-blue-600 dark:text-blue-400 -rotate-180'
                                                : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                                }`}
                                        />
                                    )}
                                </NavLink>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
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

                        {/* Mobile Menu Button - Placeholder */}
                        <div className="md:hidden">
                            <button className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mega Menus */}
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
        </header>
    );
}
