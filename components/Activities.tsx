"use client";

import { motion } from "framer-motion";
import { Orbit, UsersRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Activities() {
  return (
    <section id="activities" className="section activities-section section-anchor">
      <div className="page-width activities-layout">
        <SectionHeading eyebrow="05 / Beyond coursework" title="Community, coordination, and shared curiosity." />
        <motion.article
          className="activity-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="activity-orbit" aria-hidden="true"><Orbit /><i /><b /></div>
          <div className="activity-content">
            <span className="activity-kicker"><UsersRound aria-hidden="true" /> Extracurricular activity</span>
            <h3>DATA CLUB <em>Coordinator</em></h3>
            <p>Mohan Babu University, Tirupati</p>
          </div>
          <span className="activity-number">01</span>
        </motion.article>
      </div>
    </section>
  );
}
