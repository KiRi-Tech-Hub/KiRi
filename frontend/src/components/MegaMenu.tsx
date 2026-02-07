import { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Rocket, Database, Layers, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuData = [
    {
        id: 'application',
        label: 'Application Solution',
        icon: Code,
        items: [
            {
                title: 'Web Development',
                description: 'Create intuitive websites & web apps that boost brand presence.',
                icon: Globe
            },
            {
                title: 'Mobile App Development',
                description: 'Build dynamic iOS & Android apps to reach vast audiences.',
                icon: Smartphone
            },
            {
                title: 'Custom Application',
                description: 'Applications built to meet your unique business needs perfectly.',
                icon: Layers
            },
            {
                title: 'AI / ML Development',
                description: 'Smart AI ML solutions that automate tasks and boost performance.',
                icon: Database
            },
            {
                title: 'SaaS Application',
                description: 'Create intuitive, engaging, and high-quality web applications.',
                icon: Rocket
            },
            {
                title: 'API Development',
                description: 'Integrate APIs into the application to optimize performance.',
                icon: Code
            }
        ]
    },
    {
        id: 'marketing',
        label: 'Digital Marketing',
        icon: Rocket,
        items: [
            {
                title: 'SEO Optimization',
                description: 'Improve search rankings and drive organic traffic.',
                icon: Globe
            },
            {
                title: 'Social Media Marketing',
                description: 'Engage audiences across all major social platforms.',
                icon: Smartphone
            },
            {
                title: 'Content Strategy',
                description: 'Compelling content that converts visitors into customers.',
                icon: Layers
            }
        ]
    },
    {
        id: 'design',
        label: 'Design Solution',
        icon: Layers,
        items: [
            {
                title: 'UI/UX Design',
                description: 'User-centric designs that delight and engage.',
                icon: Layout
            },
            {
                title: 'Brand Identity',
                description: 'Logos and visual systems that define your brand.',
                icon: Rocket
            },
            {
                title: 'Graphic Design',
                description: 'Visual assets for marketing and communication.',
                icon: Globe
            }
        ]
    }
];

// Import Layout manually since it might conflict with local variable names if spread imported above
import { Layout } from 'lucide-react';

interface MegaMenuProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState('application');

    // Reset to first category when menu opens
    useEffect(() => {
        if (isOpen) {
            setActiveCategory('application');
        }
    }, [isOpen]);

    return (
        <div
            className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 transform transition-all duration-300 origin-left ${isOpen ? 'opacity-100 translate-x-0 scale-100 visible' : 'opacity-0 -translate-x-4 scale-95 invisible'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ perspective: '1000px' }}
        >
            <div className="max-w-7xl mx-auto flex min-h-[400px]">
                {/* Left Sidebar */}
                <div className="w-1/4 bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 p-6 space-y-2">
                    {menuData.map((category) => (
                        <button
                            key={category.id}
                            onMouseEnter={() => setActiveCategory(category.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${activeCategory === category.id
                                ? 'bg-blue-600 text-white shadow-md transform translate-x-1'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm'
                                }`}
                        >
                            <span className="font-semibold text-sm">{category.label}</span>
                            {activeCategory === category.id && <ArrowRight size={16} />}
                        </button>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-8 relative overflow-hidden">
                    {menuData.map((category) => (
                        <div
                            key={category.id}
                            className={`absolute inset-0 p-8 grid grid-cols-3 gap-8 content-start transition-all duration-300 ${activeCategory === category.id
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8 pointer-events-none'
                                }`}
                        >
                            <div className="col-span-3 mb-4 flex items-center gap-3 text-blue-600 dark:text-blue-500">
                                <category.icon size={24} />
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.label}</h3>
                            </div>

                            {category.items.map((item, index) => (
                                <Link
                                    to="#"
                                    key={index}
                                    className="group block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                                >
                                    <div className="mb-3 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
