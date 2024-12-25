"use client";
import React from "react";
import styles from "./aboutUs.module.css";
import HeroSection from "@/components/HeroSection";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      {/* Hero Section */}
      <HeroSection
        heading="About Us"
        paragraph="  Connecting Workers with Opportunities: Skillhill is revolutionizing the way skilled and unskilled construction workers connect with employers. By providing a seamless platform, we ensure that every worker, regardless of their skill level, has access to quality job opportunities. "
        imageUrl="https://digitallabourchowk.com/wp-content/uploads/2024/10/Untitled-design-3.png"
      />

      {/* Company Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <h2>Who We Are</h2>
          <p>
            Skillhill empowers businesses by simplifying the hiring of skilled
            and unskilled construction workers. We bridge the gap between
            laborers and employers, unlocking better job opportunities and
            long-term growth for both.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To connect construction workers and businesses seamlessly,
              creating opportunities for growth and prosperity in the
              construction industry.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted platform for empowering construction
              workers and businesses through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Join Skillhill Today</h2>
        <p>
          Whether you&rsquo;re a worker looking for opportunities or a business
          seeking skilled labor, Skillhill is your trusted partner.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
