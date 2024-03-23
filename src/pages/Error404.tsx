import { useNavigate } from "react-router-dom";

import styles from "./Error404.module.scss";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.goBack} onClick={() => navigate(-1)}>
        Go back
      </button>

      <div className={styles.error404}>
        <h1>Error 404</h1>
        <h3>Page not found</h3>
      </div>
    </>
  );
};

export default Error404;
