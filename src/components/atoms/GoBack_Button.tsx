import { useNavigate } from "react-router-dom";

import styles from "./GoBack_Button.module.scss";

const GoBack_Button = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.goBack} onClick={() => navigate(-1)}>
      Go back
    </button>
  );
};

export default GoBack_Button;
