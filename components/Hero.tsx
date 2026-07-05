"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMusic } from "./MusicContext";
import SplitText from "./animations/SplitText";

export default function Hero() {
  const router = useRouter();
  const { enableMusic, audioRef } = useMusic();
  const [btnText, setBtnText] = useState("GO");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/data.json`)
      .then((r) => r.json())
      .then((d) => {
        if (d.siteConfig) {
          setBtnText(d.siteConfig.heroButtonText || "GO");
        }
      })
      .catch(() => {});
  }, []);

  const handleExplore = () => {
    enableMusic();
    const a = audioRef.current;
    if (a) {
      a.currentTime = 0;
      a.muted = false;
      a.play().catch(() => {});
    }
    router.push("/reason/");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center px-4 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-3xl font-medium text-[#1a1a1a]/60 mb-4"
        >
          首先回答一个最关键的问题：
        </motion.div>

        <SplitText
          text="为什么我想从运营转到新能源汽车销售岗"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] mb-10"
          delay={60}
          duration={0.5}
          from={{ opacity: 0, y: 40, rotateX: -60 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          splitType="chars"
          textAlign="center"
          tag="h1"
        />

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(249,115,22,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-full text-base font-medium hover:bg-[#ea580c] transition-colors duration-300 cursor-pointer shadow-lg"
        >
          {btnText} <ChevronDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
