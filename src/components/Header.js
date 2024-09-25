import { useEffect, useState } from "react";
import { FaBars, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from './header-style.module.css';

function Header(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const localStorageItems = [];
        for (let i = 0; i < localStorage.length; i++) {
           let key = localStorage.key(i);
           let value = JSON.parse(localStorage.getItem(key)); // Parse the value to an object
           localStorageItems.push({ key, value });
         }
         setItems(localStorageItems);
     }, []);  
     
     useEffect(() => {

        window.addEventListener("storage", () => {
            // When local storage changes, dump the list to
            // the console.
            console.log("hffggfggfghfhfhhfhfhfh");
          });
     })
     
 
     const filteredItems = items.filter(item => item.value.status === "cart");
     
    return(
    <header className={styles.header}>
        
        <img src= "logo192.png"
         className={styles.logo} 
         alt="logo" />
        
        <input className={styles.search}
         type = "search"
         title = "search"
         placeholder='search' z
         />
         <Link to="/loginpage" className={styles.login}>
         <FaUser style={{color:"rgb(0, 153, 255)"}}/>
        </Link>

        <Link to="/whilst" className={styles.whilst}>
         <FaHeart  style={{color:"rgb(0, 153, 255)"}}/> 
        </Link>

        <Link to="/cart" className={styles.basket} style={{position:"relative"}}>
         <FaShoppingCart  style={{color:"rgb(0, 153, 255)"}}/> 
         <span style =
         {{fontSize:"50px",color:"red",zIndex:1,position:"absolute",left:"25px",top:"-50px"}}>
          {filteredItems.length > 0 ? <div key={1}>.</div> :<div key={2}>" "</div>} 
         </span>
         
        </Link>

        
        <FaBars className ={styles.menu}/>
        
        <div className ={styles.view_all}>View All</div>
        <div className ={styles.puffers}>Puffers</div>
        <div className ={styles.tailor}>Tailor</div>
    </header>
    ); 
}

export default Header;