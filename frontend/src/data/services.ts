
import {
    Globe, Smartphone, Layers, Database, Rocket, Code,
    Layout, Search, Share2, PenTool, Image, Briefcase
} from 'lucide-react';


export interface ProcessStep {
    title: string;
    desc: string;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface Service {
    title: string;
    category: string;
    description: string;
    detailedDescription: string;
    features: { title: string; description: string }[];
    technologies: string[];
    icon: any;
    process?: ProcessStep[];
    faqs?: FAQ[];
}

const appProcess = [
    { title: 'Discovery', desc: 'We dive deep into your requirements and business goals.' },
    { title: 'Design', desc: 'Crafting intuitive interfaces and robust architectures.' },
    { title: 'Build', desc: 'Agile development with continuous integration and testing.' },
    { title: 'Launch', desc: 'Seamless deployment and early-stage performance monitoring.' },
];

const appFaqs = [
    { q: 'How long does a typical project take?', a: 'Timelines vary based on complexity, but most projects range from 4 to 12 weeks.' },
    { q: 'Do you offer post-launch support?', a: 'Yes, we provide ongoing maintenance and scaling support for all our solutions.' },
    { q: 'Can you work with existing codebases?', a: 'Absolutely. We specialize in modernization and scaling existing applications.' },
];

const marketingProcess = [
    { title: 'Audit', desc: 'Analyzing your current presence and competitor landscape.' },
    { title: 'Strategy', desc: 'Defining target audiences and campaign roadmaps.' },
    { title: 'Execute', desc: 'Launching campaigns across selected digital channels.' },
    { title: 'Report', desc: 'Continuous optimization based on real-time data.' },
];

const marketingFaqs = [
    { q: 'How soon can I expect results?', a: 'SEO takes 3-6 months, while paid campaigns can show results within days.' },
    { q: 'What metrics do you track?', a: 'We focus on ROI, conversion rates, and engagement metrics that matter to your business.' },
    { q: 'Is the strategy customized?', a: 'Yes, every campaign is built from scratch based on your specific industry and goals.' },
];

const designProcess = [
    { title: 'Research', desc: 'Understanding user personas and brand aspirations.' },
    { title: 'Wireframe', desc: 'Creating structural blueprints and user flows.' },
    { title: 'Creative', desc: 'Developing visual assets and high-fidelity mockups.' },
    { title: 'Finalize', desc: 'Polishing details and delivering production-ready assets.' },
];

const designFaqs = [
    { q: 'How many revisions are included?', a: 'We typically include 3 rounds of revisions to ensure the final design is perfect.' },
    { q: 'Do I get the source files?', a: 'Yes, all original source files (Figma, Illustrator, etc.) are included in the final delivery.' },
    { q: 'Can you work with our existing brand?', a: 'Absolutely. We can either extend your current brand or help you evolve it.' },
];

export const servicesData: Record<string, Service> = {
    // --- Application Solution ---
    "web-development": {
        title: "Web Development",
        category: "Application Solution",
        description: "Create intuitive, high-performance websites and web applications that boost your brand presence and drive business growth.",
        detailedDescription: "In today's digital-first world, your website is often the first interaction customers have with your brand. We build scalable, secure, and responsive web solutions tailored to your specific business needs. Whether it's a corporate website, an e-commerce platform, or a complex web portal, our team leverages the latest technologies to deliver exceptional user experiences.",
        features: [
            { title: "Responsive Design", description: "Seamless experience across all devices." },
            { title: "Custom Development", description: "Tailored solutions for unique requirements." },
            { title: "SEO Optimized", description: "Built with search visibility in mind." },
            { title: "High Performance", description: "Fast loading speeds for better retention." }
        ],
        technologies: ["React", "Next.js", "Node.js", "Tailwind CSS"],
        icon: Globe,
        process: appProcess,
        faqs: appFaqs
    },
    "mobile-app-development": {
        title: "Mobile App Development",
        category: "Application Solution",
        description: "Build dynamic, user-friendly iOS & Android apps to reach vast audiences and engage customers on the go.",
        detailedDescription: "Mobile usage is dominating internet traffic. We design and develop native and cross-platform mobile applications that provide seamless performance and engaging user interfaces. From concept to launch, we ensure your app is robust, secure, and ready to scale.",
        features: [
            { title: "iOS & Android", description: "Native and cross-platform solutions." },
            { title: "Intuitive UI/UX", description: "Designed for touch engagement." },
            { title: "Secure Backend", description: "Robust API integration and data security." },
            { title: "App Store Support", description: "Assonance with deployment and updates." }
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        icon: Smartphone,
        process: appProcess,
        faqs: appFaqs
    },
    "custom-application": {
        title: "Custom Application",
        category: "Application Solution",
        description: "Applications built from the ground up to meet your unique business needs perfectly.",
        detailedDescription: "Off-the-shelf software often falls short of specific business requirements. Our custom application development service focuses on building software that fits your workflow, not the other way around. We solve complex problems with elegant, custom-coded solutions.",
        features: [
            { title: "Tailored Workflow", description: "Matches your exact business processes." },
            { title: "Scalable Architecture", description: "Grows with your business." },
            { title: "Integration Ready", description: "Connects with existing tools." },
            { title: "Full Ownership", description: "You own the code and IP." }
        ],
        technologies: ["Python", "Java", ".NET", "PostgreSQL"],
        icon: Layers,
        process: appProcess,
        faqs: appFaqs
    },
    "ai-ml-development": {
        title: "AI / ML Development",
        category: "Application Solution",
        description: "Smart AI & ML solutions that automate tasks, analyze data, and boost operational performance.",
        detailedDescription: "Unlock the power of data with our Artificial Intelligence and Machine Learning services. We help businesses implement intelligent algorithms to automate routine tasks, predict trends, and personalize user experiences. From chatbots to predictive analytics, we make your business smarter.",
        features: [
            { title: "Predictive Analytics", description: "Data-driven insights for decisions." },
            { title: "NLP & Chatbots", description: "Intelligent customer interaction." },
            { title: "Process Automation", description: "Reduce manual workload." },
            { title: "Computer Vision", description: "Image and video analysis solutions." }
        ],
        technologies: ["TensorFlow", "PyTorch", "Python", "OpenAI API"],
        icon: Database,
        process: appProcess,
        faqs: appFaqs
    },
    "saas-application": {
        title: "SaaS Application",
        category: "Application Solution",
        description: "Create intuitive, engaging, and high-quality web applications delivered as a service.",
        detailedDescription: "We specialize in building multi-tenant SaaS platforms that are secure, scalable, and easy to manage. Whether you're launching a new product or migrating legacy software to the cloud, our SaaS development expertise ensures a smooth journey to a subscription-based model.",
        features: [
            { title: "Multi-tenancy", description: "Serve multiple customers securely." },
            { title: "Subscription Management", description: "Integrated billing and plans." },
            { title: "Cloud Native", description: "Built for AWS/Azure/GCP." },
            { title: "Scalable Infrastructure", description: "Handles growth effortlessly." }
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Next.js"],
        icon: Rocket,
        process: appProcess,
        faqs: appFaqs
    },
    "api-development": {
        title: "API Development",
        category: "Application Solution",
        description: "Integrate powerful APIs into your applications to optimize performance and connectivity.",
        detailedDescription: "APIs are the backbone of modern software connectivity. We design and develop RESTful and GraphQL APIs that are secure, well-documented, and high-performing. Whether for internal use or public consumption, our APIs facilitate seamless data exchange.",
        features: [
            { title: "REST & GraphQL", description: "Flexible architecture choices." },
            { title: "Secure Authentication", description: "OAuth, JWT implementation." },
            { title: "Documentation", description: "Swagger/OpenAPI standards." },
            { title: "Rate Limiting", description: "Protection and traffic management." }
        ],
        technologies: ["Node.js", "Express", "GraphQL", "Swagger"],
        icon: Code,
        process: appProcess,
        faqs: appFaqs
    },

    // --- Digital Marketing ---
    "seo-optimization": {
        title: "SEO Optimization",
        category: "Digital Marketing",
        description: "Improve search engine rankings and drive sustainable organic traffic to your website.",
        detailedDescription: "Visibility is key in the digital landscape. Our SEO strategies are designed to improve your website's ranking on search engines like Google. We verify all aspects of SEO including on-page, off-page, and technical SEO to drive qualified organic traffic to your site.",
        features: [
            { title: "Keyword Research", description: "Target the right audience." },
            { title: "On-Page Optimization", description: "Content and tag refinement." },
            { title: "Technical SEO", description: "Site speed and structure." },
            { title: "Link Building", description: "Authority development." }
        ],
        technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
        icon: Search,
        process: marketingProcess,
        faqs: marketingFaqs
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        category: "Digital Marketing",
        description: "Engage audiences and build community across all major social media platforms.",
        detailedDescription: "Build a strong connection with your audience on platforms they use daily. Our social media marketing services include strategy, content creation, community management, and paid advertising campaigns to increase brand awareness and engagement.",
        features: [
            { title: "Strategy Development", description: "Platform-specific plans." },
            { title: "Content Creation", description: "Engaging visuals and copy." },
            { title: "Community Management", description: "Active audience interaction." },
            { title: "Paid Ad Campaigns", description: "Targeted reach on FB/IG/LinkedIn." }
        ],
        technologies: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
        icon: Share2,
        process: marketingProcess,
        faqs: marketingFaqs
    },
    "content-strategy": {
        title: "Content Strategy",
        category: "Digital Marketing",
        description: "Develop compelling content strategies that convert visitors into loyal customers.",
        detailedDescription: "Content is king. We help you define your brand voice and create a content roadmap that resonates with your target audience. From blog posts and whitepapers to video scripts, our content strategy ensures consistency and value in every piece of communication.",
        features: [
            { title: "Content Planning", description: "Editorial calendars and goals." },
            { title: "Copywriting", description: "Persuasive and clear text." },
            { title: "Brand Voice", description: "Consistent messaging." },
            { title: "Performance Analysis", description: "Tracking content impact." }
        ],
        technologies: ["WordPress", "Medium", "Canva", "HubSpot"],
        icon: PenTool,
        process: marketingProcess,
        faqs: marketingFaqs
    },

    // --- Design Solution ---
    "ui-ux-design": {
        title: "UI/UX Design",
        category: "Design Solution",
        description: "User-centric designs that delight users and drive engagement.",
        detailedDescription: "Great design is about how it works, not just how it looks. Our UI/UX design process involves user research, wireframing, prototyping, and testing to create interfaces that are intuitive, accessible, and visually stunning.",
        features: [
            { title: "User Research", description: "Understanding user needs." },
            { title: "Wireframing", description: "Structure and flow planning." },
            { title: "Prototyping", description: "Interactive mockups." },
            { title: "Usability Testing", description: "Validating design decisions." }
        ],
        technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
        icon: Layout,
        process: designProcess,
        faqs: designFaqs
    },
    "brand-identity": {
        title: "Brand Identity",
        category: "Design Solution",
        description: "Craft logos and visual systems that define and elevate your unique brand.",
        detailedDescription: "Your brand is your promise to your customer. We help you define your visual identity, from logo design to color palettes and typography. We create comprehensive brand guidelines that ensure consistency across all touchpoints.",
        features: [
            { title: "Logo Design", description: "Memorable visual mark." },
            { title: "Visual Guidelines", description: "Colors, fonts, and usage." },
            { title: "Brand Strategy", description: "Positioning and messaging." },
            { title: "Collateral Design", description: "Business cards, letterheads." }
        ],
        technologies: ["Illustrator", "Photoshop", "Indesign", "CorelDRAW"],
        icon: Image,
        process: designProcess,
        faqs: designFaqs
    },
    "graphic-design": {
        title: "Graphic Design",
        category: "Design Solution",
        description: "Create stunning visual assets for all your marketing and communication needs.",
        detailedDescription: "Visual communication is powerful. Our graphic design services cover a wide range of needs, from social media graphics and brochures to infographics and packaging. we creates visuals that capture attention and communicate your message effectively.",
        features: [
            { title: "Marketing Materials", description: "Brochures, flyers, banners." },
            { title: "Social Media Graphics", description: "Posts, stories, covers." },
            { title: "Infographics", description: "Visual data representation." },
            { title: "Packaging Design", description: "Product presentation." }
        ],
        technologies: ["Photoshop", "Illustrator", "Canva", "After Effects"],
        icon: Briefcase,
        process: designProcess,
        faqs: designFaqs
    }
};


export type ServiceSlug = keyof typeof servicesData;
