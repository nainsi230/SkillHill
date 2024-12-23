import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection
        heading="Connecting Workers with Opportunities"
        paragraph="Skillhill empowers businesses by simplifying the hiring of skilled and unskilled construction workers. We bridge the gap between laborers and employers, unlocking better job opportunities and long-term growth for both."
        imageUrl="https://digitallabourchowk.com/wp-content/uploads/2024/10/Untitled-design-3.png"
      />
      <ContentSection
        heading="What is SkillHill?"
        para1="SkillHill is a revolutionary platform transforming how construction companies and contractors connect with daily wage workers. We offer a seamless solution for finding skilled, semi-skilled, and unskilled workers across India, making the hiring process faster, simpler, and more efficient. Whether you're looking for masons, carpenters, electricians, or general laborers, SkillHill provides instant access to a vast pool of workers who are ready to meet your project needs."
        para2="With over 150,000 workers in our network, SkillHill is committed to empowering both businesses and laborers. At SkillHill, we focus on delivering reliable and quality labor solutions that drive the success of construction businesses, large and small."
        imageUrl="/images/skillhill.jpg"
      />
      <section className="container">
        <div className={styles.start_section}>
          <p className={styles.section_text}>
            Every masterpiece begins with a solid foundation and expert
            craftsmanship.
          </p>
        </div>
      </section>
    </div>
  );
}
