"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ChevronUp,
  Volume,
  Volume1,
  Volume2,
  Mic,
  Moon,
  SkipForward,
  SkipBack,
  Play,
  Search,
  Table,
  Sun,
  Command,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Globe
} from "lucide-react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-white"
      >
        {title || (
          <span>
            Experience the Future of Collaborative Coding
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#1e1e1e]">
          <VSCodeInterface />
        </div>
      </motion.div>
    </div>
  );
};

const VSCodeInterface = () => {
  return (
    <div className="h-full w-full bg-[#1e1e1e] rounded-lg overflow-hidden text-xs">
      {/* Title Bar */}
      <div className="bg-[#323233] h-8 flex items-center justify-between px-2 border-b border-[#2d2d30]">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-[#cccccc] text-xs">VSCode - Collaborative Coding</div>
        <div></div>
      </div>
      
      {/* Menu Bar */}
      <div className="bg-[#2d2d30] h-6 flex items-center px-2 text-[#cccccc] text-xs border-b border-[#3e3e42]">
        <span className="px-2 hover:bg-[#3e3e42] cursor-pointer">File</span>
        <span className="px-2 hover:bg-[#3e3e42] cursor-pointer">Edit</span>
        <span className="px-2 hover:bg-[#3e3e42] cursor-pointer">View</span>
        <span className="px-2 hover:bg-[#3e3e42] cursor-pointer">Go</span>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Sidebar */}
        <div className="w-12 bg-[#252526] border-r border-[#3e3e42] flex flex-col items-center py-2 space-y-3">
          <div className="w-6 h-6 bg-[#007acc] rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <div className="w-6 h-6 hover:bg-[#3e3e42] rounded flex items-center justify-center cursor-pointer">
            <Search className="w-3 h-3 text-[#cccccc]" />
          </div>
          <div className="w-6 h-6 hover:bg-[#3e3e42] rounded flex items-center justify-center cursor-pointer">
            <Globe className="w-3 h-3 text-[#cccccc]" />
          </div>
        </div>

        {/* File Explorer */}
        <div className="w-48 bg-[#252526] border-r border-[#3e3e42] p-2">
          <div className="text-[#cccccc] text-xs mb-2 font-semibold">EXPLORER</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-[#cccccc] hover:bg-[#2a2d2e] px-1 py-0.5 rounded cursor-pointer">
              <ChevronDown className="w-3 h-3" />
              <span className="text-xs">src</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="text-[#4ec9b0] text-xs hover:bg-[#2a2d2e] px-1 py-0.5 rounded cursor-pointer">components</div>
              <div className="text-[#569cd6] text-xs hover:bg-[#2a2d2e] px-1 py-0.5 rounded cursor-pointer bg-[#094771]">App.tsx</div>
              <div className="text-[#d4d4d4] text-xs hover:bg-[#2a2d2e] px-1 py-0.5 rounded cursor-pointer">index.css</div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 bg-[#1e1e1e]">
          {/* Tabs */}
          <div className="bg-[#2d2d30] h-8 flex items-center border-b border-[#3e3e42]">
            <div className="bg-[#1e1e1e] px-3 py-1 text-[#cccccc] text-xs border-r border-[#3e3e42] flex items-center space-x-2">
              <span>App.tsx</span>
              <span className="hover:bg-[#3e3e42] w-4 h-4 flex items-center justify-center rounded cursor-pointer">×</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-4 font-mono text-xs leading-5">
            <div className="space-y-1">
              <div className="flex">
                <span className="text-[#6A9955] mr-2">1</span>
                <span className="text-[#569cd6]">import</span>
                <span className="text-[#d4d4d4]"> React </span>
                <span className="text-[#569cd6]">from</span>
                <span className="text-[#ce9178]"> 'react'</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">2</span>
                <span className="text-[#569cd6]">import</span>
                <span className="text-[#d4d4d4]"> </span>
                <span className="text-[#ce9178]">'./App.css'</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">3</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">4</span>
                <span className="text-[#569cd6]">function</span>
                <span className="text-[#dcdcaa]"> App</span>
                <span className="text-[#d4d4d4]">() {'{'}</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">5</span>
                <span className="text-[#d4d4d4]">  </span>
                <span className="text-[#569cd6]">return</span>
                <span className="text-[#d4d4d4]"> (</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">6</span>
                <span className="text-[#d4d4d4]">    &lt;</span>
                <span className="text-[#4ec9b0]">div</span>
                <span className="text-[#92c5f8]"> className</span>
                <span className="text-[#d4d4d4]">=</span>
                <span className="text-[#ce9178]">"App"</span>
                <span className="text-[#d4d4d4]">&gt;</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">7</span>
                <span className="text-[#d4d4d4]">      &lt;</span>
                <span className="text-[#4ec9b0]">h1</span>
                <span className="text-[#d4d4d4]">&gt;Real-time Collaboration&lt;/</span>
                <span className="text-[#4ec9b0]">h1</span>
                <span className="text-[#d4d4d4]">&gt;</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">8</span>
                <span className="text-[#d4d4d4]">    &lt;/</span>
                <span className="text-[#4ec9b0]">div</span>
                <span className="text-[#d4d4d4]">&gt;</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">9</span>
                <span className="text-[#d4d4d4]">  )</span>
              </div>
              <div className="flex">
                <span className="text-[#6A9955] mr-2">10</span>
                <span className="text-[#d4d4d4]">{'}'}</span>
              </div>
            </div>
            
            {/* Collaborative cursors */}
            <div className="absolute top-20 left-40">
              <div className="w-0.5 h-4 bg-cyan-400 animate-pulse"></div>
              <div className="bg-cyan-400 text-white px-1 text-xs rounded mt-1">Alice</div>
            </div>
            <div className="absolute top-32 left-32">
              <div className="w-0.5 h-4 bg-green-400 animate-pulse"></div>
              <div className="bg-green-400 text-white px-1 text-xs rounded mt-1">Bob</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      {/* First Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <Sun className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>
        <KBtn>
          <Sun className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <Table className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <Search className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <Mic className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <Moon className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <SkipBack className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <Play className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <SkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F9</span>
        </KBtn>
        <KBtn>
          <Volume className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <Volume1 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <Volume2 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Additional rows simplified for brevity */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn><span className="block">~</span><span className="mt-1 block">`</span></KBtn>
        <KBtn><span className="block">!</span><span className="block">1</span></KBtn>
        <KBtn><span className="block">@</span><span className="block">2</span></KBtn>
        <KBtn><span className="block">#</span><span className="block">3</span></KBtn>
        <KBtn><span className="block">$</span><span className="block">4</span></KBtn>
        <KBtn><span className="block">%</span><span className="block">5</span></KBtn>
        <KBtn><span className="block">^</span><span className="block">6</span></KBtn>
        <KBtn><span className="block">&</span><span className="block">7</span></KBtn>
        <KBtn><span className="block">*</span><span className="block">8</span></KBtn>
        <KBtn><span className="block">(</span><span className="block">9</span></KBtn>
        <KBtn><span className="block">)</span><span className="block">0</span></KBtn>
        <KBtn><span className="block">_</span><span className="block">-</span></KBtn>
        <KBtn><span className="block">+</span><span className="block">=</span></KBtn>
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">delete</KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">tab</KBtn>
        <KBtn><span className="block">Q</span></KBtn>
        <KBtn><span className="block">W</span></KBtn>
        <KBtn><span className="block">E</span></KBtn>
        <KBtn><span className="block">R</span></KBtn>
        <KBtn><span className="block">T</span></KBtn>
        <KBtn><span className="block">Y</span></KBtn>
        <KBtn><span className="block">U</span></KBtn>
        <KBtn><span className="block">I</span></KBtn>
        <KBtn><span className="block">O</span></KBtn>
        <KBtn><span className="block">P</span></KBtn>
        <KBtn><span className="block">[</span></KBtn>
        <KBtn><span className="block">]</span></KBtn>
        <KBtn><span className="block">\</span></KBtn>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
