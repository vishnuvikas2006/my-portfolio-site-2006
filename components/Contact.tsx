"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
import { profile } from "./portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="section contact-section section-anchor">
      <div className="page-width contact-shell">
        <SectionHeading eyebrow="06 / Contact" title="Let&apos;s build something together." />
        <div className="contact-layout">
          <motion.div
            className="contact-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>I am currently looking for internship opportunities where I can gain hands-on experience, contribute to real-world projects, and continue developing my skills in AI and software development.</p>
            <a className="button button-primary contact-email" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
            <SocialLinks variant="button" />
          </motion.div>
          <motion.address
            className="contact-details"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /><span>Email</span><strong>{profile.email}</strong></a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone aria-hidden="true" /><span>Phone</span><strong>{profile.phone}</strong></a>
            <p><MapPin aria-hidden="true" /><span>Location</span><strong>Nellore, India</strong></p>
          </motion.address>
        </div>
      </div>
    </section>
  );
}
