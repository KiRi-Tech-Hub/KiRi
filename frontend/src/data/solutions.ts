import {
    ShoppingCart, Truck, Car, CreditCard, Activity, Star, Heart, Users,
    Building, Briefcase, Factory, Shield
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SolutionSlug =
    | 'food-delivery' | 'grocery-delivery' | 'taxi-service' | 'fintech'
    | 'fitness-gym' | 'astrology' | 'matrimonial' | 'dating'
    | 'erp-systems' | 'crm-software' | 'supply-chain' | 'hr-management'
    | 'industrial-automation' | 'cybersecurity';

export interface Solution {
    title: string;
    slug: SolutionSlug;
    category: string;
    icon: LucideIcon;
    description: string;
    detailedDescription: string;
    features: { title: string; description: string }[];
    process: { title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    technologies: string[];
    color: string;
    impactMetrics: { label: string; value: string; suffix: string }[];
    useCase: { title: string; desc: string };
}

export const solutionsData: Record<SolutionSlug, Solution> = {
    'food-delivery': {
        title: 'Food Delivery Solutions',
        slug: 'food-delivery',
        category: 'App Solutions',
        icon: ShoppingCart,
        description: 'Create intuitive apps for easy food search, order, and delivery.',
        detailedDescription: 'Our food delivery solutions are designed to bridge the gap between restaurants and hungry customers. We provide a seamless experience with real-time tracking, secure payments, and an intuitive interface that keeps users coming back.',
        features: [
            { title: 'Real-time Tracking', description: 'Live GPS tracking for customers to monitor their orders from kitchen to doorstep.' },
            { title: 'Restaurant Panel', description: 'Dedicated dashboard for restaurants to manage menus, orders, and promotions.' },
            { title: 'Secure Payments', description: 'Integration with multiple payment gateways for safe and easy transactions.' },
            { title: 'Smart Search', description: 'Advanced filtering and search options to find favorite dishes and cuisines quickly.' }
        ],
        process: [
            { title: 'Discovery', desc: 'Analyzing market needs and user expectations.' },
            { title: 'Design', desc: 'Crafting high-fidelity UI/UX that drives engagement.' },
            { title: 'Development', desc: 'Building robust, scalable backends and smooth apps.' },
            { title: 'Launch', desc: 'Deploying with full maintenance and optimization.' }
        ],
        faqs: [
            { q: 'How long does it take to build a custom app?', a: 'Typically 12-16 weeks depending on features and complexity.' },
            { q: 'Do you provide maintenance after launch?', a: 'Yes, we offer ongoing support and regular updates to ensure peak performance.' }
        ],
        technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Google Maps API'],
        color: 'from-orange-500 to-red-600',
        impactMetrics: [
            { label: 'Avg. Order Growth', value: '150', suffix: '%' },
            { label: 'Active Restaurants', value: '10', suffix: 'k+' },
            { label: 'User Retention', value: '85', suffix: '%' }
        ],
        useCase: {
            title: 'GlobalEats Expansion',
            desc: 'Developed a multi-country food delivery platform that scaled to 2M+ users within the first year of deployment.'
        }
    },
    'grocery-delivery': {
        title: 'Grocery Delivery Solutions',
        slug: 'grocery-delivery',
        category: 'App Solutions',
        icon: Truck,
        description: 'Build custom app for quick shopping and smooth grocery delivery.',
        detailedDescription: 'Revolutionize local shopping with our grocery delivery platforms. We focus on inventory management, fast delivery routing, and user-friendly shopping carts to make daily essentials accessible with just a few taps.',
        features: [
            { title: 'Inventory Sync', description: 'Real-time synchronization with local store inventories.' },
            { title: 'Scheduled Delivery', description: 'Allow users to pick their preferred time slots for delivery.' },
            { title: 'Smart Recommendations', description: 'AI-driven suggestions based on shopping history.' },
            { title: 'Loyalty Programs', description: 'In-app rewards and coupons to boost customer retention.' }
        ],
        process: [
            { title: 'Strategic Planning', desc: 'Defining the delivery radius and vendor network.' },
            { title: 'Agile Dev', desc: 'Iterative building with constant feedback loops.' },
            { title: 'QA testing', desc: 'Rigorous testing of order flow and payment logic.' },
            { title: 'Deployment', desc: 'Going live with marketing integration.' }
        ],
        faqs: [
            { q: 'Can you integrate with existing POS systems?', a: 'Yes, we specialize in bridging app data with your current point-of-sale infrastructure.' }
        ],
        technologies: ['Flutter', 'PostgreSQL', 'Firebase', 'Redis', 'Stripe'],
        color: 'from-green-500 to-emerald-600',
        impactMetrics: [
            { label: 'Delivery Efficiency', value: '40', suffix: '%' },
            { label: 'Vendor Network', value: '500', suffix: '+' },
            { label: 'Daily Orders', value: '25', suffix: 'k' }
        ],
        useCase: {
            title: 'FreshCart Modernization',
            desc: 'Automated warehouse-to-doorstep logistics, reducing delivery wait times by an average of 18 minutes.'
        }
    },
    'taxi-service': {
        title: 'Taxi Service Solutions',
        slug: 'taxi-service',
        category: 'App Solutions',
        icon: Car,
        description: 'Travel safely with a quick, easy, and smooth taxi booking app.',
        detailedDescription: 'Efficient urban mobility starts with a great app. Our taxi solutions prioritize safety features, accurate fare estimation, and lightning-fast driver matching to ensure a reliable ride every time.',
        features: [
            { title: 'Driver App', description: 'Professional dashboard for drivers with navigation and earnings tracking.' },
            { title: 'Fare Estimation', description: 'Transparent pricing with dynamic surge calculation logic.' },
            { title: 'Safety SOS', description: 'Emergency buttons and real-time trip sharing for passenger safety.' },
            { title: 'Ride History', description: 'Detailed logs of previous trips and transaction receipts.' }
        ],
        process: [
            { title: 'Market Analysis', desc: 'Understanding local regulations and competitor gaps.' },
            { title: 'Prototyping', desc: 'User testing the booking flow for maximum speed.' },
            { title: 'Core Dev', desc: 'Implementing the high-availability matching engine.' },
            { title: 'Global Scaling', desc: 'Optimizing for high concurrency and regional expansion.' }
        ],
        faqs: [
            { q: 'Does the app support multiple vehicle types?', a: 'Yes, you can categorize different fleets from economy to luxury.' }
        ],
        technologies: ['Go', 'React Native', 'Socket.io', 'Google Maps Platform', 'Elasticsearch'],
        color: 'from-blue-500 to-indigo-600',
        impactMetrics: [
            { label: 'Match Latency', value: '<2', suffix: 's' },
            { label: 'Safety Rating', value: '4.9', suffix: '/5' },
            { label: 'Revenue Increase', value: '65', suffix: '%' }
        ],
        useCase: {
            title: 'UrbanRide Transformation',
            desc: 'Implemented a load-balanced dispatch engine processing 50,000 matches per hour with zero downtime.'
        }
    },
    'fintech': {
        title: 'Fintech Solutions',
        slug: 'fintech',
        category: 'App Solutions',
        icon: CreditCard,
        description: 'Smart AI solutions to enhance financial services and operations.',
        detailedDescription: 'Transform how users handle money with our secure fintech platforms. From digital wallets to investment advisors, we build compliant, high-security applications that make finance accessible and transparent.',
        features: [
            { title: 'Biometric Security', description: 'Fingerprint and FaceID integration for ultra-secure access.' },
            { title: 'AI Insights', description: 'Personalized spending analysis and budget management tools.' },
            { title: 'Instant Transfers', description: 'Peer-to-peer payments with minimal latency.' },
            { title: 'Regulatory Compliance', description: 'Built-in KYC/AML protocols to meet local financial standards.' }
        ],
        process: [
            { title: 'Audit', desc: 'Initial security and compliance assessment.' },
            { title: 'Vault Tech', desc: 'Building the encryption and data protection layers.' },
            { title: 'UI Refinement', desc: 'Simplifying complex financial data for the user.' },
            { title: 'Certification', desc: 'Final penetration testing and launch readiness.' }
        ],
        faqs: [
            { q: 'Is the data encrypted?', a: 'We use AES-256 bank-grade encryption for all sensitive user data.' }
        ],
        technologies: ['Python', 'Django', 'React', 'Kubernetes', 'Plaid API'],
        color: 'from-slate-700 to-slate-900',
        impactMetrics: [
            { label: 'Transaction Security', value: '99.9', suffix: '%' },
            { label: 'Compliance Audit', value: '100', suffix: '%' },
            { label: 'User Trust Score', value: '98', suffix: '%' }
        ],
        useCase: {
            title: 'SecurePay Wallet',
            desc: 'Built a PCI-compliant wallet system handling $10M+ in monthly transactions with multi-sig security.'
        }
    },
    'fitness-gym': {
        title: 'Fitness & Gym Solutions',
        slug: 'fitness-gym',
        category: 'App Solutions',
        icon: Activity,
        description: 'Achieve fitness goals with a personalized workout tracking app.',
        detailedDescription: 'We build digital coaches. Our fitness solutions include video-led workouts, progress tracking, and community features that keep users motivated and gyms connected to their members.',
        features: [
            { title: 'Workout Planner', description: 'Customizable training schedules for all fitness levels.' },
            { title: 'Wearable Sync', description: 'Integration with Apple Watch, Fitbit, and other health devices.' },
            { title: 'Nutrition Tracker', description: 'Calorie and macro-nutrient logging with barcode scanning.' },
            { title: 'Virtual Classes', description: 'Live-streaming and on-demand workout video library.' }
        ],
        process: [
            { title: 'Concept', desc: 'Mapping out the user journey from goal setting to achievement.' },
            { title: 'Dev', desc: 'Building high-performance video and tracking components.' },
            { title: 'Integrate', desc: 'Connecting health APIs and wearable SDKs.' },
            { title: 'Release', desc: 'App store optimization and community launch.' }
        ],
        faqs: [
            { q: 'Can we offer live classes?', a: 'Yes, we integrate low-latency streaming for real-time interaction.' }
        ],
        technologies: ['Swift', 'Kotlin', 'Firebase', 'WebRTC', 'HealthKit'],
        color: 'from-pink-500 to-rose-600',
        impactMetrics: [
            { label: 'Active Members', value: '15', suffix: 'k+' },
            { label: 'Workout Completion', value: '72', suffix: '%' },
            { label: 'Platform Growth', value: '200', suffix: '%' }
        ],
        useCase: {
            title: 'FitPulse Global',
            desc: 'Scaled a boutique gym chain to a digital-first platform with 500+ daily live-streamed classes.'
        }
    },
    'astrology': {
        title: 'Astrology Solutions',
        slug: 'astrology',
        category: 'App Solutions',
        icon: Star,
        description: 'Develop astrology app with horoscopes, predictions, & guidance.',
        detailedDescription: 'Merging ancient wisdom with modern technology. Our astrology apps provide precise celestial calculations, personalized horoscopes, and expert consultations in a visually stunning interface.',
        features: [
            { title: 'Natal Charts', description: 'Detailed birth chart generation based on precise planetary positions.' },
            { title: 'Daily Horoscopes', description: 'Personalized daily, weekly, and monthly zodiac insights.' },
            { title: 'Expert Chat', description: 'Secure messaging with professional astrologers for guidance.' },
            { title: 'Panchan/Tithi', description: 'Accurate traditional calendar and auspicious timing calculations.' }
        ],
        process: [
            { title: 'Epic Mapping', desc: 'Structuring the astrological algorithms and databases.' },
            { title: 'Design', desc: 'Creating an immersive, mystical user experience.' },
            { title: 'Algorithm Dev', desc: 'Coding precise astronomical calculations.' },
            { title: 'Launch', desc: 'Beta testing with astrology experts for accuracy.' }
        ],
        faqs: [
            { q: 'Are calculations accurate?', a: 'We use high-precision ephemeris data for all celestial computations.' }
        ],
        technologies: ['Node.js', 'React Native', 'MongoDB', 'D3.js', 'Socket.io'],
        color: 'from-purple-500 to-indigo-600',
        impactMetrics: [
            { label: 'Calculation Accuracy', value: '99.9', suffix: '%' },
            { label: 'Daily Active Users', value: '50', suffix: 'k+' },
            { label: 'Consultation Volume', value: '1', suffix: 'M+' }
        ],
        useCase: {
            title: 'AstroGuide AI',
            desc: 'Developed a real-time planetary transit engine providing 24/7 personalized guidance for global users.'
        }
    },
    'matrimonial': {
        title: 'Matrimonial Solutions',
        slug: 'matrimonial',
        category: 'App Solutions',
        icon: Heart,
        description: 'Build a matrimonial website that helps people find right match.',
        detailedDescription: 'Find a life partner with trust and ease. Our matrimonial platforms focus on verified profiles, advanced matchmaking algorithms, and privacy-first communication tools.',
        features: [
            { title: 'Verified Profiles', description: 'Document verification and social profile linking for trust.' },
            { title: 'Criteria Search', description: 'Find matches based on community, education, and lifestyle.' },
            { title: 'Privacy Controls', description: 'Set who can see your photos and contact information.' },
            { title: 'Express Interest', description: 'Seamless way to initiate contact with potential matches.' }
        ],
        process: [
            { title: 'Plan', desc: 'Defining the verification workflow and search logic.' },
            { title: 'Build', desc: 'Scaling the secure profile and image storage.' },
            { title: 'Match Logic', desc: 'Implementing the advanced recommendation engine.' },
            { title: 'Go Live', desc: 'Ensuring a spam-free launch with robust moderation.' }
        ],
        faqs: [
            { q: 'How do you handle fake profiles?', a: 'We use AI-based face recognition and manual verification queues.' }
        ],
        technologies: ['React', 'Next.js', 'PostgreSQL', 'Cloudinary', 'SendGrid'],
        color: 'from-red-400 to-pink-500',
        impactMetrics: [
            { label: 'Successful Matches', value: '5', suffix: 'k+' },
            { label: 'Verification Rate', value: '100', suffix: '%' },
            { label: 'User Safety Score', value: '9.5', suffix: '/10' }
        ],
        useCase: {
            title: 'SoulBind Portal',
            desc: 'Launched a niche matrimonial site that reached profitable status within 6 months via high-intent matching.'
        }
    },
    'dating': {
        title: 'Dating App Solutions',
        slug: 'dating',
        category: 'App Solutions',
        icon: Users,
        description: 'Develop an AI-driven dating app for a smart matching experience.',
        detailedDescription: 'Modern dating optimized for connection. Our dating platforms use AI to analyze preferences and behavior, ensuring users meet people they actually resonate with.',
        features: [
            { title: 'Smart Matching', description: 'AI algorithms that learn from user swipes and interactions.' },
            { title: 'Icebreakers', description: 'Personalized conversation starters based on shared interests.' },
            { title: 'Safety Shield', description: 'Advanced reporting and automated chat moderation.' },
            { title: 'Location Boost', description: 'Geofencing to find interesting people in your immediate area.' }
        ],
        process: [
            { title: 'Vision', desc: 'Creating a unique niche and vibe for the platform.' },
            { title: 'UI/UX', desc: 'Gamifying the experience for high retention.' },
            { title: 'Backend', desc: 'Implementing the low-latency match engine.' },
            { title: 'Market', desc: 'Deploying with social media integration for viral growth.' }
        ],
        faqs: [
            { q: 'Can we add video calling?', a: 'Yes, we integrate high-quality in-app video chat features.' }
        ],
        technologies: ['React Native', 'Go', 'Redis', 'WebRTC', 'TensorFlow'],
        color: 'from-orange-400 to-red-500',
        impactMetrics: [
            { label: 'Monthly Swipes', value: '10', suffix: 'M+' },
            { label: 'Churn Reduction', value: '35', suffix: '%' },
            { label: 'User Engagement', value: '45', suffix: 'min' }
        ],
        useCase: {
            title: 'Spark Social',
            desc: 'Built a swipe-efficient dating app that achieved a #5 rank in regional app stores within 90 days.'
        }
    },
    'erp-systems': {
        title: 'ERP Systems',
        slug: 'erp-systems',
        category: 'Enterprise Solutions',
        icon: Building,
        description: 'Integrated management of main business processes.',
        detailedDescription: 'Centralize your business intelligence. Our ERP solutions integrate finance, HR, supply chain, and manufacturing into a single, cohesive source of truth for your organization.',
        features: [
            { title: 'Finance Module', description: 'Full accounting, budgeting, and financial reporting suite.' },
            { title: 'Ops Management', description: 'End-to-end tracking of production and business cycles.' },
            { title: 'Data Analytics', description: 'Customizable BI dashboards for executive decision making.' },
            { title: 'System Unity', description: 'Seamless integration with third-party legacy applications.' }
        ],
        process: [
            { title: 'Audit', desc: 'Mapping current fragmented processes.' },
            { title: 'Blueprint', desc: 'Designing the integrated data architecture.' },
            { title: 'Core Dev', desc: 'Building modular enterprise components.' },
            { title: 'Support', desc: 'Long-term maintenance and training.' }
        ],
        faqs: [
            { q: 'Is it cloud-based?', a: 'We offer both cloud-native and on-premise deployment options.' }
        ],
        technologies: ['C#', '.NET Core', 'SQL Server', 'Azure', 'Angular'],
        color: 'from-blue-600 to-indigo-700',
        impactMetrics: [
            { label: 'Operational Cost', value: '-30', suffix: '%' },
            { label: 'Data Accuracy', value: '100', suffix: '%' },
            { label: 'Reporting Speed', value: '10', suffix: 'x' }
        ],
        useCase: {
            title: 'InduCorp ERP',
            desc: 'Unified 14 separate legacy systems into a single cloud ERP, saving the client $1.2M annually in licensing.'
        }
    },
    'crm-software': {
        title: 'CRM Software',
        slug: 'crm-software',
        category: 'Enterprise Solutions',
        icon: Users,
        description: 'Manage interactions with current and potential customers.',
        detailedDescription: 'Build lasting relationships. Our CRM solutions provide a 360-degree view of your customers, enabling personalized sales, marketing, and support at scale.',
        features: [
            { title: 'Lead Tracking', description: 'Managing the entire sales funnel from initial contact to close.' },
            { title: 'Auto Marketing', description: 'Automated email and SMS campaigns based on user behavior.' },
            { title: 'Support Desk', description: 'Integrated ticketing system for customer success teams.' },
            { title: 'Speech-to-Data', description: 'Converting sales calls into actionable insights via AI.' }
        ],
        process: [
            { title: 'Sales Audit', desc: 'Analyzing the current lead-to-customer journey.' },
            { title: 'Logic Dev', desc: 'Implementing automated workflows and triggers.' },
            { title: 'Integration', desc: 'Connecting with email, VoIP, and social tools.' },
            { title: 'Training', desc: 'Ensuring sales teams are empowered by the new tool.' }
        ],
        faqs: [
            { q: 'Can we import data from Excel?', a: 'Yes, we provide robust data migration tools for all file formats.' }
        ],
        technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Twilio'],
        color: 'from-emerald-500 to-teal-600',
        impactMetrics: [
            { label: 'Lead Conversion', value: '45', suffix: '%' },
            { label: 'Support Resolution', value: '60', suffix: '%' },
            { label: 'Customer Lifetime', value: '25', suffix: '%' }
        ],
        useCase: {
            title: 'Nexus Sales CRM',
            desc: 'Custom CRM implementation for a global SaaS provider that automated lead nurturing, resulting in a 3x increase in enterprise sales velocity.'
        }
    },
    'supply-chain': {
        title: 'Supply Chain Management',
        slug: 'supply-chain',
        category: 'Enterprise Solutions',
        icon: Truck,
        description: 'Optimize the flow of goods and services.',
        detailedDescription: 'Efficiency from source to shelf. Our SCM platforms provide visibility into global logistics, inventory optimization, and vendor management to reduce costs and lead times.',
        features: [
            { title: 'Warehouse Tech', description: 'RFID and barcode integration for precise inventory tracking.' },
            { title: 'Vendor Portal', description: 'Self-service dashboard for suppliers to manage orders.' },
            { title: 'Predictive Ops', description: 'AI-driven forecasting to prevent stockouts and overstock.' },
            { title: 'Logic-First Fleet', description: 'Route optimization for delivery vehicles to save fuel and time.' }
        ],
        process: [
            { title: 'Review', desc: 'Identifying bottlenecks in the current supply chain.' },
            { title: 'Optimize', desc: 'Simulating better routing and inventory models.' },
            { title: 'Build', desc: 'Developing the real-time tracking and vendor layers.' },
            { title: 'Deploy', desc: 'Phased rollout across warehouse and logistics nodes.' }
        ],
        faqs: [
            { q: 'Does it support IoT devices?', a: 'Yes, we integrate with various IoT sensors for cargo monitoring.' }
        ],
        technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'AWS IoT', 'RabbitMQ'],
        color: 'from-amber-500 to-orange-600',
        impactMetrics: [
            { label: 'Lead Time Reduct.', value: '25', suffix: '%' },
            { label: 'Inventory Turnover', value: '18', suffix: '%' },
            { label: 'Logistics Costs', value: '-15', suffix: '%' }
        ],
        useCase: {
            title: 'LogiLink Optimization',
            desc: 'Deployed an AI-driven fleet routing system for a regional distributor, saving 12,000 liters of fuel per month.'
        }
    },
    'hr-management': {
        title: 'HR Management',
        slug: 'hr-management',
        category: 'Enterprise Solutions',
        icon: Briefcase,
        description: 'Streamline human resources and payroll processes.',
        detailedDescription: 'Empower your most valuable asset: people. Our HRMS platforms automate payroll, recruitment, performance reviews, and employee self-service to create a better working environment.',
        features: [
            { title: 'Payroll Engine', description: 'Automated tax calculation, leave management, and direct deposit.' },
            { title: 'Talent Suite', description: 'Applicant tracking system (ATS) to manage your hiring pipeline.' },
            { title: 'Employee Hub', description: 'Self-service portal for leave requests and benefits management.' },
            { title: 'Skill Mapping', description: 'Tracking employee certifications and career growth paths.' }
        ],
        process: [
            { title: 'HR Audit', desc: 'Understanding current manual HR workflows.' },
            { title: 'Platform Dev', desc: 'Building the secure employee and payroll cores.' },
            { title: 'Compliance', desc: 'Ensuring the system meets regional labor laws.' },
            { title: 'Full Scale', desc: 'Onboarding the entire organization to the platform.' }
        ],
        faqs: [
            { q: 'Is it mobile friendly?', a: 'Absolutely, employees can manage their profile and leaves via our mobile app.' }
        ],
        technologies: ['Ruby on Rails', 'React', 'Redis', 'AWS S3', 'Stripe Connect'],
        color: 'from-violet-500 to-purple-600',
        impactMetrics: [
            { label: 'Payroll Admin Time', value: '-70', suffix: '%' },
            { label: 'Employee Engage.', value: '40', suffix: '%' },
            { label: 'Recruitment Cost', value: '-20', suffix: '%' }
        ],
        useCase: {
            title: 'PeopleFirst HRMS',
            desc: 'Automated all HR processes for a 1,000+ employee tech firm, reducing monthly payroll administration from 5 days to 4 hours.'
        }
    },
    'industrial-automation': {
        title: 'Industrial Automation',
        slug: 'industrial-automation',
        category: 'Enterprise Solutions',
        icon: Factory,
        description: 'Automate manufacturing and industrial processes.',
        detailedDescription: 'The future of manufacturing is autonomous. We build SCADA systems, PLC integrations, and IIoT platforms that monitor and control industrial processes for maximum efficiency.',
        features: [
            { title: 'Sensor Integration', description: 'Connecting physical machinery to digital dashboards via IIoT.' },
            { title: 'Predictive Service', description: 'AI that predicts machine failure before it happens.' },
            { title: 'Real-time SCADA', description: 'Centralized control and monitoring of industrial hardware.' },
            { title: 'Compliance Logs', description: 'Automated generation of OEE and safety compliance reports.' }
        ],
        process: [
            { title: 'On-site Survey', desc: 'Evaluating existing hardware and machinery protocols.' },
            { title: 'Data Arch', desc: 'Designing the high-frequency data ingestion layer.' },
            { title: 'Dashboard Dev', desc: 'Building real-time visualizations for floor operators.' },
            { title: 'Launch', desc: 'Live integration with shop-floor hardware.' }
        ],
        faqs: [
            { q: 'Which protocols do you support?', a: 'We support Modbus, OPC UA, MQTT, and more.' }
        ],
        technologies: ['C++', 'Python', 'InfluxDB', 'Grafana', 'MQTT'],
        color: 'from-slate-600 to-slate-800',
        impactMetrics: [
            { label: 'Equipment OEE', value: '20', suffix: '%' },
            { label: 'Downtime Reduct.', value: '50', suffix: '%' },
            { label: 'Quality Accuracy', value: '99.9', suffix: '%' }
        ],
        useCase: {
            title: 'SmartFactory PLC',
            desc: 'Integrated 25 different PLC protocols into a unified dashboard, enabling real-time predictive maintenance for a large automotive plant.'
        }
    },
    'cybersecurity': {
        title: 'Cybersecurity Solutions',
        slug: 'cybersecurity',
        category: 'Enterprise Solutions',
        icon: Shield,
        description: 'Protect enterprise systems and data from cyber threats.',
        detailedDescription: 'Uncompromising protection for your digital assets. We provide end-to-end security audits, threat detection systems, and zero-trust architectures to keep your business safe.',
        features: [
            { title: 'Threat Hunting', description: 'Proactive detection of vulnerabilities and hidden threats.' },
            { title: 'Zero Trust Network', description: 'Ensuring every access request is verified and secure.' },
            { title: 'Incident Response', description: 'Rapid action protocols to mitigate data breaches.' },
            { title: 'IAM Systems', description: 'Advanced Identity and Access Management for your workforce.' }
        ],
        process: [
            { title: 'Penetration Test', desc: 'Comprehensive testing to find existing system gaps.' },
            { title: 'Hardening', desc: 'Strengthening the network and application layers.' },
            { title: 'Monitoring', desc: 'Deploying 24/7 AI-driven surveillance systems.' },
            { title: 'Education', desc: 'Training staff on security best practices.' }
        ],
        faqs: [
            { q: 'Do you offer 24/7 monitoring?', a: 'Yes, our systems provide continuous real-time threat detection.' }
        ],
        technologies: ['Python', 'Golang', 'Elastic Stack', 'Suricata', 'Kibana'],
        color: 'from-red-600 to-rose-700',
        impactMetrics: [
            { label: 'Threat Detection', value: '<5', suffix: 'min' },
            { label: 'System Uptime', value: '99.99', suffix: '%' },
            { label: 'Security Breach', value: '0', suffix: 'Fail' }
        ],
        useCase: {
            title: 'VaultGuard MSP',
            desc: 'Managed the entire security perimeter for an e-commerce giant, thwarting 1.5M+ DDoS attacks during a peak holiday season.'
        }
    }
};
