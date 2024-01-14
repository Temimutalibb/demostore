import { useState } from "react";
import { taskList as kidList } from "./Kids";
import { taskList as menList } from "./Men";
import { taskList as womenList } from "./Women";


export default function Handlecloth(){
   const [save, setSave] = useState([...menList,...womenList,...kidList]);

const divBody= {
    display:"flex",flexDirection:"column"  
}
const divKey= {
    padding:"20px", backgroundColor:"whiteSmoke", 
    margin:"10px", alignItems:"center",
    justifyItems:"center", justifyContent:"center",
    display:"flex", gap:"10px", height: "100px"
}
const imgStyle={
    width:"10px", height:"60px",flex: 1,objectFit: "contain"
}
const flexStyle={
    flex:1
}

    return(
        <>
        {save && save.length > 0 ? (
            <div style ={divBody}>

                {save?.map((task) => 
                    <div key={task.id}
                    style={divKey}>

                   <img src ={task.imgsrc}
                   style ={imgStyle}
                   alt ={task.name} />
            
                <div style ={flexStyle}>{task.name}</div>
                <div style ={flexStyle}>{task.price}</div>

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
        ) : (
            <p style ={{fontSize:"20px"}}> No save Item</p>
        )}

        </>
    )
}