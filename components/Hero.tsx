"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Send } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { profile } from "./portfolio-data";

const Hero3D = dynamic(() => import("./Hero3D").then((module) => module.Hero3D), {
  ssr: false,
  loading: () => <div className="hero-visual-fallback" aria-hidden="true"><i /><i /><b /></div>,
});

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-grid page-width">
        <motion.div className="hero-copy" initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={enter} className="eyebrow"><span />Available for internships</motion.p>
          <motion.h1 variants={enter}>{profile.name}</motion.h1>
          <motion.p variants={enter} className="hero-role">Computer Science Engineering Student <span>|</span> AI &amp; ML Enthusiast <span>|</span> Developer</motion.p>
          <motion.p variants={enter} className="hero-intro">Building intelligent solutions, exploring AI, and turning ideas into real-world applications.</motion.p>
          <motion.div variants={enter} className="hero-actions">
            {/* TODO: add the actual resume PDF at public/resume.pdf. */}
            <a className="button button-primary" href="/resume.pdf" target="_blank"><Download aria-hidden="true" />View Resume</a>
            <a className="button button-secondary" href="#contact"><Send aria-hidden="true" />Contact Me</a>
          </motion.div>
          <motion.div variants={enter} className="hero-bottom">
            <SocialLinks />
            <a className="scroll-cue" href="#about">Scroll to explore <ArrowDownRight aria-hidden="true" /></a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          aria-label="Interactive abstract AI network visual"
          role="img"
        >
          <div className="visual-label visual-label-top"><span /> Neural interface</div>
          <div className="visual-label visual-label-bottom">AI / ML <b>01</b></div>
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
