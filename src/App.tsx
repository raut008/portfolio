import styles from "./App.module.scss";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Projects from "./Components/Projects";
import Timeline from "./Components/Timeline";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Introduction />
      <AboutMe />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
