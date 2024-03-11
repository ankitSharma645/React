/* styles from "./Item.module.css";

const Item = ({foodItems})=>{
    return  (

        <li  classNameName=  "list-group-item">

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
        classNameName={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
      >
        <span classNameName={styles["kg-span"]}>{foodItem}</span>
        <button
          classNameName={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    );
  };
  
  export default Item;