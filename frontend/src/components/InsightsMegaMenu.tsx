import { Info, FileText, Briefcase, UserPlus, Phone, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightsData = [
    {
        title: 'About Us',
        description: 'Discover our mission and expertise in delivering unique application, digital marketing, and design solutions.',
        icon: Info
    },
    {
        title: 'Blogs',
        description: 'Follow blog for insights, tips, & trends in digital marketing.',
        icon: FileText
    },
    {
        title: 'Portfolio',
        description: 'Explore portfolio showcasing our success stories.',
        icon: Briefcase
    },
    {
        title: 'Career',
        description: 'Join us and build career in app development, tech, & marketing.',
        icon: UserPlus
    },
    {
        title: 'Contact',
        description: 'Connect with us and take your business to the next level.',
        icon: Phone
    }
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
                        {insightsData.map((item, index) => (
                            <Link
                                to="#"
                                key={index}
                                className="group block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
