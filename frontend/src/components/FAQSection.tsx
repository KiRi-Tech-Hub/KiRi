import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What services does KiRi offer?',
        answer: 'We offer a comprehensive range of digital services including Web & Software Development, Mobile App Development, AI & ML Solutions, E-commerce Platforms, and Strategic Digital Consulting. We act as your end-to-end technology partner.'
    },
    {
        question: 'How do you handle project communication?',
        answer: 'We believe in transparent and regular communication. We use agile methodologies, providing weekly progress updates, milestone demos, and have dedicated project managers to ensuring you are always in the loop.'
    },
    {
        question: 'Can you help refine my startup idea?',
        answer: 'Absolutely. We specialize in working with startups from the "napkin stage." Our "Partner in Innovation" approach includes detailed idea validation, market research, and MVP strategy to ensure your product has a strong foundation.'
    },
    {
        question: 'What technologies do you verify?',
        answer: 'We use modern, scalable tech stacks. For frontend, we typically use React, Next.js, and TypeScript. For backend, Node.js, Python, or Go. We also have deep expertise in cloud platforms like AWS and Google Cloud.'
    },
    {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we view deployment as just the beginning. We offer various maintenance and support packages to ensure your product remains secure, up-to-date, and continues to perform optimally as you scale.'
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                        COMMON QUERIES
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Everything you need to know about partnering with us.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index
                                    ? 'bg-slate-50 dark:bg-slate-900 border-blue-500/30'
                                    : 'bg-transparent border-slate-200 dark:border-slate-800 hover:border-blue-500/30'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                    }`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
