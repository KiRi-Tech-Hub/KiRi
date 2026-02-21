import { useState, useEffect } from 'react';
import { ArrowRight, Code, Server, ShoppingCart, Smartphone, Cloud, Layout, Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const technologiesMenuData = [
    {
        id: 'frontend',
        label: 'Front End',
        icon: Layout,
        items: [
            { title: 'Angular', description: 'Angular', icon: Code },
            { title: 'React JS', description: 'React JS', icon: Code },
            { title: 'NextJs', description: 'NextJs', icon: Code },
            { title: 'VueJs', description: 'VueJs', icon: Code }
        ]
    },
    {
        id: 'backend',
        label: 'Back End',
        icon: Server,
        items: [
            { title: 'Node.js', description: 'Node.js', icon: Terminal },
            { title: 'Python', description: 'Python', icon: Code },
            { title: 'Java', description: 'Java', icon: Code },
            { title: 'PHP', description: 'PHP', icon: Code }
        ]
    },
    {
        id: 'ecommerce',
        label: 'Ecommerce',
        icon: ShoppingCart,
        items: [
            { title: 'Shopify', description: 'Shopify', icon: ShoppingCart },
            { title: 'WooCommerce', description: 'WooCommerce', icon: ShoppingCart },
            { title: 'Magento', description: 'Magento', icon: ShoppingCart }
        ]
    },
    {
        id: 'mobile',
        label: 'Mobile',
        icon: Smartphone,
        items: [
            { title: 'Flutter', description: 'Flutter', icon: Smartphone },
            { title: 'React Native', description: 'React Native', icon: Smartphone },
            { title: 'iOS (Swift)', description: 'iOS', icon: Smartphone },
            { title: 'Android', description: 'Android', icon: Smartphone }
        ]
    },
    {
        id: 'devops',
        label: 'DevOps & Other',
        icon: Cloud,
        items: [
            { title: 'AWS', description: 'Amazon Web Services', icon: Cloud },
            { title: 'Docker', description: 'Docker', icon: Database },
            { title: 'Kubernetes', description: 'Kubernetes', icon: Server },
            { title: 'Azure', description: 'Microsoft Azure', icon: Cloud }
        ]
    }
];

interface TechnologiesMegaMenuProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function TechnologiesMegaMenu({ isOpen, onMouseEnter, onMouseLeave }: TechnologiesMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState('frontend');

    // Reset to first category when menu opens
    useEffect(() => {
        if (isOpen) {
            setActiveCategory('frontend');
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
                    {technologiesMenuData.map((category) => (
                        <Link
                            key={category.id}
                            to={`/technologies/${category.id}`}
                            onMouseEnter={() => setActiveCategory(category.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${activeCategory === category.id
                                ? 'bg-blue-600 text-white shadow-md transform translate-x-1'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm'
                                }`}
                        >
                            <span className="font-semibold text-sm">{category.label}</span>
                            {activeCategory === category.id && <ArrowRight size={16} />}
                        </Link>
                    ))}
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-8 relative overflow-hidden">
                    {/* Background Text Overlay */}
                    <div className="absolute top-4 right-8 pointer-events-none select-none opacity-5">
                        <span className="text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            TECHNOLOGIES
                        </span>
                    </div>

                    {technologiesMenuData.map((category) => (
                        <div
                            key={category.id}
                            className={`absolute inset-0 p-8 grid grid-cols-4 gap-8 content-start transition-all duration-300 ${activeCategory === category.id
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8 pointer-events-none'
                                }`}
                        >
                            <div className="col-span-full mb-4 flex items-center gap-3 text-blue-600 dark:text-blue-500">
                                <category.icon size={24} />
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.label}</h3>
                            </div>

                            {category.items.map((item, index) => (
                                <Link
                                    to={`/technologies/${category.id}`}
                                    key={index}
                                    className="group block p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700 text-center"
                                >
                                    <div className="mb-3 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </Link>
                            ))}
                            <div className="col-span-full mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <Link
                                    to={`/technologies/${category.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-200"
                                >
                                    Explore all {category.label} <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
