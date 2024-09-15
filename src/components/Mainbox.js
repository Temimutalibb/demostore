import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MainBox ({children}){
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
      <div style= {{position: "relative"}}
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
              {/*to nest the box*/}
              {children}

            </div>
            <div style ={{visibility: scrollRight ? 'visible' : 'hidden',
            border:" none",  backgroundColor: "transparent",  padding: "10px 20px",
            color:"black", fontSize: "50px", position: "absolute", top: "25%", right: 0
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
   )
}