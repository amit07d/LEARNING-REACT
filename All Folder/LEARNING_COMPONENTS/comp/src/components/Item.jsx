
import styles from "./Item.module.css";

const Item = ({foodItem, brought ,buyItem}) => {
  
  return (
    <li className={`${styles["kg-item"]} list-group-item ${brought && 'active'}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        //onClick={() => console.log(`${foodItem} being brought`)}
        onClick={buyItem}
      >
        Buy
      </button>
    </li>
  );even
};

export default Item;
