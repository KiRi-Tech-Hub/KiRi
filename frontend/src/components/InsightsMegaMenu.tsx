import { Info, Briefcase, UserPlus, Phone, Lightbulb, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightsData = [
    {
        title: 'About Us',
        description: 'Our story, mission, values, and the team behind KiRi.',
        icon: Info,
        href: '/about',
        color: '#6366f1',
    },
    {
        title: 'Blog',
        description: 'Engineering deep-dives, product thinking, and design insights.',
        icon: BookOpen,
        href: '/blog',
        color: '#3b82f6',
    },
    {
        title: 'Portfolio',
        description: "A curated showcase of the products and platforms we've built.",
        icon: Briefcase,
        href: '/portfolio',
        color: '#ec4899',
    },
    {
        title: 'Careers',
        description: 'Join a small team doing ambitious work. 6 roles open.',
        icon: UserPlus,
        href: '/careers',
        color: '#22c55e',
    },
    {
        title: 'Contact',
        description: 'Start a conversation — we respond within a few hours.',
        icon: Phone,
        href: '/contact-us',
        color: '#f59e0b',
    },
];

interface InsightsMegaMenuProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function InsightsMegaMenu({ isOpen, onMouseEnter, onMouseLeave }: InsightsMegaMenuProps) {
    return (
        <div
            className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 transform transition-all duration-300 origin-left ${isOpen ? 'opacity-100 translate-x-0 scale-100 visible' : 'opacity-0 -translate-x-4 scale-95 invisible'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ perspective: '1000px' }}
        >
            <div className="max-w-7xl mx-auto p-8 relative overflow-hidden min-h-[300px]">
                {/* Background Text Overlay */}
                <div className="absolute top-4 right-8 pointer-events-none select-none opacity-5">
                    <span className="text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        INSIGHTS
                    </span>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8 text-blue-600 dark:text-blue-500">
                        <Lightbulb size={28} />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Insights</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
                        {insightsData.map((item, index) => (
                            <Link
                                to={item.href}
                                key={index}
                                className="group block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: `${item.color}18` }}
                                    >
                                        <item.icon size={18} style={{ color: item.color }} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
