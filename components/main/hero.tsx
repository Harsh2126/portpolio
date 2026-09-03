import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full min-h-screen overflow-hidden">
      {/* Orange radial glow top-left */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] -z-10" />
      {/* Subtle orange glow bottom-right */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange-400/5 blur-[100px] -z-10" />
      {/* Center faint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-orange-500/5 blur-[140px] -z-10" />

      <HeroContent />
    </div>
  );
};
