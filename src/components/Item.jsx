import styles from "./Item.module.css";

const Item = ({ foodItem , handleBuyButton}) => {

// const handleBuyButtonClicked = (event) => {
//   console.log(event);
//   console.log(`${foodItem} item being bought`)}


  return ( 
  <div className="hello">
  <li className={`${styles["kg-item"]} list-group-item `}>
  <span className={styles['kg-span']}>{foodItem}</span>
  <button className={`${styles.button} btn btn-info`} 
  onClick={handleBuyButton
  }
  
   >Buy</button>
  </li>
  </div>


  )
}

export default Item;  