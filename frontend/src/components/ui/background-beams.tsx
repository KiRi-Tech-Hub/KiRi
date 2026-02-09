import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            {/* SVG Content */}
            <svg
                className="z-0 h-full w-full pointer-events-none absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 700 700"
                fill="none"
            >
                <path
                    opacity="0.5"
                    d="M209 450C209 450 256.5 486 350.5 486C444.5 486 491 450 491 450"
                    stroke="url(#paint0_radial_2069_3151)"
                    strokeOpacity="0.5"
                />
                <path
                    opacity="0.5"
                    d="M209 450C209 450 256.5 486 350.5 486C444.5 486 491 450 491 450"
                    stroke="url(#paint1_radial_2069_3151)"
                    strokeOpacity="0.5"
                />
                <defs>
                    <radialGradient
                        id="paint0_radial_2069_3151"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(350 486) rotate(-90) scale(36)"
                    >
                        <stop stopColor="var(--neutral-500)" />
                        <stop offset="1" stopColor="var(--neutral-500)" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                        id="paint1_radial_2069_3151"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(350 486) rotate(-90) scale(36)"
                    >
                        <stop stopColor="var(--neutral-500)" />
                        <stop offset="1" stopColor="var(--neutral-500)" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            {/* Moving Beams */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[600px] h-[600px] bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>
                <Beams />
            </div>
        </div>
    );
};

const Beams = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Simplified for demo - usually extensive SVG paths with animations */}
            <div className="absolute h-96 w-full bg-gradient-to-b from-neutral-800 to-transparent opacity-20 blur-3xl -top-20"></div>
            {/* Adding some moving light effect */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-gradient-to-b from-transparent via-neutral-500/10 to-transparent rotate-[30deg] animate-pulse"></div>
            </div>
        </div>
    )
}
