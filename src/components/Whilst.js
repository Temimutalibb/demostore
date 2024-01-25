export default function Whilst({whilstItems}){

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
     { whilstItems && whilstItems.length > 0 ? (
            <div style ={divBody}>
                {whilstItems?.map((task) => 
                    <div key={task.id}
                    style={divKey}>

                   <img src ={task.imgsrc}
                   style ={imgStyle}
                   alt ={task.name} />
            
                <div style ={flexStyle}>{task.name}</div>
                <div style ={flexStyle}>{task.price}</div>
       </div>
      )}
    </div>
        ) : (
            <p style ={{fontSize:"20px"}}> No save Item</p>
        )}
        
        </>
    )
}


