import styles from "./Error404.module.scss";
import GoBack_Button from "../components/atoms/GoBack_Button";

const Error404 = () => {
  return (
    <>
      <GoBack_Button />

      <div className={styles.error404}>
        <h1>Error 404</h1>
        <h3>Page not found</h3>
      </div>
    </>
  );
};

export default Error404;
