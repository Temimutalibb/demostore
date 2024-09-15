import React, { useEffect, useState } from 'react';

   function Whilst (){
    const [items, setItems] = useState([]);

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

    useEffect(() => {
       const localStorageItems = [];
       for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let value = JSON.parse(localStorage.getItem(key)); // Parse the value to an object
          localStorageItems.push({ key, value });
        }
        setItems(localStorageItems);
    }, []);

    const handleDelete = (key) =>{
        localStorage.removeItem(key);
        setItems(items.filter(item => item.key !== key));
    }

    const filteredItems = items.filter(item => item.value.status === "save");

    return (
    <>
    <div style ={divBody}>
      {filteredItems.map((item) => (
         <div key={item.key}  style={divKey}>
            <img src ={item.value.img} style ={imgStyle}
             alt ={item.value.clothname}
             />
            <div style ={flexStyle}>{item.valueclothname}</div>
            <div style ={flexStyle}>{item.value.clothName}</div>
           
            <button onClick={() =>handleDelete(item.key)}
            style ={{flex: 1}}>remove</button>
        </div>
        ))}
    </div>
    </>
    );
};

export default Whilst;
