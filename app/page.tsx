"use client"

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const heartContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      heartContainer.current?.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>For Esha 💖</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 flex flex-col items-center justify-center relative overflow-hidden text-center p-4">
        <div ref={heartContainer} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-pink-800 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi Esha 💕
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-pink-700 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I just wanted to say...
        </motion.p>

        <motion.div
          className="mt-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="bg-pink-500 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
            onClick={() => {
              const sorrySection = document.getElementById("sorry");
              sorrySection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Tap to Continue 💌
          </motion.button>
        </motion.div>
      </div>

      <section id="sorry" className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-pink-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I&apos;m really sorry, Esha 💔
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-600 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I never meant to hurt you. Please forgive me. You mean the world to me.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-full shadow-md"
          onClick={() => {
            const loveSection = document.getElementById("love");
            loveSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Accept Apology 🙏
        </motion.button>
      </section>

      <section id="love" className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-pink-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I Love You So Much 💖
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          You’re the most beautiful part of my life. I want to make you smile every day.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-4xl animate-bounce">💘</span>
          <span className="text-4xl animate-pulse">💞</span>
          <span className="text-4xl animate-bounce">💗</span>
        </motion.div>
      </section>

      <style jsx global>{`
        .heart {
          position: absolute;
          top: 0;
          width: 20px;
          height: 20px;
          background: url("https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png") no-repeat center/contain;
          animation: fall linear infinite;
          z-index: 0;
        }
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
