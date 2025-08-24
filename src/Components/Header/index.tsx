import { Icon } from "../Icons";
import styles from "./index.module.scss";

const Header = () => {
  const handleMenuClick = () => {
    alert("Menu clicked!");
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["header__title"]}>Anand Codes</div>
      <div className={styles["header__menu"]} onClick={handleMenuClick}>
        <Icon type="menu" />
      </div>
      <div className={styles["header__nav"]}>
        <a href="#about" className={styles["header__nav-link"]}>
          About
        </a>
        <a href="#dashboard" className={styles["header__nav-link"]}>
          Projects
        </a>
        <a
          href="#contact"
          className={`${styles["header__nav-link"]} ${styles["header__nav-link--3d"]}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
