"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Cpu, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile } from "./portfolio-data";

const details = [
  { label: "Student", value: "B.Tech CSE - AI & ML", icon: Cpu },
  { label: "Location", value: "Nellore, India", icon: MapPin },
  { label: "Focus", value: "AI & Application Development", icon: Sparkles },
  { label: "Status", value: "Open to Internship Opportunities", icon: BriefcaseBusiness },
];

export function About() {
  return (
    <section id="about" className="section about-section section-anchor">
      <div className="page-width about-layout">
        <div>
          <SectionHeading eyebrow="01 / About" title="Learning by building with intent." />
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>I am a second-year B.Tech student seeking an internship where I can turn classroom learning into hands-on contribution.</p>
            <p>College hackathons have shaped how I approach a problem: with curiosity, practical teamwork, and a focus on useful solutions. I am especially interested in applying AI to products people can genuinely use.</p>
          </motion.div>
          <div className="detail-grid">
            {details.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                className="detail-card"
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
              >
                <Icon aria-hidden="true" />
                <div><span>{label}</span><strong>{value}</strong></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.figure
          className="profile-frame"
          initial={{ opacity: 0, rotate: 2, y: 20 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-scanline" aria-hidden="true" />
          <Image
            src={profile.imageUrl}
            alt="Vishnu Vikas Maggam"
            fill
            sizes="(max-width: 740px) 85vw, 370px"
            priority
            unoptimized
            className="profile-image"
          />
          <figcaption><span>VVM / 2026</span><i>AI Explorer</i></figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
