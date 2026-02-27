import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { industriesData } from '../data/industries';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const Card3D = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        setRotateX(angleX);
        setRotateY(angleY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX: useSpring(rotateX, { stiffness: 300, damping: 30 }),
                rotateY: useSpring(rotateY, { stiffness: 300, damping: 30 }),
            }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default function IndustryDetail() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const industry = industriesData.find((i) => i.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!industry) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
                <Link to="/industries" className="text-blue-600 hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Industries
                </Link>
            </div>
        );
    }

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={industry.heroImage}
                        alt={industry.title}
                        className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 dark:via-slate-950/50 dark:to-slate-950" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-6 hover:gap-3 transition-all"
                        >
                            <ArrowLeft size={18} /> Back to Home
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {industry.title}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
                            {industry.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {industry.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-4 rounded-2xl min-w-[120px]"
                                >
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex justify-center lg:justify-end">
                        <Card3D className="w-full max-w-md">
                            <div className="relative aspect-square bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-full h-full bg-slate-900/10 dark:bg-slate-950/20 backdrop-blur-xl rounded-[2.3rem] flex flex-col items-center justify-center p-8 text-center border border-white/20">
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="mb-6 p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10"
                                    >
                                        <industry.icon size={80} className="text-white" strokeWidth={1.5} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Pioneering</h3>
                                    <p className="text-blue-100/80">Digital Excellence in {industry.title}</p>
                                </div>
                            </div>
                        </Card3D>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-16">
                            {/* About */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                                    {industry.fullDescription}
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Our Expertise</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {industry.features.map((feature, idx) => (
                                        <Card3D key={idx}>
                                            <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group">
                                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                                    <ChevronRight size={24} />
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </Card3D>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Benefits */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-2xl shadow-blue-500/20"
                                >
                                    <h3 className="text-2xl font-bold mb-8">Why KiRi?</h3>
                                    <div className="space-y-8">
                                        {industry.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-white rounded-full" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                                                    <p className="text-blue-100 text-sm leading-relaxed">{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/contact-us')}
                                    className="w-full mt-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 group"
                                >
                                    Consult an Expert <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative shapes */}
            <div className="fixed top-0 right-0 -z-10 w-full h-full pointer-events-none opacity-50 dark:opacity-20 translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full" />
            </div>
        </div>
    );
}
