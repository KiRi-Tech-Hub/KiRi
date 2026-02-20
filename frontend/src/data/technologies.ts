import {
    SiReact, SiAngular, SiVuedotjs, SiNextdotjs, SiTypescript,
    SiNodedotjs, SiPython, SiLaravel, SiDjango,
    SiShopify, SiWoocommerce, SiMagento, SiBigcommerce,
    SiFlutter, SiSwift, SiKotlin, SiFirebase,
    SiDocker, SiKubernetes, SiAmazon, SiGooglecloud,
    SiGithub, SiLinux,
    SiMongodb, SiPostgresql, SiMysql, SiRedis,
    SiTailwindcss, SiGraphql, SiNuxtdotjs, SiSvelte,
    SiSpringboot, SiRubyonrails, SiGo,
    SiTerraform, SiJenkins, SiNginx, SiElasticsearch,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface TechItem {
    name: string;
    icon: IconType;
    color: string;
    description: string;
    tag?: string;
}

export interface UseCase {
    title: string;
    description: string;
    icon: string;
}

export interface WhyChoosePoint {
    title: string;
    description: string;
}

export interface TechCategory {
    id: string;
    label: string;
    slug: string;
    tagline: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    accentColor: string;
    heroIcon: string;
    stats: { value: string; label: string }[];
    technologies: TechItem[];
    useCases: UseCase[];
    whyChoose: WhyChoosePoint[];
    processSteps: { step: string; title: string; description: string }[];
}

export const techCategories: TechCategory[] = [
    {
        id: 'frontend',
        label: 'Front End',
        slug: 'frontend',
        tagline: 'Craft Stunning Digital Experiences',
        description: 'We build blazing-fast, pixel-perfect user interfaces using the latest frontend frameworks. Our UIs are not just beautiful—they\'re performant, accessible, and delightful to use.',
        gradientFrom: '#6366f1',
        gradientTo: '#3b82f6',
        accentColor: '#6366f1',
        heroIcon: '🎨',
        stats: [
            { value: '50+', label: 'Projects Delivered' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '50ms', label: 'Avg. Load Time' },
            { value: '10+', label: 'Years Experience' },
        ],
        technologies: [
            { name: 'React JS', icon: SiReact, color: '#61DAFB', description: 'The most popular UI library for building component-driven, reactive web apps.', tag: 'Most Popular' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000', description: 'Full-stack React framework with SSR, SSG, and edge rendering capabilities.', tag: 'Recommended' },
            { name: 'Angular', icon: SiAngular, color: '#DD0031', description: 'Enterprise-grade TypeScript framework by Google for large-scale applications.' },
            { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883', description: 'Progressive framework known for simplicity and elegant reactivity model.' },
            { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82', description: 'Intuitive Vue meta-framework for universal and static site generation.' },
            { name: 'Svelte', icon: SiSvelte, color: '#FF3E00', description: 'Compiler-based framework that ships zero runtime overhead to the browser.' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Strongly typed JavaScript superset that catches errors at compile time.' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', description: 'Utility-first CSS framework for rapid, consistent UI development.' },
            { name: 'GraphQL', icon: SiGraphql, color: '#E10098', description: 'Query language for your API with exact data fetching and strong typing.' },
        ],
        useCases: [
            { title: 'SaaS Dashboards', description: 'Complex data-driven dashboards with real-time updates and rich interactions.', icon: '📊' },
            { title: 'E-Commerce Storefronts', description: 'High-converting, lightning-fast product pages and checkout flows.', icon: '🛒' },
            { title: 'Corporate Portals', description: 'Internal tools and employee portals with secure, role-based access.', icon: '🏢' },
            { title: 'Progressive Web Apps', description: 'App-like experiences that work offline and install on any device.', icon: '📱' },
        ],
        whyChoose: [
            { title: 'Performance First', description: 'We obsess over Core Web Vitals, ensuring every page loads in under a second.' },
            { title: 'Accessible by Default', description: 'WCAG 2.1 AA compliance built in from day one—no retrofitting needed.' },
            { title: 'SEO Optimized', description: 'Server-side rendering and static generation for maximum search visibility.' },
            { title: 'Scalable Architecture', description: 'Component libraries and design systems that grow with your product.' },
        ],
        processSteps: [
            { step: '01', title: 'Design System Setup', description: 'Tokens, components, and style guide aligned with your brand.' },
            { step: '02', title: 'Component Development', description: 'Reusable, tested components built in isolation with Storybook.' },
            { step: '03', title: 'API Integration', description: 'Seamless connection to your backend or any third-party APIs.' },
            { step: '04', title: 'Testing & Deploy', description: 'E2E testing, performance audits, and CI/CD pipeline setup.' },
        ],
    },
    {
        id: 'backend',
        label: 'Back End',
        slug: 'backend',
        tagline: 'Powerful Engines Behind Great Products',
        description: 'We architect and build robust, scalable server-side systems. From high-throughput APIs to real-time data pipelines, our backend solutions power millions of requests reliably.',
        gradientFrom: '#10b981',
        gradientTo: '#0ea5e9',
        accentColor: '#10b981',
        heroIcon: '⚙️',
        stats: [
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '500k+', label: 'Req/min Handled' },
            { value: '150+', label: 'APIs Built' },
            { value: '8+', label: 'Years Backend Exp.' },
        ],
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Event-driven JavaScript runtime ideal for real-time APIs and microservices.', tag: 'Most Popular' },
            { name: 'Python', icon: SiPython, color: '#3776AB', description: 'Versatile language powering ML models, data pipelines, and REST APIs.', tag: 'Recommended' },
            { name: 'Java', icon: FaJava, color: '#ED8B00', description: 'Enterprise powerhouse for high-throughput, mission-critical applications.' },
            { name: 'Go', icon: SiGo, color: '#00ADD8', description: 'Compiled language delivering C-like performance for cloud-native services.' },
            { name: 'PHP / Laravel', icon: SiLaravel, color: '#FF2D20', description: 'Elegant PHP framework with expressive ORM and full-stack capabilities.' },
            { name: 'Django', icon: SiDjango, color: '#092E20', description: 'Batteries-included Python framework for rapid, secure web development.' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', description: 'Industry-standard Java framework for production-ready microservices.' },
            { name: 'Ruby on Rails', icon: SiRubyonrails, color: '#CC0000', description: 'Convention-over-configuration framework for rapid MVP development.' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', description: 'Advanced open-source relational database with full ACID compliance.' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'Flexible document database ideal for unstructured or evolving data.' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D', description: 'In-memory data store for caching, sessions, and pub/sub messaging.' },
            { name: 'GraphQL', icon: SiGraphql, color: '#E10098', description: 'Flexible API query language enabling precise and efficient data fetching.' },
        ],
        useCases: [
            { title: 'REST & GraphQL APIs', description: 'Well-documented, versioned APIs with authentication and rate limiting.', icon: '🔌' },
            { title: 'Real-Time Systems', description: 'WebSocket-powered chat, notifications, and live data feeds.', icon: '⚡' },
            { title: 'Microservices', description: 'Decoupled service meshes that scale individual components independently.', icon: '🧩' },
            { title: 'AI / ML Backends', description: 'Inference APIs, model serving, and data preprocessing pipelines.', icon: '🤖' },
        ],
        whyChoose: [
            { title: 'Security by Design', description: 'OWASP Top 10 protections, JWT / OAuth, and encrypted data at rest.' },
            { title: 'Horizontal Scalability', description: 'Stateless services designed to scale out on demand with zero downtime.' },
            { title: 'Observability', description: 'Structured logging, distributed tracing, and metrics dashboards.' },
            { title: 'Clean Architecture', description: 'Domain-driven design patterns that keep code maintainable long-term.' },
        ],
        processSteps: [
            { step: '01', title: 'Architecture Design', description: 'Database schemas, service boundaries, and API contracts defined upfront.' },
            { step: '02', title: 'Core Development', description: 'Business logic, data models, and API endpoints built with TDD.' },
            { step: '03', title: 'Security Hardening', description: 'Auth layers, input validation, and penetration testing.' },
            { step: '04', title: 'Performance Tuning', description: 'Query optimization, caching strategies, and load testing.' },
        ],
    },
    {
        id: 'ecommerce',
        label: 'E-Commerce',
        slug: 'ecommerce',
        tagline: 'Sell More. Convert Better. Grow Faster.',
        description: 'We build e-commerce experiences that turn browsers into buyers. From SEO-optimized storefronts to headless commerce architectures, we help brands sell at scale.',
        gradientFrom: '#f59e0b',
        gradientTo: '#ef4444',
        accentColor: '#f59e0b',
        heroIcon: '🛒',
        stats: [
            { value: '3x', label: 'Avg. Conversion Lift' },
            { value: '80+', label: 'Stores Launched' },
            { value: '$50M+', label: 'Revenue Generated' },
            { value: '2s', label: 'Avg. Page Load' },
        ],
        technologies: [
            { name: 'Shopify', icon: SiShopify, color: '#96BF48', description: 'World\'s leading commerce platform with 10,000+ apps and themes.', tag: 'Most Popular' },
            { name: 'WooCommerce', icon: SiWoocommerce, color: '#7F54B3', description: 'Flexible, open-source commerce plugin for WordPress—fully customizable.' },
            { name: 'Magento', icon: SiMagento, color: '#EE672F', description: 'Enterprise-grade platform for complex catalogs and B2B workflows.' },
            { name: 'BigCommerce', icon: SiBigcommerce, color: '#34313F', description: 'SaaS platform balancing ease-of-use with enterprise feature depth.', tag: 'Growing Fast' },
            { name: 'Next.js Commerce', icon: SiNextdotjs, color: '#000000', description: 'Headless storefront framework for blazing-fast custom storefronts.' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Custom backend for inventory management, pricing engines, and webhooks.' },
        ],
        useCases: [
            { title: 'D2C Storefronts', description: 'Brand-focused stores that tell a story and drive repeat purchases.', icon: '🏷️' },
            { title: 'Multi-Vendor Marketplaces', description: 'Amazon-style platforms with vendor onboarding and commission systems.', icon: '🏪' },
            { title: 'B2B Commerce', description: 'Wholesale portals with custom pricing, credit terms, and bulk ordering.', icon: '🤝' },
            { title: 'Subscriptions & Memberships', description: 'Recurring revenue models with billing, dunning, and tier management.', icon: '🔄' },
        ],
        whyChoose: [
            { title: 'Conversion-Focused Design', description: 'Every UI decision is backed by CRO best practices and A/B testing.' },
            { title: 'Omnichannel Ready', description: 'Unified inventory across web, mobile, POS, and social commerce channels.' },
            { title: 'SEO Architecture', description: 'Structured data, fast pages, and crawlable URLs for organic growth.' },
            { title: 'Payment Flexibility', description: 'Support for 50+ gateways including Stripe, Razorpay, and buy-now-pay-later.' },
        ],
        processSteps: [
            { step: '01', title: 'Platform Selection', description: 'We audit your needs and recommend the right commerce stack.' },
            { step: '02', title: 'Store Setup & Design', description: 'Custom theme development aligned with your brand identity.' },
            { step: '03', title: 'Integrations', description: 'ERP, CRM, marketing tools, and logistics connected seamlessly.' },
            { step: '04', title: 'Launch & Growth', description: 'Performance monitoring, A/B testing, and iterative CRO sprints.' },
        ],
    },
    {
        id: 'mobile',
        label: 'Mobile Apps',
        slug: 'mobile',
        tagline: 'Apps Users Can\'t Put Down',
        description: 'We design and develop native and cross-platform mobile apps that users love. Whether iOS, Android, or both—our mobile solutions deliver native performance with shared codebases.',
        gradientFrom: '#8b5cf6',
        gradientTo: '#ec4899',
        accentColor: '#8b5cf6',
        heroIcon: '📱',
        stats: [
            { value: '5M+', label: 'Downloads Achieved' },
            { value: '4.8★', label: 'Avg. Store Rating' },
            { value: '12+', label: 'Platform Expertise' },
        ],
        technologies: [
            { name: 'Flutter', icon: SiFlutter, color: '#54C5F8', description: 'Google\'s SDK for beautiful, natively compiled apps from a single codebase.', tag: 'Recommended' },
            { name: 'React Native', icon: SiReact, color: '#61DAFB', description: 'Meta\'s framework for true native apps using React and JavaScript.', tag: 'Most Popular' },
            { name: 'iOS (Swift)', icon: SiSwift, color: '#FA7343', description: 'Apple\'s modern language for building high-performance iPhone and iPad apps.' },
            { name: 'Android (Kotlin)', icon: SiKotlin, color: '#7F52FF', description: 'Google\'s preferred language for modern, safe Android app development.' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', description: 'Google\'s mobile backend for auth, real-time data, and push notifications.' },
        ],
        useCases: [
            { title: 'Consumer Apps', description: 'Social, fitness, fintech, and lifestyle apps for mass-market audiences.', icon: '👥' },
            { title: 'Enterprise Mobility', description: 'Field service, inventory, and workforce apps for internal teams.', icon: '💼' },
            { title: 'On-Demand Platforms', description: 'Uber-style apps with real-time tracking, maps, and dynamic pricing.', icon: '🚗' },
            { title: 'Health & Wellness', description: 'HIPAA-compliant telehealth, fitness tracking, and wellness coaching apps.', icon: '❤️' },
        ],
        whyChoose: [
            { title: 'Native Performance', description: '60fps animations and smooth gestures that feel truly native on every device.' },
            { title: 'Offline-First', description: 'Apps that sync intelligently when connectivity is restored.' },
            { title: 'App Store Expertise', description: 'We handle App Store and Play Store submissions, reviews, and metadata optimization.' },
            { title: 'Push & Engagement', description: 'Targeted push notifications and in-app messaging to boost retention.' },
        ],
        processSteps: [
            { step: '01', title: 'UX Research', description: 'User interviews, competitive analysis, and information architecture.' },
            { step: '02', title: 'Prototyping', description: 'Interactive Figma prototypes validated with real users before coding.' },
            { step: '03', title: 'Development & QA', description: 'Iterative sprints with device testing on 20+ iOS and Android devices.' },
            { step: '04', title: 'Launch & Iterate', description: 'Store submission, ASO, and post-launch analytics-driven improvements.' },
        ],
    },
    {
        id: 'devops',
        label: 'DevOps & Other',
        slug: 'devops',
        tagline: 'Ship Faster. Scale Effortlessly.',
        description: 'We automate the entire software delivery lifecycle—from infrastructure provisioning to production deployments. Our DevOps practices reduce release cycles from weeks to hours.',
        gradientFrom: '#06b6d4',
        gradientTo: '#6366f1',
        accentColor: '#06b6d4',
        heroIcon: '☁️',
        stats: [
            { value: '10x', label: 'Faster Deployments' },
            { value: '90%', label: 'Infra Cost Savings' },
            { value: '300+', label: 'Pipelines Built' },
            { value: '24/7', label: 'Monitoring & Support' },
        ],
        technologies: [
            { name: 'AWS', icon: SiAmazon, color: '#FF9900', description: 'Market-leading cloud with 200+ services for compute, storage, and AI.', tag: 'Most Popular' },
            { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4', description: 'Best-in-class AI/ML services and globally distributed infrastructure.' },
            { name: 'Azure', icon: SiGooglecloud, color: '#0078D4', description: 'Enterprise cloud tightly integrated with Microsoft\'s ecosystem.' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Containerization platform for consistent, portable application packaging.', tag: 'Recommended' },
            { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', description: 'Container orchestration system for automated deployment and scaling.' },
            { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', description: 'Infrastructure-as-code tool for reproducible cloud environments.' },
            { name: 'Jenkins', icon: SiJenkins, color: '#D24939', description: 'Open-source automation server powering repeatable CI/CD pipelines.' },
            { name: 'Nginx', icon: SiNginx, color: '#009639', description: 'High-performance web server and reverse proxy for production traffic.' },
            { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571', description: 'Distributed search and analytics engine for logs and full-text search.' },
            { name: 'Linux', icon: SiLinux, color: '#FCC624', description: 'The backbone of cloud infrastructure—stable, secure, and open-source.' },
            { name: 'Git / GitHub', icon: SiGithub, color: '#181717', description: 'Version control and collaboration platform for all your code.' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1', description: 'World\'s most widely used open-source relational database.' },
        ],
        useCases: [
            { title: 'CI/CD Pipelines', description: 'Automated build, test, and deploy pipelines that eliminate manual work.', icon: '🔄' },
            { title: 'Cloud Migration', description: 'Lift-and-shift and re-architecture of on-premise workloads to cloud.', icon: '☁️' },
            { title: 'Kubernetes Clusters', description: 'Managed K8s clusters for microservices with auto-scaling and rollbacks.', icon: '🐳' },
            { title: 'Security & Compliance', description: 'SOC2, HIPAA, and GDPR-ready infrastructure with automated auditing.', icon: '🔒' },
        ],
        whyChoose: [
            { title: 'GitOps Workflow', description: 'All infrastructure changes reviewed as code—no more snowflake servers.' },
            { title: 'Zero-Downtime Deploys', description: 'Blue/green and canary deployments eliminate production disruptions.' },
            { title: 'Cost Optimization', description: 'Right-sizing, spot instances, and reserved capacity cut cloud bills significantly.' },
            { title: 'Disaster Recovery', description: 'Multi-region failover with <15 min RTO and near-zero RPO.' },
        ],
        processSteps: [
            { step: '01', title: 'Infrastructure Audit', description: 'Assess current setup, identify bottlenecks and security gaps.' },
            { step: '02', title: 'IaC & Pipeline Setup', description: 'Terraform modules and CI/CD pipelines for every environment.' },
            { step: '03', title: 'Monitoring Stack', description: 'Logs, metrics, traces, and alerting wired up across all services.' },
            { step: '04', title: 'Runbook & Handoff', description: 'Full documentation, on-call setup, and team training.' },
        ],
    },
];

export type TechCategorySlug = 'frontend' | 'backend' | 'ecommerce' | 'mobile' | 'devops';

export const getTechCategoryBySlug = (slug: string): TechCategory | undefined =>
    techCategories.find((c) => c.slug === slug);
