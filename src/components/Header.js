import { FaBars, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

import styles from './header-style.module.css';




function Header(){
    return(
    <header className={styles.header}>
        
        <img src= "logo192.png"
         className={styles.logo} 
         alt="logo" />
        
        <input className={styles.search}
         type = "search"
         title = "search"
         placeholder='search' 
         />
         <Link to="/loginpage" className={styles.login}>
         <FaUser/>
        </Link>

        <Link to="/whilst" className={styles.whilst}>
         <FaHeart/> 
        </Link>

        <Link to="/cart" className={styles.basket}>
         <FaShoppingCart/> 
         <span style =
         {{fontSize:"15px",color:"red",zIndex:1,position:"absolute"}}>
          
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