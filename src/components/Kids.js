import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "./Box";

export let  taskList  = [];
export const dataList = () => taskList;


export default function Kids(){
   /* for the scroll icon when over */
     const [scrollRight, setScrollRight]  = useState(false);
     const [scrollLeft, setScrollLeft]    = useState(false);
     const [handlename, setHandlename]    = useState(taskList);
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

    const handleClothChange = (name, price, imgsrc)=>{
        setHandlename((prevState ) => 
            [...prevState,{id: `${nanoid()}`,"name":name, "price":price, "imgsrc": imgsrc}]
        );
        taskList = handlename;
        console.log(JSON.stringify(taskList));
    }
    
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
             <div style={{color:"black",fontSize:"15 px",fontFamily:"fantasy",marginBottom:"10px"}}>kids</div>
             <div ref={elementRef} className= 'box'
             style ={{
                 whiteSpace: "nowrap",
                 overflowX: "scroll",
             }}>
          <Box clothName={"HAT"}          clothPrice={ 5.10 }  srcName={require("../image/kidsimage/kid1.jpg")} onClothNameChange={handleClothChange} />
          <Box clothName={"KNEATTED CAP"} clothPrice={20.50}   srcName={require("../image/kidsimage/kid2.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"SNOW OUTFIT"}  clothPrice={ 40.00}  srcName={require("../image/kidsimage/kid3.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"ROUND HAT"}    clothPrice={ 7.00}   srcName={require("../image/kidsimage/kid4.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"HAT"}          clothPrice={ 10.00}  srcName={require("../image/kidsimage/kid5.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"VELVET"}       clothPrice={ 30.00}  srcName={require("../image/kidsimage/kid6.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"SEASON OUTFIT"} clothPrice={ 11.00} srcName={require("../image/kidsimage/kid7.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"KID FIT "}     clothPrice={ 39.00}  srcName={require("../image/kidsimage/kid8.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"2ND SSL WALK"} clothPrice={ 5000.00} srcName={require("../image/kidsimage/kid9.jpg")} onClothNameChange={handleClothChange}/>
          <Box clothName={"SNEAKERS"}     clothPrice={ 500.00} srcName={require("../image/kidsimage/kid10.jpg")} onClothNameChange={handleClothChange}/>
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
     
