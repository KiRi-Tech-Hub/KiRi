
import { useParams, Navigate } from 'react-router-dom';
import { servicesData, type ServiceSlug } from '../data/services';
import { AuroraBackground } from '../components/ui/aurora-background';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import TechStackMarquee from '../components/TechStackMarquee';

export default function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData[slug as ServiceSlug];

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const ServiceIcon = service.icon;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section with Aurora Background */}
            <AuroraBackground className="h-[60vh] min-h-[500px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4 text-center z-10"
                >
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl mb-4">
                        <ServiceIcon size={48} className="text-white" />
                    </div>
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-md">
                        {service.category}
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 tracking-tight">
                        {service.title}
                    </h1>
                    <p className="font-light text-xl md:text-2xl dark:text-neutral-200 text-slate-600 max-w-2xl py-4">
                        {service.description}
                    </p>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                        Get Started <ArrowRight size={18} />
                    </button>
                </motion.div>
            </AuroraBackground>

            {/* Detailed Content & Features */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 gap-16 items-start mb-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Why Choose Our {service.title}?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            {service.detailedDescription}
                        </p>

                        <div className="space-y-4">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Revolving Tech Stack */}
                <div className="mb-24">
                    <TechStackMarquee technologies={service.technologies || []} />
                </div>

                {/* Feature Grid (Reusing BentoGrid for consistency if relevant, or just a grid) */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
                    Key Capabilities
                </h2>
                <BentoGrid className="max-w-4xl mx-auto">
                    {service.features.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            icon={<CheckCircle2 className="h-4 w-4 text-neutral-500" />}
                            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                            header={
                                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                                    <ServiceIcon className="text-neutral-300 dark:text-neutral-700 opacity-50" size={40} />
                                </div>
                            }
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}
