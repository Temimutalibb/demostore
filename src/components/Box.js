import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import styles from './box-style.module.css';


function Box({ 
              clothName, clothPrice, onClothNameChange , onClothSave,
              srcName, altName ="image", bookMarkColor})
            {
    
    const[hidden , setHidden] = useState(true);
    
   
    function DisplayPrice(){
   
        return(
           <>
               <div style={{
                   position:"absolute",
                   width:"100%",
                   height:"100px",
                   bottom:100,
                   visibility:hidden ? 'hidden' : 'block'
                }}>
                   <div style={{
                       display: "flex",
                       alignItems:"center", 
                       flexWrap:"wrap",
                       fontSize: '11px',
                       gap: 5
                    }}>
  
                       <button onClick={()=> {onClothNameChange(clothName, clothPrice, srcName)}}
                       style={{flex: 1,}}>EU XS/ US XS</button> 

                       <button onClick={()=> {onClothNameChange(clothName, clothPrice, srcName)}}
                       style={{flex: 1, }}>EU M/US M
                       </button>

                       <button onClick={()=> {onClothNameChange(clothName, clothPrice, srcName)}}
                       style={{flex: 1,}}>EU S/US S</button>

                       <button onClick={()=> {onClothNameChange(clothName, clothPrice, srcName)}}
                       style={{flex: 1,}}>EU L/ US L</button>

                       <button onClick={()=> {onClothNameChange(clothName, clothPrice, srcName)}}
                       style={{flex: 1, }}>EU XL/US L</button> 
                   </div> 
                </div>
            </>
        ) 
  
    }

    function OnClick(){
        if(hidden === true){
            setHidden(false)
        }else{ 
            setHidden(true)
        }
    }

     
    const bookMarkClick = (e) =>{
        if(bookMarkColor){
            e.target.style.color = "grey"
        }else{
            e.target.style.color = "black"
        }
    }
     
    return (
        <>
            <div className="bodyclass"
            style={{
              width: "250px", height: "350px"
            }}>
                <div className={styles.image}>
                    <img src = {srcName}  alt= {altName}
                    style = {{
                        width : "250px", height: "300px",borderRadius: "10px"
                    }}/>
                    <DisplayPrice/>
                    <div className = {styles.icon}
                       onClick={OnClick}>
                           +  
                   </div>
                </div>

                <div className = {styles.priceclass}>
                    <div className={styles.clothname}>
                       {clothName} <br/>
                       {clothPrice}
                   </div>
         
                  <div className = {styles.whilst}>
                      <FaBookmark
                          title="save"
                          onClick={(e)=>{onClothSave(clothName,clothPrice,srcName); bookMarkClick(e)}}
                     />
                  </div>
               </div> 
            </div>
        </>
    );
         
};

export default Box;





