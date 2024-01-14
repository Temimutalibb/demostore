import trend1 from '../image/trendimage/trend1.jpg';
import trend10 from '../image/trendimage/trend10.jpg';
import trend11 from '../image/trendimage/trend11.jpg';
import trend12 from '../image/trendimage/trend12.jpg';
import trend13 from '../image/trendimage/trend13.jpg';
import trend14 from '../image/trendimage/trend14.jpg';
import trend2 from '../image/trendimage/trend2.jpg';
import trend9 from '../image/trendimage/trend9.jpg';

function Box({srcName, altName}){
   
  return(
   
   <>
    <img style= {{flex:'1',
         height:"200px",
         backgroundColor:"blue",
         margin:"5px",
         minWidth:"20%",
         borderRadius: "15px"}}
        src = {srcName}
        alt = {altName}
         />
    
  </>
  )

}

 export default function Trending(){
    
    return(
       <>
   <div style={{color:"black",fontSize:"15 px",fontFamily:"fantasy",marginTop:"20px"}}>Trending</div>
   
   <div style={{display:"flex",width:"95%",flexWrap:"wrap", justifyContent:"center", alignItems:"center",margin:"15px",overflow:"hidden"}}>
   <Box srcName={trend9} altName={"treningImage"}/>
   <Box srcName={trend10} altName={"treningImage"}/>
   <Box srcName={trend11} altName={"treningImage"}/>
   <Box srcName={trend12} altName={"treningImage"}/>
   <Box srcName={trend13} altName={"treningImage"}/>
   <Box srcName={trend14} altName={"treningImage"}/>
   <Box srcName={trend1} altName={"treningImage"}/>
   <Box srcName={trend2} altName={"treningImage"}/>
   
   
   </div>
     </>
   
    );
    
}