"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { skills } from "./portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section skills-section section-anchor">
      <div className="page-width">
        <SectionHeading
          eyebrow="02 / Toolkit"
          title="What I am actively working with."
          description="A focused foundation for creating, learning, and collaborating on modern software."
          align="center"
        />
        <div className="skills-grid">
          {skills.map(({ name, icon: Icon, tone }, index) => (
            <motion.article
              className={`skill-card tone-${tone}`}
              key={name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.045 }}
            >
              <div className="skill-card-head"><span className="skill-icon"><Icon aria-hidden="true" /></span><ArrowUpRight aria-hidden="true" /></div>
              <h3>{name}</h3>
              <p>Learning &amp; building</p>
              <span className="skill-index">0{index + 1}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
