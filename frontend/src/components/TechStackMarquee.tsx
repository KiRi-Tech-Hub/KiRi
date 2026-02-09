
import React from 'react';

// Map technology names to Devicon URLs
const techIconMap: Record<string, { src: string; className?: string }> = {
    // Web Dev
    "React": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    "Next.js": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
    "Node.js": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    "Tailwind CSS": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

    // Mobile
    "React Native": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, // React logo is often used
    "Flutter": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    "Swift": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    "Kotlin": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    "Android": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    "iOS": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", className: "dark:invert" },

    // Custom App / Backend
    "Python": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    "Java": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ".NET": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    "PostgreSQL": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    "PHP": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },

    // AI / ML
    "TensorFlow": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    "PyTorch": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    "OpenAI API": { src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", className: "dark:invert" }, // Fallback to Wikimedia for OpenAI

    // SaaS / Cloud
    "AWS": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", className: "dark:invert" },
    "Docker": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    "Kubernetes": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },

    // API
    "Express": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", className: "dark:invert" },
    "GraphQL": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    "Swagger": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },

    // Marketing (Generic icons or specific if available)
    "Google Analytics": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    "SEMrush": { src: "https://cdn.worldvectorlogo.com/logos/sem.svg" }, // Third party commonly used
    "Ahrefs": { src: "https://cdn.worldvectorlogo.com/logos/ahrefs.svg" },
    "Search Console": { src: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" },

    "Facebook": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
    "Instagram": { src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
    "LinkedIn": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
    "Twitter": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" },

    "WordPress": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", className: "dark:invert" },
    "Medium": { src: "https://cdn.worldvectorlogo.com/logos/medium-circle-fill.svg", className: "dark:invert" },
    "Canva": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    "HubSpot": { src: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },

    // Design
    "Figma": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    "Sketch": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    "Adobe XD": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    "InVision": { src: "https://cdn.worldvectorlogo.com/logos/invision.svg" },

    "Illustrator": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
    "Photoshop": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    "Indesign": { src: "https://cdn.worldvectorlogo.com/logos/adobe-indesign-cc-icon.svg" },
    "CorelDRAW": { src: "https://cdn.worldvectorlogo.com/logos/coreldraw-x7.svg" },
    "After Effects": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },

    // Tools
    "Git": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    "Vite": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    "Laravel": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    "MySQL": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    "MongoDB": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
};

interface TechStackMarqueeProps {
    technologies: string[];
}

export default function TechStackMarquee({ technologies }: TechStackMarqueeProps) {
    // If no specific technologies are passed, or list is empty, return null
    if (!technologies || technologies.length === 0) return null;

    // Filter to only include techs we have icons for, to avoid broken images
    // Or allow text fallback if icon missing? For UI purpose, stick to mapped ones usually looks better, 
    // but we can fallback to just text if needed. For now let's map what we can.
    const techItems = technologies.map(tech => ({
        name: tech,
        ...techIconMap[tech]
    }));

    // Duplicate list for seamless loop
    const duplicatedTechs = [...techItems, ...techItems, ...techItems, ...techItems];

    return (
        <div className="w-full py-12 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
                Powered by Modern Technologies
            </h3>

            <div className="flex flex-col space-y-4 justify-center items-center w-full overflow-hidden relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

                <div className="flex overflow-hidden w-full">
                    <div className="flex space-x-12 animate-marquee whitespace-nowrap py-4">
                        {duplicatedTechs.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center gap-3">
                                <div className="flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                    {item.src ? (
                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            className={`w-10 h-10 object-contain ${item.className || ''}`}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <span className="text-xs font-bold">{item.name[0]}</span>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
