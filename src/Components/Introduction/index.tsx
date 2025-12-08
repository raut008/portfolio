import FaceDirection from "../FaceDirection";
import { Icon } from "../Icons";
import styles from "./index.module.scss";

const Introduction = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/anand-raut-1212761b2/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/raut008", "_blank");
  };

  const handleGmail = () => {
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent(
      "Hi, I'd love to connect with you to build a website or collaborate on something exciting!"
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=anandrautwebdev@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };
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
          <Icon type="linkedin" onClick={handleLinkedIn} />
          <Icon type="gmail" onClick={handleGmail} />
          <Icon type="github" onClick={handleGitHub} />
        </div>
      </div>

      <FaceDirection />
    </section>
  );
};

export default Introduction;
