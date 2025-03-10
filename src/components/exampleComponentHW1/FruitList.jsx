import { arr } from "../../data/ArbitraryList.jsx";
import styles from "/src/components/exampleComponentHW1/FruitList.module.scss";

function List() {
  return (
    <ul className={styles.list} >
      {arr.map((val) => <li>{val}</li>)}
    </ul>
  )
}

export default List