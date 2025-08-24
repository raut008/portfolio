import styles from "./App.module.scss";
import FaceDirection from "./Components/FaceDirection";
import Header from "./Components/Header";
function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <FaceDirection />
    </div>
  );
}

export default App;
