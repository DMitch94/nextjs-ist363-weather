import styles from "./Col.module.scss";

const Col = ({ children }) => {
  return <div className={styles.col}>{children}</div>;
};
export default Col;
