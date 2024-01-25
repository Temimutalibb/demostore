import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "./Box";

 export let  taskList  = [];
 export const dataList = () => taskList;

export default function Men({handleClothChange,  handleClothSave, bookMarkColor}){
   /* for the scroll icon when over */
     const [scrollRight, setScrollRight]  = useState(false);
     const [scrollLeft, setScrollLeft]    = useState(false)
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
             <div style={{color:"black",fontSize:"15 px",fontFamily:"fantasy",marginBottom:"10px"}}>Men</div>
             <div ref={elementRef} className= 'box'
             style ={{
                 whiteSpace: "nowrap",
                 overflowX: "scroll",
             }}>
      
          <Box clothName={"flat cap"}      clothPrice={ 5.10}    srcName={require("../image/menimage/man1.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"head warmer"}   clothPrice={ 40.20}   srcName={require("../image/menimage/man2.jpg")} onClothNameChange={handleClothChange} onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"snow cap"}      clothPrice={ 90.00}   srcName={require("../image/menimage/man3.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"head warmer"}   clothPrice={ 30.00}   srcName={require("../image/menimage/man4.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"bucket cap"}    clothPrice={200.10}   srcName={require("../image/menimage/man5.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"office outfit"} clothPrice={ 70.00}   srcName={require("../image/menimage/man6.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"jacket"}        clothPrice={ 250.50}  srcName={require("../image/menimage/man7.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"leather jacket"} clothPrice={ 20.25}  srcName={require("../image/menimage/man8.jpg")} onClothNameChange={handleClothChange}    onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"double pocket shirt"} clothPrice={ 20.00} srcName={require("../image/menimage/man9.jpg")} onClothNameChange={handleClothChange}  onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>
          <Box clothName={"Ray glasses"}    clothPrice={ 1.00}   srcName={require("../image/menimage/man10.jpg")} onClothNameChange={handleClothChange}   onClothSave={handleClothSave} bookMarkColor={bookMarkColor}/> 
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
     
