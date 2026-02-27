import {
    ShoppingBag, GraduationCap, Stethoscope, Home, Plane, Zap,
    Film, Truck, BarChart3, Factory, Droplet, Layers
} from 'lucide-react';

export interface IndustryFeature {
    title: string;
    description: string;
}

export interface IndustryBenefit {
    title: string;
    description: string;
}

export interface IndustryData {
    slug: string;
    title: string;
    description: string;
    icon: any;
    heroImage: string;
    fullDescription: string;
    features: IndustryFeature[];
    benefits: IndustryBenefit[];
    stats: { label: string; value: string }[];
}

export const industriesData: IndustryData[] = [
    {
        slug: 'ecommerce-multivendor',
        title: 'Ecommerce & Multivendor',
        description: 'Build a smart eCommerce platform to grow reach and brand value.',
        icon: ShoppingBag,
        heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'In the rapidly evolving digital marketplace, a robust eCommerce platform is no longer a luxury but a necessity. We specialize in building scalable, secure, and user-centric multivendor marketplaces and B2C/B2B storefronts that drive conversions and foster brand loyalty.',
        features: [
            { title: 'Custom Storefronts', description: 'Tailored designs that reflect your brand identity and provide seamless shopping experiences.' },
            { title: 'Multivendor Architecture', description: 'Complex systems allowing multiple sellers to manage their own products and orders.' },
            { title: 'Inventory Management', description: 'Real-time tracking and management of stock across multiple channels.' }
        ],
        benefits: [
            { title: 'Global Reach', description: 'Expand your business beyond geographical boundaries with ease.' },
            { title: 'Higher ROI', description: 'Optimized checkout flows and marketing tools to maximize sales.' },
            { title: 'Data Insights', description: 'Deep analytics to understand customer behavior and preferences.' }
        ],
        stats: [
            { label: 'Sales Growth', value: '45%+' },
            { label: 'User Retention', value: '60%' },
            { label: 'Uptime', value: '99.9%' }
        ]
    },
    {
        slug: 'edtech-elearning',
        title: 'EdTech & E-Learning',
        description: 'Create learning platforms that engage and boost your brand.',
        icon: GraduationCap,
        heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Distance learning is the future of education. We build immersive EdTech solutions that make learning interactive, accessible, and enjoyable. From LMS to virtual classrooms, we provide the tools to empower educators and students alike.',
        features: [
            { title: 'LMS Development', description: 'Comprehensive Learning Management Systems for schools, colleges, and corporates.' },
            { title: 'Live Classrooms', description: 'Interactive video streaming with real-time collaboration tools.' },
            { title: 'Gamified Learning', description: 'Incorporating game elements to increase student engagement and retention.' }
        ],
        benefits: [
            { title: 'Scalability', description: 'Support thousands of concurrent learners without performance lag.' },
            { title: 'Accessibility', description: 'Learn anywhere, anytime on any device.' },
            { title: 'Performance Tracking', description: 'Detailed reports on student progress and course effectiveness.' }
        ],
        stats: [
            { label: 'Active Learners', value: '1M+' },
            { label: 'Engagement', value: '80%' },
            { label: 'Content Delivery', value: 'Fast' }
        ]
    },
    {
        slug: 'medical-healthcare',
        title: 'Medical & Healthcare',
        description: 'Custom healthcare applications to improve care and visibility.',
        icon: Stethoscope,
        heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Technology in healthcare saves lives. We develop HIPAA-compliant, secure, and intuitive medical applications that bridge the gap between patients and providers. Our solutions range from telemedicine platforms to hospital management systems.',
        features: [
            { title: 'Telemedicine', description: 'Secure video consultations and remote patient monitoring.' },
            { title: 'Patient Portals', description: 'Easy access to medical records, prescriptions, and appointments.' },
            { title: 'EHR Integration', description: 'Seamless connectivity with Electronic Health Records for better care.' }
        ],
        benefits: [
            { title: 'Improved Access', description: 'Bring healthcare services to remote and underserved areas.' },
            { title: 'Operational Efficiency', description: 'Reduce paperwork and streamline administrative tasks.' },
            { title: 'Patient Safety', description: 'Minimize errors with automated reminders and accurate data.' }
        ],
        stats: [
            { label: 'Patient Sat.', value: '95%' },
            { label: 'Wait Times', value: '-30%' },
            { label: 'Security', value: 'HIPAA' }
        ]
    },
    {
        slug: 'real-estate-construction',
        title: 'Real Estate & Construction',
        description: 'Real estate web and apps built to attract, convert, and engage.',
        icon: Home,
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'The real estate industry is being transformed by digital experiences. We create immersive platforms that showcase properties, manage leads, and streamline the buying/selling process for developers, agents, and customers.',
        features: [
            { title: 'VR/AR Tours', description: 'Virtual property walkthroughs that provide a realistic experience.' },
            { title: 'Inventory Management', description: 'Real-time updates on property availability and pricing.' },
            { title: 'CRM Solutions', description: 'Tools to manage leads, follow-ups, and customer relationships.' }
        ],
        benefits: [
            { title: 'Increased Visibility', description: 'Reach a wider audience with stunning property listings.' },
            { title: 'Faster Closings', description: 'Streamlined documentation and communication processes.' },
            { title: 'Better Lead Quality', description: 'Attract serious buyers with detailed property information.' }
        ],
        stats: [
            { label: 'Leads Generated', value: '25%+' },
            { label: 'Viewings', value: 'Virtual' },
            { label: 'Efficiency', value: 'High' }
        ]
    },
    {
        slug: 'travel-hospitality',
        title: 'Travel & Hospitality',
        description: 'Travel applications made to simplify booking for a safe journey.',
        icon: Plane,
        heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Modern travelers expect seamless digital journeys. We build travel and hospitality solutions that simplify bookings, provide real-time updates, and enhance the overall guest experience through personalized services.',
        features: [
            { title: 'Booking Engines', description: 'Fast and secure flight, hotel, and car rental booking systems.' },
            { title: 'Itinerary Management', description: 'Personalized travel plans with real-time notifications.' },
            { title: 'Loyalty Programs', description: 'Digital rewards and membership management to retain customers.' }
        ],
        benefits: [
            { title: 'User Convenience', description: 'A one-stop shop for all travel needs.' },
            { title: 'Brand Loyalty', description: 'Keep customers coming back with personalized offers.' },
            { title: 'Global Presence', description: 'Integrate with international GDS and travel APIs.' }
        ],
        stats: [
            { label: 'Bookings', value: '↑ 40%' },
            { label: 'Avg Rating', value: '4.8/5' },
            { label: 'Connectivity', value: 'Global' }
        ]
    },
    {
        slug: 'utilities-on-demand',
        title: 'Utilities & On Demand',
        description: 'On-demand websites & apps for fast, reliable, and smart service.',
        icon: Zap,
        heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'The "Uber-for-everything" economy requires precision and speed. We build on-demand service platforms that connect users with cleaners, handymen, delivery experts, and more, ensuring reliability and customer satisfaction.',
        features: [
            { title: 'Real-time Tracking', description: 'Live location updates for service providers and deliveries.' },
            { title: 'Automated Dispatch', description: 'Smart algorithms to assign tasks to the nearest available provider.' },
            { title: 'In-app Messaging', description: 'Secure communication between users and service providers.' }
        ],
        benefits: [
            { title: 'Instant Satisfaction', description: 'Meet user needs immediately with a few taps.' },
            { title: 'Operational Speed', description: 'Automate manual processes for faster service delivery.' },
            { title: 'Scalable Growth', description: 'Easily expand your service categories and regions.' }
        ],
        stats: [
            { label: 'Fulfillment', value: '98%' },
            { label: 'Wait Time', value: '< 15m' },
            { label: 'Capacity', value: 'Scalable' }
        ]
    },
    {
        slug: 'media-entertainment',
        title: 'Media & Entertainment',
        description: 'Applications for streaming, media sharing, and user delight.',
        icon: Film,
        heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Content is king, but delivery is the crown. We create high-performance streaming platforms, social media apps, and digital publishing solutions that keep audiences engaged and entertained everywhere.',
        features: [
            { title: 'Video Streaming', description: 'Lag-free 4K streaming with adaptive bitrate technology.' },
            { title: 'Content Management', description: 'Robust systems to manage libraries, metadata, and licensing.' },
            { title: 'Social Integration', description: 'Features for sharing, commenting, and community building.' }
        ],
        benefits: [
            { title: 'User Engagement', description: 'Keep users hooked with personalized recommendations.' },
            { title: 'Monetization', description: 'Subscription, ad-based, or pay-per-view models.' },
            { title: 'Multi-device Support', description: 'Seamless experience across TVs, phones, and tablets.' }
        ],
        stats: [
            { label: 'Watch Time', value: '↑ 55%' },
            { label: 'Buffering', value: 'Minimal' },
            { label: 'Resolution', value: 'Up to 4K' }
        ]
    },
    {
        slug: 'transportation-logistics',
        title: 'Transportation & Logistics',
        description: 'Logistics applications built to track, manage, and deliver fast.',
        icon: Truck,
        heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Efficiency is the fuel of logistics. We develop smart transportation solutions that optimize routes, manage fleets, and provide end-to-end visibility into the supply chain, reducing costs and improving timing.',
        features: [
            { title: 'Route Optimization', description: 'AI-driven route planning to save time and fuel costs.' },
            { title: 'Fleet Management', description: 'Real-time diagnostics and tracking for vehicles and drivers.' },
            { title: 'Inventory Visibility', description: 'WMS integration for real-time stock levels and warehouse efficiency.' }
        ],
        benefits: [
            { title: 'Lower Costs', description: 'Reduce operational overhead with smart resource allocation.' },
            { title: 'Punctual Delivery', description: 'Improve customer trust with on-time performance.' },
            { title: 'Full Transparency', description: 'Know where your cargo is at every second.' }
        ],
        stats: [
            { label: 'Fuel Savings', value: '20%' },
            { label: 'On-time %', value: '99%' },
            { label: 'Carbon Footprint', value: 'Reduced' }
        ]
    },
    {
        slug: 'finance-insurance',
        title: 'Finance & Insurance',
        description: 'Secure fintech platforms that simplify money and coverage.',
        icon: BarChart3,
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Trust and security are the foundations of finance. We engineer secure, compliant FinTech solutions—from mobile wallets to automated insurance claims platforms—that simplify financial management for everyone.',
        features: [
            { title: 'Digital Wallets', description: 'Secure, fast payments with multi-factor authentication.' },
            { title: 'InsurTech Solutions', description: 'Automated policy management and simplified claims processing.' },
            { title: 'Fraud Detection', description: 'AI-powered monitoring to prevent unauthorized transactions.' }
        ],
        benefits: [
            { title: 'Security First', description: 'Bank-grade encryption and compliance with all regulations.' },
            { title: 'Customer Trust', description: 'Transparent and fast financial services.' },
            { title: 'Operational Agility', description: 'Modernize legacy systems for the digital age.' }
        ],
        stats: [
            { label: 'Security', value: 'Bank-grade' },
            { label: 'Transaction Speed', value: 'Sub-sec' },
            { label: 'Compliance', value: 'Global' }
        ]
    },
    {
        slug: 'manufacturing',
        title: 'Manufacturing',
        description: 'Applications that streamline manufacturing and boost output.',
        icon: Factory,
        heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'Industry 4.0 is here. We build IoT-enabled manufacturing solutions that provide real-time insights into production lines, predictive maintenance, and supply chain synchronization to maximize output and quality.',
        features: [
            { title: 'IoT Integration', description: 'Connecting machines to provide real-time performance data.' },
            { title: 'Predictive Maintenance', description: 'Early warning systems to prevent costly equipment breakdowns.' },
            { title: 'Supply Chain Sync', description: 'Ensure raw materials and finished goods are always in balance.' }
        ],
        benefits: [
            { title: 'Reduced Downtime', description: 'Keep production running smoothly with proactive monitoring.' },
            { title: 'Higher Quality', description: 'Automated QC checks to ensure every product meets standards.' },
            { title: 'Data-driven Decisions', description: 'Make better choices with real-time shop floor insights.' }
        ],
        stats: [
            { label: 'Efficiency', value: '+35%' },
            { label: 'Downtime', value: '-20%' },
            { label: 'ROI', value: 'Rapid' }
        ]
    },
    {
        slug: 'oil-and-gas',
        title: 'Oil and Gas',
        description: 'Custom software to streamline operations and boost energy efficiency.',
        icon: Droplet,
        heroImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'The energy sector demands precision and safety. We provide custom software solutions that streamline upstream, midstream, and downstream operations, ensuring safety compliance and operational excellence.',
        features: [
            { title: 'Operational Analytics', description: 'Deep insights into drilling, refinement, and distribution.' },
            { title: 'Safety Monitoring', description: 'Real-time tracking of hazardous conditions and equipment.' },
            { title: 'Compliance Reporting', description: 'Automated reports for environmental and safety regulations.' }
        ],
        benefits: [
            { title: 'Maximized Safety', description: 'Minimize risks to personnel and the environment.' },
            { title: 'Resource Efficiency', description: 'Optimize energy consumption and resource allocation.' },
            { title: 'Regulatory Peace', description: 'Ensure you always meet or exceed industry standards.' }
        ],
        stats: [
            { label: 'Incidents', value: '-50%' },
            { label: 'Audit Speed', value: '3x Fast' },
            { label: 'Recovery', value: 'Optimized' }
        ]
    },
    {
        slug: 'other-industries',
        title: 'Other Industries',
        description: 'Deliver smart solutions to suit your unique industry.',
        icon: Layers,
        heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
        fullDescription: 'No matter how niche your industry, technology can drive your success. We partner with visionaries in all sectors to build custom solutions that solve their unique problems and create new opportunities.',
        features: [
            { title: 'Custom R&D', description: 'Deep diving into your unique challenges to find tech solutions.' },
            { title: 'Bespoke Development', description: 'Building software that fits your business like a glove.' },
            { title: 'Future-proofing', description: 'Ensuring your tech stack is ready for whatever comes next.' }
        ],
        benefits: [
            { title: 'Unique Competitive Edge', description: 'Differentiate yourself with custom-built tools.' },
            { title: 'Perfect Fit', description: 'Software that works the way you do, not the other way around.' },
            { title: 'Scalable Innovation', description: 'Grow your niche business with flexible digital architecture.' }
        ],
        stats: [
            { label: 'Customization', value: '100%' },
            { label: 'Satisfaction', value: 'High' },
            { label: 'Adaptability', value: 'Infinite' }
        ]
    }
];
