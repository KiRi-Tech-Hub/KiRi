import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industries';
import { ChevronRight } from 'lucide-react';

export default function Industries() {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20 space-y-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm"
                    >
                        Vertical Expertise
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
                    >
                        Industries We Empower
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        We deliver tailored digital transformation solutions across a diverse range of sectors,
                        turning industry challenges into competitive advantages.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industriesData.map((industry, index) => (
                        <motion.div
                            key={industry.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                to={`/industries/${industry.slug}`}
                                className="group block h-full bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                                    <industry.icon size={120} />
                                </div>

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <industry.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{industry.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-2">
                                        {industry.description}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group/link">
                                        Explore Solutions <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
