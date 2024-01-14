import { useState } from "react";
import { taskList } from "./Men";

function DemoTest(){
const [save, setSave] = useState(taskList);
  

 
      return(
    <>
    
    < div style ={{display:"flex",flexDirection:"column"}}>
      {save?.map((task) => 
      <div key={task.id}
      style={{padding: "20px",backgroundColor:"whiteSmoke", margin:"10px", alignItems:"center",
       justifyItems:"center",
       justifyContent:"center",
       display:"flex",
       gap:"10px",
       height: "100px"
       }}>  
        
        <img src ={task.imgsrc}
        style ={{width:"10px", height:"60px",flex: 1}}
         alt ={task.name} />

         <div style ={{flex:1}}>{ task.name} </div>
         <div style ={{flex:1}}>{ task.price}</div>


         
     <button
      style ={{flex: 1}}
      onClick={() => {
        setSave(
          save.filter(a => a.id !== task.id)
        )
      }}
      >remove</button>

        </div>
      )}
    
    </div>

    </>
      )
 }

 export default DemoTest


 