import { ShoppingCart, Plane, Heart, Home, GraduationCap, Truck, Zap, BarChart3, Film, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        name: 'Ecommerce',
        icon: ShoppingCart,
        description: 'Scalable storefronts driving sales and loyalty.',
        slug: 'ecommerce-multivendor'
    },
    {
        name: 'Travel & Hospitality',
        icon: Plane,
        description: 'Seamless booking engines for modern travelers.',
        slug: 'travel-hospitality'
    },
    {
        name: 'Healthcare',
        icon: Heart,
        description: 'Secure, compliant, patient-centric solutions.',
        slug: 'medical-healthcare'
    },
    {
        name: 'Real Estate & Constr.',
        icon: Home,
        description: 'Immersive property experiences & management tools.',
        slug: 'real-estate-construction'
    },
    {
        name: 'Education',
        icon: GraduationCap,
        description: 'Interactive LMS and e-learning platforms.',
        slug: 'edtech-elearning'
    },
    {
        name: 'Transport & Logistics',
        icon: Truck,
        description: 'Real-time tracking and fleet management systems.',
        slug: 'transportation-logistics'
    },
    {
        name: 'Utilities & On-Demand',
        icon: Zap,
        description: 'Smart solutions for instant service delivery.',
        slug: 'utilities-on-demand'
    },
    {
        name: 'Finance & Insurance',
        icon: BarChart3,
        description: 'High-security fintech platforms for the digital age.',
        slug: 'finance-insurance'
    },
    {
        name: 'Media & Entertainment',
        icon: Film,
        description: 'Engaging content delivery & streaming apps.',
        slug: 'media-entertainment'
    },
    {
        name: 'Manufacturing',
        icon: Factory,
        description: 'IoT-driven automation & efficiency tools.',
        slug: 'manufacturing'
    }
];

export default function IndustriesSection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <p className="text-orange-500 font-bold tracking-widest uppercase text-[10px] md:text-sm">
                        INDUSTRIES WE SERVE
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
                        Redefining Standards <br className="sm:hidden" /> Across Industries
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-2">
                        Generic solutions don't build market leaders. We decode the unique complexities of your sector—whether it's high-stakes FinTech or fast-paced E-commerce—to engineer digital ecosystems that turn industry challenges into competitive advantages.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((item, index) => (
                        <Link
                            to={`/industries/${item.slug}`}
                            key={index}
                            className="group relative bg-neutral-900/50 border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 h-48 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-neutral-900 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        >
                            {/* Icon & Title - Default State */}
                            <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="mb-4 text-slate-400 group-hover:text-orange-500 transition-colors duration-300">
                                    <item.icon strokeWidth={1.5} size={40} />
                                </div>
                                <h3 className="font-medium text-slate-300 group-hover:text-white transition-colors px-2">
                                    {item.name}
                                </h3>
                            </div>

                            {/* Description Overlay - Slides up on Hover */}
                            <div className="absolute inset-x-0 bottom-0 bg-orange-600/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center h-full">
                                <p className="text-white text-sm font-medium leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
