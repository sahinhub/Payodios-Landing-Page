import React, { useEffect, useRef } from "react";
import "../ExtraStyles/hero.css";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { AuroraText } from "./magicui/aurora-text";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { cn } from "../lib/utils";
import { TextAnimate } from "./magicui/text-animate";


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
        <div className="mx-auto text-center max-w-[766px] flex flex-col gap-3">
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-white/50 via-primary/50 to-white/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <AnimatedGradientText className="text-sm font-medium">
              All-in-one payment for everyone
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>


          <h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold tracking-tight ">
            <TextAnimate animation="blurInUp" by="word" delay={2}>
              Paydios Merchant Portal – Simplified Your Payments.
            </TextAnimate>
           
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-300">
            <TextAnimate animation="fadeInUp" by="line" as={'p'}>
              Welcome to Paydios, your all-in-one payment gateway solution designed to help your business accept payments securely, track earnings, and grow with confidence.
            </TextAnimate>


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
