import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>

      <span>
        <a href="/anything">Error 404 page</a>
      </span>
    </div>
  );
};

export default Home;
