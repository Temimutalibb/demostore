import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "./Box";

export default function Women({handleClothChange}){
   /* for the scroll icon when over */
     const [scrollRight, setScrollRight]  = useState(false);
     const [scrollLeft, setScrollLeft]    = useState(false);
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
             }else{
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
        
        <div style= {{
            position: "relative",
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
             <div style={{color:"black",fontSize:"15 px",fontFamily:"fantasy",marginBottom:"10px"}}>Women</div>
             <div ref={elementRef} className= 'box'
             style ={{
                 whiteSpace: "nowrap",
                 overflowX: "scroll",
             }}>
      
          <Box clothName={"QUEEN NET"}      clothPrice={ 20.10}    srcName={require("../image/womenimage/fashion01.jpg")} onClothNameChange={handleClothChange} />
          <Box clothName={"CROPPED FLAP JACKET"}   clothPrice={ 59.50}   srcName={require("../image/womenimage/fashion02.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"TEXTURED PLAIN JACKET"}      clothPrice={ 40.00}   srcName={require("../image/womenimage/fashion03.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"CROPPED WOOL BLENDED CARDIGAN"}   clothPrice={ 20.00}   srcName={require("../image/womenimage/fashion04.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"SHORT TEXTURE JACKET"}    clothPrice={30.10}   srcName={require("../image/womenimage/fashion05.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"TEXTURED PLAIN JACKET"} clothPrice={ 18.00}   srcName={require("../image/womenimage/fashion06.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"NEAT CARAVEN"}        clothPrice={ 11.50}  srcName={require("../image/womenimage/fashion07.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"2ND SSL WALK "} clothPrice={ 39.25}  srcName={require("../image/womenimage/fashion08.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"ARAB WOOVEN"} clothPrice={ 5000.00} srcName={require("../image/womenimage/fashion09.jpg")} onClothNameChange={handleClothChange}/>
          
              </div>
              
        <div style ={{visibility: scrollRight ? 'visible' : 'hidden',
            border:" none",
            backgroundColor: "transparent",
            padding: "10px 20px",
            color:"black",
            fontSize: "50px",
            position: "absolute",
            top: "25%",
            right: 0
      }}>
         <FaChevronRight/>
        </div>
     
       <div style ={{visibility: scrollLeft ? 'visible' : 'hidden',
           border:" none",
           backgroundColor: "transparent",
           padding: "10px 20px",
           color:" black",
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
     
