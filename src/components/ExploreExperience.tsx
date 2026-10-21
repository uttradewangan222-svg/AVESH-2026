import React, { useState } from "react";
import { soundFx } from "../utils/audio";
import { Compass, Sparkles, Terminal, Flame, Zap, Award } from "lucide-react";

export const ExploreExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const chapters = [
    {
      id: "arena",
      index: "01",
      title: "THE ROBOTICS RING",
      tagline: "Robo Soccer & Sumo Dohyo Battles",
      description: "Witness high-energy soccer matches with 3kg customized bots fighting for the ball, followed by fierce circular Dohyo Sumo bouts where traction, smart front wedges, and driving precision crown the last bot standing.",
      stats: [
        { label: "Match Format", value: "2-Min Halves" },
        { label: "Max Bot Weight", value: "3 kg Standard" },
        { label: "Arena Size", value: "300 × 180 cm" }
      ],
      color: "from-[#FF642E] to-[#992600]",
      accent: "text-sunset",
      bgGradient: "bg-gradient-to-tr from-[#250d06] via-[#171717] to-[#0e1014]"
    },
    {
      id: "crucible",
      index: "02",
      title: "HACK4COMMUNITY",
      tagline: "8-Hour Innovation & Prototyping Sprint",
      description: "An intense 8-hour sprint where student teams collaborate, prototype, and present practical solutions for real community well-being, campus experience, accessibility, and public services with working demos.",
      stats: [
        { label: "Sprint Duration", value: "8 Hours" },
        { label: "Required Output", value: "Working Demo" },
        { label: "Problem Focus", value: "Community Impact" }
      ],
      color: "from-[#FFA843] to-[#FF642E]",
      accent: "text-amber",
      bgGradient: "bg-gradient-to-tr from-[#221706] via-[#171717] to-[#0e1014]"
    },
    {
      id: "nexus",
      index: "03",
      title: "FOUNDER'S FORGE & PROMPTME",
      tagline: "5-Hour Ideathon & 3-Hour AI Challenge",
      description: "Pitch business ideas to industry judges with 1:1 professional mentoring in Founder's Forge, and master AI prompt craft under clock pressure in PromptMe to turn prompts into designs, prototypes, and code.",
      stats: [
        { label: "Ideathon Sprint", value: "5 Hours" },
        { label: "Prompt Challenge", value: "2h Build + 1h Demo" },
        { label: "Judge Mentoring", value: "1:1 Live Feedback" }
      ],
      color: "from-[#FF8C66] to-[#FFA843]",
      accent: "text-coral",
      bgGradient: "bg-gradient-to-tr from-[#201016] via-[#171717] to-[#0e1014]"
    },
    {
      id: "celebration",
      index: "04",
      title: "CULTURAL DAY & ARTIST NIGHT",
      tagline: "Singing, Dance & Live Celebrity Headliner",
      description: "October 29 opens the stage for Solo/Group Singing and Dance crew choreography, leading straight into October 30's Grand Artist Night featuring auditorium highlights, an opening act, and a closing DJ dance floor.",
      stats: [
        { label: "Stage Events", value: "4 Competitions" },
        { label: "Cultural Timing", value: "29 Oct · 3–8 PM" },
        { label: "Artist Night", value: "30 Oct · 5 PM+" }
      ],
      color: "from-[#FF642E] to-[#FF8C66]",
      accent: "text-sunset",
      bgGradient: "bg-gradient-to-tr from-[#2a0e08] via-[#171717] to-[#0e1014]"
    }
  ];

  const current = chapters[activeStep];

  return (
    <section id="explore" className="relative py-24 sm:py-32 bg-[#0e1014] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-3">
              <Compass className="w-3.5 h-3.5 text-sunset" />
              <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                SECTION 03 // THE EXPERIENCE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              EXPLORE <span className="text-sunset">THE FESTIVAL</span>.
            </h2>
            <p className="font-sans text-sm sm:text-base text-silver-400 mt-2 max-w-xl">
              Immerse yourself across four signature dimensions of AVESH 2026.
            </p>
          </div>

          {/* Chapter Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveStep(idx);
                }}
                className={`px-4 py-3 text-left rounded-sm border transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-white/10 border-sunset text-white shadow-lg"
                    : "bg-[#171717] border-white/5 text-silver-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="block font-mono text-[10px] text-sunset font-bold tracking-widest">
                  CH // {ch.index}
                </span>
                <span className="block font-display font-bold text-xs sm:text-sm truncate">
                  {ch.title.replace("THE ", "")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Big Editorial Feature Canvas */}
        <div className={`relative p-8 sm:p-12 lg:p-16 rounded-sm border border-white/10 ${current.bgGradient} transition-all duration-700 clip-diagonal-card overflow-hidden shadow-2xl`}>
          
          {/* Ambient diagonal glow line */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sunset/15 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-sm font-bold tracking-[0.3em] text-sunset">
                  CHAPTER {current.index}
                </span>
                <span className="text-white/20">•</span>
                <span className="font-mono text-xs tracking-wider text-silver-400 uppercase">
                  AVESH DIMENSION
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
                {current.title}
              </h3>

              <p className="font-mono text-sm sm:text-base text-amber tracking-wide mb-6">
                {current.tagline}
              </p>

              <p className="font-sans text-sm sm:text-base text-silver-300 leading-relaxed mb-8 max-w-2xl">
                {current.description}
              </p>

              {/* Stat Callouts */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {current.stats.map((st, i) => (
                  <div key={i}>
                    <span className="block font-display font-black text-xl sm:text-2xl text-white">
                      {st.value}
                    </span>
                    <span className="block font-mono text-[10px] sm:text-xs text-silver-400 uppercase tracking-wider mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Abstract Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-sm bg-[#171717] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl clip-diagonal-card">
                
                {/* Diagonal background mask line */}
                <div className="absolute inset-0 bg-gradient-to-br from-sunset/20 via-transparent to-black pointer-events-none" />

                <div className="flex justify-between items-center relative z-10">
                  <span className="font-mono text-xs text-sunset font-bold tracking-widest">
                    SYSTEM // ACTIVE
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sunset animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-silver-400" />
                  </div>
                </div>

                {/* Big Center Typographic Mark */}
                <div className="relative z-10 text-center py-6">
                  <span className="font-display font-black text-7xl sm:text-8xl text-white/90 drop-shadow-[0_4px_20px_rgba(255,100,46,0.5)]">
                    {current.index}
                  </span>
                  <span className="block font-mono text-xs tracking-[0.3em] text-silver-400 uppercase mt-2">
                    {current.id}
                  </span>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-silver-400">
                  <span>VENUE SPEC</span>
                  <span className="text-white font-bold">CGIT RAIPUR</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
