

import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { BackgroundBeams } from '../components/ui/background-beams';
import OrbitingCircles from '../components/ui/orbiting-circles';
import { BookOpen, Target, Heart, Zap, ShieldCheck, Users, Cpu, Globe, Server, Code, Database, Rocket, Star, MessageSquareQuote } from 'lucide-react';


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

            {/* Process Section - How We Work */}
            <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
                            From Concept to Reality
                        </h2>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                            Our process is designed to bring clarity to complexity. We guide you through every step of the digital transformation journey.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and challenges." },
                                { step: "02", title: "Strategy", desc: "Architecting a roadmap for scalable success." },
                                { step: "03", title: "Execution", desc: "Building with precision, agility, and best practices." },
                                { step: "04", title: "Evolution", desc: "Continuous improvement and growth scaling." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-neutral-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-neutral-700 relative group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0 relative z-10 shadow-lg shadow-blue-500/30">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">{item.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Ecosystem Section */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                            KiRi
                        </span>

                        {/* Inner Circles */}
                        <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
                            <Code className="h-6 w-6 text-blue-500" />
                        </OrbitingCircles>
                        <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
                            <Database className="h-6 w-6 text-green-500" />
                        </OrbitingCircles>

                        {/* Middle Circles */}
                        <OrbitingCircles className="size-[50px] border-none bg-transparent" reverse duration={20} delay={10} radius={140}>
                            <Server className="h-8 w-8 text-purple-500" />
                        </OrbitingCircles>
                        <OrbitingCircles className="size-[50px] border-none bg-transparent" reverse duration={20} delay={20} radius={140}>
                            <Globe className="h-8 w-8 text-cyan-500" />
                        </OrbitingCircles>

                        {/* Outer Circles */}
                        <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={20} delay={10} radius={210}>
                            <Cpu className="h-10 w-10 text-orange-500" />
                        </OrbitingCircles>
                        <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={20} delay={5} radius={210}>
                            <Zap className="h-10 w-10 text-yellow-500" />
                        </OrbitingCircles>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-serif">
                            Powered by Modern Tech
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We don't rely on outdated legacy systems. Our stack is modern, robust, and scalable.
                            From cloud-native architectures to reactive frontends, we use the best tools for the job.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "React & Next.js Ecosystem",
                                "Cloud Native & Serverless",
                                "AI & Machine Learning Integration",
                                "Real-time Data Processing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why KiRi Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-serif">
                                Why Choose KiRi?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                In a world of cookie-cutter solutions, we build bespoke. We don't just deliver code; we deliver competitive advantage.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Business-First Approach", desc: "We align technology with your business metrics, not just engineering goals." },
                                    { title: "Obsessive Quality", desc: "We have zero tolerance for spaghetti code or bad UX." },
                                    { title: "Rapid Velocity", desc: "Our agile workflows ensure you get to market faster without breaking things." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                            <div className="relative bg-neutral-900 rounded-3xl p-8 border border-neutral-800 shadow-2xl">
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex gap-2 text-neutral-500">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-green-400">$ kiri start-project</div>
                                    <div className="text-white">Initializing excellence...</div>
                                    <div className="text-blue-400">✓ Strategy aligned</div>
                                    <div className="text-blue-400">✓ Architecture designed</div>
                                    <div className="text-blue-400">✓ UX optimized</div>
                                    <div className="text-white">🚀 Launching success...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="py-24 bg-neutral-900 border-y border-neutral-800 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "50+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6 text-blue-500 mx-auto mb-2" /> },
                            { value: "99.9%", label: "Uptime Guarantee", icon: <Server className="w-6 h-6 text-green-500 mx-auto mb-2" /> },
                            { value: "10k+", label: "Lines of Code/Day", icon: <Code className="w-6 h-6 text-purple-500 mx-auto mb-2" /> },
                            { value: "24/7", label: "Support & Monitoring", icon: <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" /> }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 transition-colors">
                                {stat.icon}
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-neutral-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
                            What Our Partners Say
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what visionary leaders have to say about working with KiRi.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "KiRi didn't just build a product; they built a scalable foundation for our entire business. Their attention to detail is unmatched.",
                                author: "Sarah Jenkins",
                                role: "CTO, FinTech Startups"
                            },
                            {
                                quote: "The speed and quality of delivery were impressive. They translated our complex requirements into a seamless user experience.",
                                author: "David Chen",
                                role: "Founder, HealthAI"
                            },
                            {
                                quote: "A true partner in innovation. They challenged our assumptions and helped us build something better than we imagined.",
                                author: "Elena Rodriguez",
                                role: "Product Director, EduTech Co"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-700 relative">
                                <MessageSquareQuote className="w-10 h-10 text-blue-100 dark:text-blue-900/30 absolute top-6 right-6" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
                <div className="absolute inset-0 w-full h-full bg-neutral-950 z-0">
                    <BackgroundBeams />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-neutral-400 max-w-lg mx-auto mb-8 text-lg">
                        Let's turn your boldest ideas into digital reality.
                        Partner with KiRi for your next breakthrough.
                    </p>
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start a Conversation
                    </button>
                </div>
            </div>
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
