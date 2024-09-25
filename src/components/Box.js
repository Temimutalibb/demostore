import { nanoid } from "nanoid";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import styles from './box-style.module.css';
import SizeButton from "./Sizebutton";


function Box({clothName, clothPrice, srcName, altName ="image"}){
   const[sizeButtonhidden , setSizeButtonhidden] = useState(false)
   const[bookmarkColor, setBookmarkColor] = useState(true);

    
    const handleClick = (e) =>{
      let task = {id:`${nanoid()}`, status: "cart", clothname:clothName, 
         clothName:clothPrice, img: srcName
      }
      localStorage.setItem( `${nanoid()}`,JSON.stringify(task))
    }
     
    const handleClothsave = () =>{
        if(bookmarkColor){
            setBookmarkColor(!bookmarkColor)
            let task = {id:`${nanoid()}`, status: "save", clothname:clothName, 
               clothName:clothPrice, img: srcName
            }
            localStorage.setItem(`${nanoid()}`,JSON.stringify(task))
        }
        if(!bookmarkColor){
           setBookmarkColor(!bookmarkColor)
           localStorage.removeItem(clothName)
        }
     }
     
    return(
       <>
       {/* ui for each card*/}
       <div className="bodyclass" style={{width: "250px", height: "350px"}}>
          <div className={styles.image}>
             <img src = {srcName} alt= {altName}
                 style = {{ width : "250px", height: "300px",borderRadius: "10px" }}
             />
             <div  style={{position:"absolute",bottom: 100, width:"100%",height:"100px"}}>
                <div  style={{display: "flex", alignItems:"center",flexWrap:"wrap",fontSize:'11px', gap: 5}}>
                    {/*the cloth sizes button*/}
                    {sizeButtonhidden   && (<>
                      <SizeButton onClick={ handleClick} style = {{flex:1}}>EU M/US M </SizeButton>
                      <SizeButton onClick={ handleClick} style = {{flex: 1}}> EU M/US M </SizeButton>
                      <SizeButton onClick={ handleClick} style = {{flex: 1}}> EU M/US M</SizeButton>
                      <SizeButton onClick={ handleClick} style = {{flex: 1}}> EU M/US M </SizeButton>
                    </>) 
                    }
                </div>
            </div>
            <div className = {styles.icon}
               onClick={()=> setSizeButtonhidden(!sizeButtonhidden)}>
                    +  
            </div>
          </div>
          <div className = {styles.priceclass}>
             <div className={styles.clothname}>
                {clothName} <br/>
                {clothPrice}
            </div>
            <div className = {styles.whilst}>
               <FaBookmark style= {bookmarkColor? {color: "cadetblue"} : {color: "black" }}
                   title="save"
                   onClick={handleClothsave}
               />
            </div>
            </div> 
        </div>
        </>
     );
}
 

export default Box;





