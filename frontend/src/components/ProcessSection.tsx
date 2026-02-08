import { Milestone, Search, PenTool, Code2, ShieldCheck, Rocket, Play } from 'lucide-react';

const processSteps = [
    {
        number: '01',
        title: 'Strategic Planning',
        description: 'We start by understanding your vision, goals, and business challenges. This phase ensures alignment between your idea and the right technical approach.',
        items: [
            'Business goals & success metrics',
            'Target audience & competitors',
            'Feature prioritization',
            'Technology roadmap'
        ],
        icon: Milestone,
        color: 'from-orange-400 to-pink-500',
        videoSrc: '/Strategic_Planning_Video_Creation.mp4'
    },
    {
        number: '02',
        title: 'Detailed Information Gathering',
        description: 'Before design or development, we go deep into requirements to avoid guesswork later.',
        items: [
            'Functional & non-functional requirements',
            'User flows & use cases',
            'Data structure & integrations',
            'Scalability & security considerations'
        ],
        icon: Search,
        color: 'from-blue-400 to-cyan-500',
        videoSrc: '/Video_Generation_Detailed_Information_Gathering.mp4'
    },
    {
        number: '03',
        title: 'UI/UX Design',
        description: 'We design clean, intuitive, and user-friendly interfaces that look great and work smoothly.',
        items: [
            'Wireframes & user journeys',
            'High-fidelity UI designs',
            'Responsive & accessibility-first design',
            'Design approval before development'
        ],
        icon: PenTool,
        color: 'from-purple-400 to-indigo-500',
        videoSrc: '/UI_UX_Design_Video_Creation.mp4'
    },
    {
        number: '04',
        title: 'Development',
        description: 'Our developers bring designs to life using modern, scalable technologies.',
        items: [
            'Frontend & backend development',
            'API & database integration',
            'Clean, maintainable code',
            'Regular progress updates'
        ],
        icon: Code2,
        color: 'from-green-400 to-emerald-500',
        videoSrc: '/development.mp4'
    },
    {
        number: '05',
        title: 'Testing & Quality Assurance',
        description: 'Every feature is tested thoroughly to ensure performance, security, and reliability.',
        items: [
            'Functional & UI testing',
            'Performance & load testing',
            'Bug fixing & optimization',
            'Cross-device & browser testing'
        ],
        icon: ShieldCheck,
        color: 'from-yellow-400 to-orange-500',
        videoSrc: '/testing and quality assurance.mp4'
    },
    {
        number: '06',
        title: 'Deployment & Support',
        description: 'We launch with confidence and stay with you even after go-live.',
        items: [
            'Production deployment',
            'Domain, hosting & server setup',
            'Monitoring & performance checks',
            'Ongoing maintenance & support'
        ],
        icon: Rocket,
        color: 'from-red-400 to-rose-500',
        videoSrc: '/deployment and support.mp4'
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-[#FFFBF5] dark:bg-slate-900 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
            {/* Background Pattern - Subtle Lines */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50px)'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                        INNOVATE. INTEGRATE. IMPACT.
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                        From Vision to Reality: Our Proven Process
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed text-lg">
                        We don't just build software; we engineer success. Our proven development process transforms complex challenges into elegant, high-impact digital solutions, ensuring your vision is realized with precision, scalability, and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Visual "Video" Placeholder / Actual Video */}
                            <div className={`h-48 w-full bg-gradient-to-br ${step.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>

                                {step.videoSrc ? (
                                    <>
                                        <div className="absolute inset-0 z-0 bg-black">
                                            <video
                                                src={step.videoSrc}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                        <step.icon className="absolute bottom-4 right-4 text-white/20 w-24 h-24 transform rotate-12" />
                                        {/* Play Button Overlay only for non-video items */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 cursor-pointer hover:bg-white/50 transition-all shadow-lg group-hover:scale-110">
                                                <Play className="w-6 h-6 text-white ml-1 fill-white" />
                                            </div>
                                        </div>
                                    </>
                                )}

                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                <ul className="space-y-2 mb-4">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .font-outline-2 {
                    -webkit-text-stroke: 1px currentColor;
                }
            `}</style>
        </section>
    );
}
