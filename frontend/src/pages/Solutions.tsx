import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Truck, Car, CreditCard, Activity, Star, Heart, Users, Building, Briefcase, Factory, Shield, Sparkles } from 'lucide-react';
import { AuroraBackground } from '../components/ui/aurora-background';
import ContactFormModal from '../components/ContactFormModal';
import { ThreeDCard, CardItem } from '../components/ui/ThreeDCard';

const solutionsData = [
    {
        id: 'app-solutions',
        label: 'App Solutions',
        description: 'Empower your business with cutting-edge mobile and web applications designed for scale and user engagement.',
        icon: Sparkles,
        items: [
            {
                title: 'Food Delivery',
                slug: 'food-delivery',
                description: 'Create intuitive apps for easy food search, order, and delivery.',
                icon: ShoppingCart,
                color: 'from-orange-500 to-red-600'
            },
            {
                title: 'Grocery Delivery',
                slug: 'grocery-delivery',
                description: 'Build custom app for quick shopping and smooth grocery delivery.',
                icon: Truck,
                color: 'from-green-500 to-emerald-600'
            },
            {
                title: 'Taxi Service',
                slug: 'taxi-service',
                description: 'Travel safely with a quick, easy, and smooth taxi booking app.',
                icon: Car,
                color: 'from-blue-500 to-indigo-600'
            },
            {
                title: 'Fintech',
                slug: 'fintech',
                description: 'Smart AI solutions to enhance financial services and operations.',
                icon: CreditCard,
                color: 'from-slate-700 to-slate-900'
            },
            {
                title: 'Fitness/Gym',
                slug: 'fitness-gym',
                description: 'Achieve fitness goals with a personalized workout tracking app.',
                icon: Activity,
                color: 'from-pink-500 to-rose-600'
            },
            {
                title: 'Astrology',
                slug: 'astrology',
                description: 'Develop astrology app with horoscopes, predictions, & guidance.',
                icon: Star,
                color: 'from-purple-500 to-indigo-600'
            },
            {
                title: 'Matrimonial Application',
                slug: 'matrimonial',
                description: 'Build a matrimonial website that helps people find right match.',
                icon: Heart,
                color: 'from-red-400 to-pink-500'
            },
            {
                title: 'Dating',
                slug: 'dating',
                description: 'Develop an AI-driven dating app for a smart matching experience.',
                icon: Users,
                color: 'from-orange-400 to-red-500'
            }
        ]
    },
    {
        id: 'enterprise-solutions',
        label: 'Enterprise Solutions',
        description: 'Robust, scalable, and secure industrial solutions to streamline complex business processes and drive growth.',
        icon: Building,
        items: [
            {
                title: 'ERP Systems',
                slug: 'erp-systems',
                description: 'Integrated management of main business processes.',
                icon: Building,
                color: 'from-blue-600 to-indigo-700'
            },
            {
                title: 'CRM Software',
                slug: 'crm-software',
                description: 'Manage interactions with current and potential customers.',
                icon: Users,
                color: 'from-emerald-500 to-teal-600'
            },
            {
                title: 'Supply Chain Management',
                slug: 'supply-chain',
                description: 'Optimize the flow of goods and services.',
                icon: Truck,
                color: 'from-amber-500 to-orange-600'
            },
            {
                title: 'HR Management',
                slug: 'hr-management',
                description: 'Streamline human resources and payroll processes.',
                icon: Briefcase,
                color: 'from-violet-500 to-purple-600'
            },
            {
                title: 'Industrial Automation',
                slug: 'industrial-automation',
                description: 'Automate manufacturing and industrial processes.',
                icon: Factory,
                color: 'from-slate-600 to-slate-800'
            },
            {
                title: 'Cybersecurity',
                slug: 'cybersecurity',
                description: 'Protect enterprise systems and data from cyber threats.',
                icon: Shield,
                color: 'from-red-600 to-rose-700'
            }
        ]
    }
];

export default function Solutions() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-20 overflow-hidden">
            {/* Hero Section */}
            <AuroraBackground>
                <div className="relative px-4 flex flex-col justify-center items-center z-10 w-full max-w-7xl mx-auto py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500">
                            Custom Solutions &bull; Industrial Excellence
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                            Defining the future of <br />
                            <span className="italic text-slate-400 dark:text-slate-600 font-light text-3xl sm:text-5xl md:text-6xl">digital possibilities.</span>
                        </h1>
                        <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            From consumer-facing mobile applications to complex enterprise ecosystems, we build the technology that powers tomorrow's industry leaders.
                        </p>
                        <div className="pt-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Discuss Your Solution
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </AuroraBackground>

            {/* Solutions Sections */}
            <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
                {solutionsData.map((category) => (
                    <section key={category.id} className="relative">
                        <div className="mb-12 space-y-4">
                            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-500">
                                <category.icon size={24} />
                                <span className="text-sm font-bold tracking-widest uppercase">{category.label}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                                {category.id === 'app-solutions' ? 'Innovative Applications' : 'Strategic Enterprise Infrastructure'}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-lg">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {category.items.map((item: any, index) => (
                                <Link key={index} to={`/solutions/${item.slug}`} className="h-full">
                                    <ThreeDCard className="h-full">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group h-full relative p-8 rounded-3xl bg-white dark:bg-[#121217] border border-slate-100 dark:border-white/[0.05] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                                        >
                                            <CardItem translateZ={30} className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                                <item.icon size={28} />
                                            </CardItem>
                                            <CardItem translateZ={50}>
                                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-base text-slate-500 dark:text-white/40 leading-relaxed font-light">
                                                    {item.description}
                                                </p>
                                                <div className="mt-8 flex items-center text-blue-600 dark:text-blue-500 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                                    Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
                                                </div>
                                            </CardItem>
                                        </motion.div>
                                    </ThreeDCard>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Industrial Highlight Section */}
            <section className="bg-slate-900 py-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <h3 className="text-blue-500 font-bold tracking-widest uppercase text-sm">Our Philosophy</h3>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
                            Engineered for Scale, <br /> Built for Impact
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We don't believe in one-size-fits-all. Every solution we architect is tailored to the specific operational needs and growth trajectories of our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Security First', desc: 'Enterprise-grade security protocols baked into every line of code.' },
                            { title: 'Cloud Native', desc: 'Scalable infrastructure that grows seamlessly with your business.' },
                            { title: 'AI Optimized', desc: 'Leveraging modern AI to automate processes and unlock insights.' }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                                <h4 className="text-xl font-bold text-white mb-2">{stat.title}</h4>
                                <p className="text-slate-400 text-sm">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Ready to build your <br /> custom solution?
                        </h2>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                            Let's transform your vision into a high-performance digital reality. Our experts are ready to guide you.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2"
                        >
                            Get Started Now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
