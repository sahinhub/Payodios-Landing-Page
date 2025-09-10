import React, { useEffect, useRef } from "react";
import "../ExtraStyles/hero.css";
import { ArrowRightIcon } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AuroraText } from "./magicui/aurora-text";

const HeroSection: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).UnicornStudio) {
      (window as any).UnicornStudio.init();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).UnicornStudio) {
        (window as any).UnicornStudio.init();
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const AnimatedButton: React.FC = () => {
    return (
      <button type="button" className="animatedButton">
        <div className="pointsWrapper">
          {Array.from({ length: 10 }, (_, i) => (
            <i key={i} className="point" />
          ))}
        </div>

        <span className="inner">
          Try for free
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </button>
    );
  };

  const WatchDemoButton: React.FC = () => {
    return (
      <button className="watchDemoButton">
        <span className="watchDemoButtonText">Watch demo</span>
        <span aria-hidden="true" className="watchDemoButtonUnderline" />
      </button>
    );
  };

  return (
    <section
      className={`hero-section relative z-10 overflow-hidden h-screen pt-50 ${className}`}
    >
      {/* ✅ Unicorn Studio animation */}
      <div
        ref={containerRef}
        data-us-project="krvLrHX3sj3cg8BHywDj"
        className="absolute inset-0 z-0 w-full min-h-screen"
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-8 md:px-6 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-white/20">
            <span>💳 All-in-one payment for everyone</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>

          <h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold tracking-tight">
            Paydios Merchant Portal – <AuroraText>Simplified</AuroraText> Your
            Payments.
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-300">
            Nebula is a visual builder that lets you design, collaborate, and
            publish in one place. No code required—unless you want it.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AnimatedButton />
            <WatchDemoButton />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
            <div className="flex -space-x-2">
              <img
                className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover"
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c519027-8b76-493a-ae3c-8cf962ccdf04_320w.jpg"
                alt="Team member"
              />
              <img
                className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover"
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_800w.jpg"
                alt="Team member"
              />
              <img
                className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover"
                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69c45eba-968b-45e3-aff1-ebab9cb7b543_320w.jpg"
                alt="Team member"
              />
            </div>
            <span>Trusted by modern teams of all sizes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
