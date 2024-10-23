import styles from "./Display.module.css";

const Display = ({ displayValue, onChange }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly 
   
    />
  );
}

export default Display;
