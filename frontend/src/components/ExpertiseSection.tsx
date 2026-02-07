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

export default function ExpertiseSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column - Sticky */}
                    <div className="lg:w-1/2 h-fit lg:sticky lg:top-32 self-start transition-all duration-300">
                        <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                            ADVANCED DIGITAL SOLUTIONS FOR BUSINESS SUCCESS
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                            End-to-End Digital Services to Design, Build, & Support Business
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
                            We offer custom and full-cycle web design services that include intuitive interface design, feature-rich development, and ongoing support. Whether you want to start a new venture or scale your existing one globally, our web designing company in India creates a complete digital ecosystem for your business. It begins on web and can extend to mobile apps for seamless performance & lasting impact.
                        </p>

                        <div className="bg-orange-100 dark:bg-orange-900/20 p-8 rounded-3xl border border-orange-200 dark:border-orange-800/30 flex items-center gap-8 mb-8">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200 flex items-center justify-center opacity-80">
                                {/* Abstract wireframe icon placeholder */}
                                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-orange-500 mb-4">Start Your Digital Journey with Us</h3>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-orange-500/30">
                                    Consult Experts
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stacking Cards */}
                    <div className="lg:w-1/2 flex flex-col gap-8 pb-24">
                        {expertiseData.map((item, index) => (
                            <div
                                key={index}
                                className={`sticky top-32 p-10 rounded-3xl border transition-all duration-300 shadow-xl ${item.theme === 'dark'
                                    ? 'bg-slate-900 border-slate-800 text-white'
                                    : 'bg-white border-slate-200 text-slate-900'
                                    }`}
                                style={{
                                    // Slight offset for visual stacking appeal if needed, standard sticky works too
                                    marginBottom: `${index === expertiseData.length - 1 ? 0 : '2rem'}`,
                                    zIndex: index + 10
                                }}
                            >
                                <h3 className={`text-2xl font-bold mb-4 ${item.theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                    {item.title}
                                </h3>
                                <p className={`mb-8 leading-relaxed ${item.theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {item.description}
                                </p>

                                <ul className="space-y-3">
                                    {item.items.map((subItem, subIndex) => (
                                        <li key={subIndex} className="flex items-center gap-3">
                                            <Star size={18} className={`${item.theme === 'dark' ? 'text-orange-500' : 'text-orange-500'} fill-current`} />
                                            <span className={`font-medium ${item.theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                                                {subItem}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 flex justify-end">
                                    <button className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${item.theme === 'dark'
                                        ? 'border-slate-700 hover:bg-slate-800'
                                        : 'border-slate-200 hover:bg-slate-50'
                                        }`}>
                                        <ArrowRight size={20} />
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
