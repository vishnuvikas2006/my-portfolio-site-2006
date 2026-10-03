"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, School } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section education-section section-anchor">
      <div className="page-width education-layout">
        <SectionHeading eyebrow="04 / Education" title="A foundation in intelligent systems." />
        <motion.article
          className="education-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="education-card-top"><span className="education-icon"><GraduationCap aria-hidden="true" /></span><ArrowUpRight aria-hidden="true" /></div>
          <p className="card-label">Expected May 2028</p>
          <h3>B.Tech <span>-</span> Artificial Intelligence</h3>
          <div className="education-school"><School aria-hidden="true" /><p><span></span></p></div>
          <div className="education-code"><span>AI</span><i /><span>MBU</span></div>
        </motion.article>
      </div>
    </section>
  );
}
