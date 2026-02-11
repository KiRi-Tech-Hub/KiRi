import React from 'react';

import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { BookOpen, Target, Heart, Zap, ShieldCheck, Users } from 'lucide-react';


export default function OurPhilosophy() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative h-[75vh] w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/kiri_video.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                </div>
            </div>

            {/* Core Values Section */}
            <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">
                            OUR CORE VALUES
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Principles That Drive Us
                        </h2>
                    </div>

                    <BentoGrid className="max-w-4xl mx-auto">
                        {values.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </section>

            {/* Slogan Section - Innovate, Integrate, Impact */}
            <section className="py-24 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-24">
                        {/* Left Column - Scrolling Content */}
                        <div className="lg:w-1/2 space-y-32 py-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 dark:text-white">
                                    Innovate.
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    We don't follow trends; we set them. Innovation isn't just about using the latest tech—it's about finding smarter, faster, and more efficient ways to solve complex problems. From AI-driven insights to cutting-edge web architectures, we push the boundaries of what's possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 dark:text-white">
                                    Integrate.
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    Seamless connection is key. We build systems that talk to each other, creating a unified digital ecosystem. Whether it's integrating payment gateways, third-party APIs, or legacy systems, we ensure your technology stack functions as a cohesive unit.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-bold font-serif text-slate-900 dark:text-white">
                                    Impact.
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    Technology is a means to an end: growth. Our solutions are designed to deliver measurable results—whether it's increased user engagement, higher conversion rates, or streamlined operations. We focus on the metric that matters most: your success.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Sticky Image */}
                        <div className="lg:w-1/2 relative hidden lg:block">
                            <div className="sticky top-32 h-[calc(100vh-8rem)] flex items-center justify-center">
                                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500 ring-1 ring-black/5 dark:ring-white/10">
                                    <img
                                        src="/KiRi_.png"
                                        alt="KiRi Philosophy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Image (Non-sticky) */}
                        <div className="lg:hidden w-full flex justify-center mb-8">
                            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10">
                                <img
                                    src="/KiRi_.png"
                                    alt="KiRi Philosophy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-8 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 font-serif">
                        Our Manifesto
                    </h2>
                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify md:text-center">
                        <p>
                            In a digital landscape cluttered with noise, we choose clarity. We don't just write code; we architect solutions that speak to the end-user.
                            Our philosophy is rooted in the belief that great software is indistinguishable from magic—it works seamlessly, solves real problems, and delights the user at every interaction.
                        </p>
                        <p>
                            We are not just a vendor; we are partners in your innovation. We strip away the complexity of technology to reveal the simple, powerful tools that lie beneath.
                            Whether it's a startup MVP or an enterprise-grade platform, we bring the same level of obsession to detail, performance, and aesthetics.
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white italic">
                            "Innovate. Integrate. Impact." is not just a slogan. It's our promise.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

const values = [
    {
        title: "Precision Engineering",
        description: "We don't cut corners. Every line of code is optimized for performance and scalability.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/bento:scale-110" style={{ backgroundImage: "url('/precision.png')" }}></div>
            </div>
        ),
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "User-Centric Design",
        description: "Aesthetics meet functionality. We design experiences that users love to engage with.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/bento:scale-110" style={{ backgroundImage: "url('/usercentricdesign.png')" }}></div>
            </div>
        ),
        icon: <Heart className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Radical Transparency",
        description: "No hidden costs, no jargon. We keep you in the loop at every stage of development.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/bento:scale-110" style={{ backgroundImage: "url('/redicaltransparancy.png')" }}></div>
            </div>
        ),
        icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Partnership First",
        description: "Your win is our win. We align our goals with your business objectives for long-term success.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/bento:scale-110" style={{ backgroundImage: "url('/parthnershipfirst.png')" }}></div>
            </div>
        ),
        icon: <Users className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Future-Proof Tech",
        description: "We build with tomorrow in mind, using modern stacks that scale with your vision.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/bento:scale-110" style={{ backgroundImage: "url('/futureprofftech.png')" }}></div>
            </div>
        ),
        icon: <Target className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-3", // Full width
    },
];
