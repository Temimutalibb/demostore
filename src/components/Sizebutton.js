export default function SizeButton({ children, onClick, style}){
    return(
       <button 
         onClick={onClick}
         style={style}
         >
            {children}
      </button>
    )
}