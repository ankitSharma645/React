/* styles from "./Item.module.css";

const Item = ({foodItems})=>{
    return  (

        <li  className=  "list-group-item">

            <span> {foodItems}</span>
        
    
      </li>
    )
   
}
export default Item;
*/
import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
    return (
      <li
        className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
      >
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    );
  };
  
  export default Item;