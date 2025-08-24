import styles from "./App.module.scss";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Introduction />
      <AboutMe />
    </div>
  );
}

export default App;
