import { arr } from "../../data/ArbitraryList.js";
import styles from "./FruitList.module.scss";

function List() {
  return (
    <ul className={styles.list} >
      {arr.map((val, ind) => <li key = {ind}>{val}</li>)}
    </ul>
  )
}

export default List