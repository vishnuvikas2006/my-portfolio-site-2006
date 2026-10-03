"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section experience-section section-anchor">
      <div className="page-width experience-layout">
        <SectionHeading eyebrow="03 / Experience" title="A student path with practical momentum." />
        <motion.div
          className="timeline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="timeline-line" aria-hidden="true"><span /></div>
          <div className="timeline-date">AUG 2024 <span /> MAY 2028</div>
          <article className="timeline-card">
            <div className="timeline-icon"><Building2 aria-hidden="true" /></div>
            <div className="timeline-meta"><span>Current</span><p><MapPin aria-hidden="true" /> Tirupati</p></div>
            <h3>Student <em>-</em> Mohan Babu University</h3>
            <ul>
              <li>Engaging in college hackathons to develop practical problem-solving skills.</li>
              <li>Building hands-on experience for addressing real-world challenges.</li>
            </ul>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
