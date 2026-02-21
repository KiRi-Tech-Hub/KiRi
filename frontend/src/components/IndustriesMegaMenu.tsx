import { ShoppingBag, GraduationCap, Stethoscope, Home, Plane, Zap, Film, Truck, BarChart3, Factory, Droplet, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const industriesMenuData = [
    {
        title: 'Ecommerce & Multivendor',
        description: 'Build a smart eCommerce platform to grow reach and brand value.',
        icon: ShoppingBag
    },
    {
        title: 'EdTech & E-Learning',
        description: 'Create learning platforms that engage and boost your brand.',
        icon: GraduationCap
    },
    {
        title: 'Medical & Healthcare',
        description: 'Custom healthcare applications to improve care and visibility.',
        icon: Stethoscope
    },
    {
        title: 'Real Estate & Construction',
        description: 'Real estate web and apps built to attract, convert, and engage.',
        icon: Home
    },
    {
        title: 'Travel & Hospitality',
        description: 'Travel applications made to simplify booking for a safe journey.',
        icon: Plane
    },
    {
        title: 'Utilities & On Demand',
        description: 'On-demand websites & apps for fast, reliable, and smart service.',
        icon: Zap
    },
    {
        title: 'Media & Entertainment',
        description: 'Applications for streaming, media sharing, and user delight.',
        icon: Film
    },
    {
        title: 'Transportation & Logistics',
        description: 'Logistics applications built to track, manage, and deliver fast.',
        icon: Truck
    },
    {
        title: 'Finance & Insurance',
        description: 'Secure fintech platforms that simplify money and coverage.',
        icon: BarChart3
    },
    {
        title: 'Manufacturing',
        description: 'Applications that streamline manufacturing and boost output.',
        icon: Factory
    },
    {
        title: 'Oil and Gas',
        description: 'Custom software to streamline operations and boost energy efficiency.',
        icon: Droplet
    },
    {
        title: 'Other Industries',
        description: 'Deliver smart solutions to suit your unique industry.',
        icon: Layers
    }
];

interface IndustriesMegaMenuProps {
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function IndustriesMegaMenu({ isOpen, onMouseEnter, onMouseLeave }: IndustriesMegaMenuProps) {
    return (
        <div
            className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 transform transition-all duration-300 origin-left ${isOpen ? 'opacity-100 translate-x-0 scale-100 visible' : 'opacity-0 -translate-x-4 scale-95 invisible'
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ perspective: '1000px' }}
        >
            <div className="max-w-7xl mx-auto p-8 relative overflow-hidden min-h-[400px]">
                {/* Background Text Overlay */}
                <div className="absolute top-4 right-8 pointer-events-none select-none opacity-5">
                    <span className="text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                        INDUSTRIES
                    </span>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8 text-blue-600 dark:text-blue-500">
                        <Factory size={28} />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Industries</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                        {industriesMenuData.map((item, index) => (
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
