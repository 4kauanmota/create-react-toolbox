import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>

      <span>
        <Link to="*">Error 404 page</Link>
      </span>
    </div>
  );
};

export default Home;
