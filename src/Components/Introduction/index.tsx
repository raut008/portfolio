import FaceDirection from "../FaceDirection";
import { Icon } from "../Icons";
import styles from "./index.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction} aria-label="Introduction">
      <div className={styles["introduction__content"]}>
        <p className={styles["introduction__salutation"]}>Hi there 👋, I'm</p>

        <h1 className={styles["introduction__name"]}>Anand Raut</h1>

        <div className={styles["introduction__details"]}>
          <p className={styles["introduction__age"]}>27 · he/him</p>
          <p className={styles["introduction__description"]}>
            Passionate about building <strong>high-performance</strong> and{" "}
            <strong>scalable</strong> web applications that deliver great user
            experiences.
          </p>
        </div>

        <div className={styles["introduction__cta"]}>
          <button className={styles["introduction__cta-button"]}>Resume</button>
          <Icon type="linkedin" />
          <Icon type="gmail" />
          <Icon type="github" />
        </div>
      </div>

      <FaceDirection />
    </section>
  );
};

export default Introduction;
