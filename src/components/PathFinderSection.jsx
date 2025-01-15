"use client";

import { motion } from "framer-motion";

const PathFinderSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('/patterns/grid.svg')] bg-repeat opacity-5"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-12 text-center"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent bottom-0 left-0"
              />
              <h2 className="text-4xl md:text-5xl text-accent font-IranYekan direction-rtl font-[800] py-3">
                مسیر خودتو پیدا کن!
              </h2>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative backdrop-blur-sm rounded-2xl border border-accent/10 overflow-hidden">
              {/* Top Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20"></div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-lg text-accentDark leading-relaxed font-IranYekan direction-rtl text-right">
                  آیا به دنبال شغلی هستی که با عشق و علاقه آن را دنبال کنی؟{" "}
                  <span className="text-accent/90 font-[600]">
                    در مجتمع آموزشی بن‌ژیوار
                  </span>،{" "}
                  ما به شما کمک می‌کنیم تا مسیر خود را در زمینه‌های مختلف مانند{" "}
                  <span className="text-accent/90 font-[600]">
                    معماری داخلی، توسعه فردی، کسب‌وکار و کافه و رستوران
                  </span>{" "}
                  پیدا کنید. با آموزش‌های تخصصی و راهنمایی‌های حرفه‌ای، آینده‌ای روشن و شغلی پرانرژی را برای خود بسازید!
                </p>

                {/* Icons */}
                <div className="flex justify-center gap-6 mt-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default PathFinderSection;
