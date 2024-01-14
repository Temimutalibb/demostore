import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import blazer from '../image/blazer.png';
import cardigan from '../image/cardigan.jpg';
import coat from '../image/coat.png';
import jacket from '../image/jacket.png';
import jeans from '../image/jeans.jpg';
import jumpsuit from '../image/jumpsuit.jpg';
import kneatshirt from '../image/kneatshirt.png';
import shoes from '../image/shoes.jpg';
import suits from '../image/suit.png';
import sweatshirt from '../image/sweatshirt.jpg';
import tshirt from '../image/tshirt.jpg';


function Box({srcname, name}){
    return(
         <>
        <div style={{
            display: "inline-block",
            backgroundColor:"transparent",
            marginRight:"50px"
        }}>

           <div style={{
               display: "flex",
               flexDirection: "column",
               alignItems:"center",
               marginBottom: '5px'
           }}>

                <img  style={{
                    height:"100px", 
                    width:"100px"}}
                    src={srcname} 
                    alt="description"/>

                <p style={{
                    color:"black", 
                    fontSize:"15px",
                    fontStyle:"oblique"
                }}> {name} 
                </p>
            </div>
       </div>
       </>
  ) 
  
}

export default function Category(){
   /* for the scroll icon when over */
  const [scrollRight, setScrollRight] = useState(false);
  const [scrollLeft, setScrollLeft]   = useState(false);
  
  const elementRef = useRef(null);
  
  useEffect(() => {
      const element = elementRef.current;
    
      const handleScroll = () => {
          const isAtEnd = 
          element.scrollLeft +
          element.clientWidth >=
          element.scrollWidth -1;
          
          if(isAtEnd){
              setScrollRight(false); 
              setScrollLeft(true);
          }else if(element.scrollLeft === 0){
              setScrollLeft(false)
          }
          else{
              setScrollRight(true); 
              setScrollLeft(true);
          }
        };
    
      if(element) {
          element.addEventListener('scroll', handleScroll);
          
          return () => {
              element.removeEventListener('scroll', handleScroll);
          };
      }
  },[]);

     return(
         <div style={{
             position: "relative"
          }}
             onMouseOver={()=>{
                 setScrollRight(true)
                 setScrollLeft(true)
             }}
             onMouseOut={()=>{
                 setScrollRight(false)
                 setScrollLeft(false)
             }}>

           {/* class name box*/}
            <div style={{
                color:"black",
                fontSize:"15 px",
                fontFamily:"fantasy",
                marginBottom:"10px"
            }}> Categories</div>

           <div ref={elementRef} className= 'box'
           style ={{
               whiteSpace: "nowrap",
               overflowX: "scroll",
           }}>
      
               <Box srcname={blazer} name={"blazer"}/>
               <Box srcname={cardigan} name={"cardigan"}/>
               <Box srcname={coat} name={"coat"}/>
               <Box srcname={jacket} name={"jacket"}/>
               <Box srcname={jeans} name={"jeans"}/>
               <Box srcname={jumpsuit} name={"jumpsuit"}/>
               <Box srcname={kneatshirt} name={"kneatshirt"}/>
               <Box srcname={shoes} name={"shoes"}/>
               <Box srcname={suits} name={"suits"}/>
               <Box srcname={sweatshirt} name={"sweatshirt"}/>
               <Box srcname={tshirt} name={"tshirt"}/>
           </div>

             <div style={{
                  visibility: scrollRight ? 'visible' : 'hidden',
                  border:" none",
                  backgroundColor: "transparent",
                  padding: "10px 20px",
                  color:" #3333336c",
                  fontSize: "50px",
                  position: "absolute",
                  top: "25%",
                  right: 0
             }}>
                <FaChevronRight/>
             </div>
     
           <div style={{
                visibility: scrollLeft ? 'visible' : 'hidden',
                border:" none",
                backgroundColor: "transparent",
                padding: "10px 20px",
                color:" #3333336c",
                fontSize: "50px",
                position: "absolute",
                top: "25%",
                left: 0
      
          }}>
             <FaChevronLeft/>
          </div>
        </div>
    );
  
}
     
