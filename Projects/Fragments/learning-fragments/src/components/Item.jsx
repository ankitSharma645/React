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

const Item = ({ foodItems }) => {


    const HandleBuyButton = (event)=>{
        console.log(event);
        console.log(`${foodItems} being bought`);

    };
    return (

        <li className={`${styles["kg-item"]} list-group-item`} >

            <span className={styles["kg-span"]}> {foodItems}</span>
            <button
                className={`${styles.button} btn btn-info`}
                onClick={(event)=>   HandleBuyButton(event)}
            >
                Buy
            </button>

        </li>
    )

}
export default Item;