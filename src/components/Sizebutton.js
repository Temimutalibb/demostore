import { useState } from "react";
export default function SizeButton({ children, onClick, style}){
  const [translated, setTranslated] = useState(false);

  const buttonStyle= {
    transform: translated ? 'translate(0px, 6px)' : 'none',
    transition: 'transform 0.5s ease',
    flex: 1
 }

 const handleClick = (e) =>{
  setTimeout(() =>  setTranslated(false), 200)
  setTranslated(true); 
  onClick()
}
  return(
       <button 
         onClick={handleClick}
         style={buttonStyle}
         >
            {children}
      </button>
    )
}