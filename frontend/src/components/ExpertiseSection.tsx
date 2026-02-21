import { Star, ArrowRight } from 'lucide-react';

const expertiseData = [
    {
        title: 'Web & Software Development',
        description: 'We create custom software and web applications built for performance, security, and growth.',
        items: [
            'Enterprise Software Development',
            'CRM Consulting',
            'Website Design (Frontend/Backend)',
            'API Development & Integration',
            'Agile Methodologies'
        ],
        theme: 'dark'
    },
    {
        title: 'Mobile App Development',
        description: 'From concept to deployment, we build high-performing mobile applications that function smoothly across platform.',
        items: [
            'Android & iOS App Development',
            'Cross-Platform Development',
            'UI/UX Design for Mobile',
            'App Store Deployment',
            'API Integration & Backend Systems'
        ],
        theme: 'light'
    },
    {
        title: 'AI & ML Development',
        description: 'Utilize advanced AI and powerful machine learning solutions to transform operations and deliver real-time insights.',
        items: [
            'Custom AI Development and Consulting',
            'Large Language Models',
            'AI Chatbot Development',
            'Generative AI & RPA Solutions',
            'Predictive Modeling & ML Development',
            'ChatGPT Solutions'
        ],
        theme: 'dark'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Build engaging, secure, and scalable online stores with the best website design company in India that drives conversions and loyalty.',
        items: [
            'eCommerce Consulting',
            'Custom Store Development & Platform Integration',
            'Responsive eCommerce UI/UX Design',
            'Secure Payment Gateway',
            'Maintenance & Support'
        ],
        theme: 'light'
    },
    {
        title: 'Software Product Engineering',
        description: 'We offer end-to-end web app & software services to guide your project from prototypes to live launch.',
        items: [
            'MVP Development',
            'Web & Progressive Web Apps (PWAs)'
        ],
        theme: 'dark'
    }
];

interface ExpertiseSectionProps {
    onOpenModal?: () => void;
}

export default function ExpertiseSection({ onOpenModal }: ExpertiseSectionProps) {
    return (
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column - Sticky */}
                    <div className="lg:w-1/2 h-fit lg:sticky lg:top-32 self-start transition-all duration-300 text-center lg:text-left">
                        <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4">
                            ACCELERATING YOUR DIGITAL EVOLUTION
                        </p>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
                            Innovate. Integrate. Impact: Shaping the Future of Digital Business
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We don't just build applications; we engineer digital ecosystems that drive growth. By fusing creative strategy with technical excellence, we deliver solutions that are not only robust and scalable but also transformative. From the first line of code to the final user interaction, our mission is to <strong>Innovate</strong> your processes, <strong>Integrate</strong> seamless technologies, and create a lasting <strong>Impact</strong> on your industry.
                        </p>

                        <div className="mb-12 lg:mb-8 flex justify-center lg:justify-start">
                            <button onClick={onOpenModal} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                                Consult Experts
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Stacking Cards */}
                    <div className="lg:w-1/2 flex flex-col gap-8 pb-12 md:pb-24">
                        {expertiseData.map((item, index) => (
                            <div
                                key={index}
                                className={`sticky top-24 md:top-32 p-8 md:p-10 rounded-3xl border transition-all duration-300 shadow-xl ${item.theme === 'dark'
                                    ? 'bg-slate-900 border-slate-800 text-white'
                                    : 'bg-white border-slate-200 text-slate-900'
                                    }`}
                                style={{
                                    marginBottom: `${index === expertiseData.length - 1 ? 0 : '2rem'}`,
                                    zIndex: index + 10
                                }}
                            >
                                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${item.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm md:text-base mb-8 leading-relaxed ${item.theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {item.description}
                                </p>

                                <ul className="space-y-3">
                                    {item.items.map((subItem, subIndex) => (
                                        <li key={subIndex} className="flex items-start gap-3">
                                            <Star size={16} className={`${item.theme === 'dark' ? 'text-orange-500' : 'text-orange-500'} fill-current mt-1 flex-shrink-0`} />
                                            <span className={`text-sm md:text-base font-medium ${item.theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                                                {subItem}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 flex justify-end">
                                    <button className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-colors ${item.theme === 'dark'
                                        ? 'border-slate-700 hover:bg-slate-800'
                                        : 'border-slate-200 hover:bg-slate-50'
                                        }`} aria-label="Learn More">
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
