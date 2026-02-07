import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart, Truck, Car, CreditCard, Activity, Star, Heart, Users, Building, Briefcase, Factory, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuData = [
    {
        id: 'app-solutions',
        label: 'App Solutions',
        icon: ShoppingCart, // Placeholder icon
        items: [
            {
                title: 'Food Delivery',
                description: 'Create intuitive apps for easy food search, order, and delivery.',
                icon: ShoppingCart
            },
            {
                title: 'Grocery Delivery',
                description: 'Build custom app for quick shopping and smooth grocery delivery.',
                icon: Truck
            },
            {
                title: 'Taxi Service',
                description: 'Travel safely with a quick, easy, and smooth taxi booking app.',
                icon: Car
            },
            {
                title: 'Fintech',
                description: 'Smart AI solutions to enhance financial services and operations.',
                icon: CreditCard
            },
            {
                title: 'Fitness/Gym',
                description: 'Achieve fitness goals with a personalized workout tracking app.',
                icon: Activity
            },
            {
                title: 'Astrology',
                description: 'Develop astrology app with horoscopes, predictions, & guidance.',
                icon: Star
            },
            {
                title: 'Matrimonial Application',
                description: 'Build a matrimonial website that helps people find right match.',
                icon: Heart
            },
            {
                title: 'Dating',
                description: 'Develop an AI-driven dating app for a smart matching experience.',
                icon: Users
            }
        ]
    },
    {
        id: 'enterprise-solutions',
        label: 'Enterprise Solutions',
        icon: Building,
        items: [
            {
                title: 'ERP Systems',
                description: 'Integrated management of main business processes.',
                icon: Building
            },
            {
                title: 'CRM Software',
                description: 'Manage interactions with current and potential customers.',
                icon: Users
            },
            {
                title: 'Supply Chain Management',
                description: 'Optimize the flow of goods and services.',
                icon: Truck
            },
            {
                title: 'HR Management',
                description: 'Streamline human resources and payroll processes.',
                icon: Briefcase
            },
            {
                title: 'Industrial Automation',
                description: 'Automate manufacturing and industrial processes.',
                icon: Factory
            },
            {
                title: 'Cybersecurity',
                description: 'Protect enterprise systems and data from cyber threats.',
                icon: Shield
            }
        ]
    }
];

interface SolutionsMegaMenuProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function SolutionsMegaMenu({ isOpen, onMouseEnter, onMouseLeave }: SolutionsMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState('app-solutions');

    // Reset to first category when menu opens
    useEffect(() => {
        if (isOpen) {
            setActiveCategory('app-solutions');
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
                <div className="w-3/4 p-8 relative overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                    {/* Background Text Overlay */}
                    <div className="sticky top-4 right-8 pointer-events-none select-none opacity-5">
                        <span className="text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                            SOLUTIONS
                        </span>
                    </div>

                    {menuData.map((category) => (
                        <div
                            key={category.id}
                            className={`absolute inset-0 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 content-start transition-all duration-300 ${activeCategory === category.id
                                ? 'opacity-100 translate-x-0 relative'
                                : 'opacity-0 translate-x-8 pointer-events-none absolute'
                                }`}
                        >
                            <div className="col-span-full mb-4 flex items-center gap-3 text-blue-600 dark:text-blue-500">
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
