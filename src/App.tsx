import styles from "./App.module.scss";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Introduction />
    </div>
  );
}

export default App;
