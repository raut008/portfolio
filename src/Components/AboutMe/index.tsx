import styles from "./index.module.scss";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles["about-me"]}>
      <h2 className={styles["about-me__heading"]}>About me.</h2>
      <p className={styles["about-me__text"]}>
        I specialize in frontend development, crafting fast, responsive, and
        user-friendly applications. Alongside this, I've been expanding into
        backend technologies and exploring large language models (LLMs), fueled
        by a curiosity to see how modern web systems and AI can work together.
        My goal is to grow into a well-rounded developer capable of building
        high-performance applications end-to-end, while leveraging AI to create
        smarter, more intuitive user experiences.
      </p>
    </section>
  );
};

export default AboutMe;
