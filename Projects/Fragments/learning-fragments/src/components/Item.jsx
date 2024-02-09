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

const Item = ({foodItems})=>{
    return  (

        <li  className= {`${styles ["kg-item"]}`} >

            <span className={styles["kg-span"]}> {foodItems}</span>
        
    
      </li>
    )
   
}
export default Item;