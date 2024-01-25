import { nanoid } from "nanoid";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Home from './components/Home';
import LoginPage from "./components/LoginPage";
import Whilst from "./components/Whilst";


function App() {
  
  const[cartList, setCartList] = useState([]);
  const[whilstList, setWhilstList] = useState([]);
  const[whilstClick, setWhilstclick]     = useState(true);
  const[whilstTask, setWhilstTask]  = useState([]);
  const[bookMarkColor, setBookMarkColor] = useState(true)
  
  
  const handleClothChange = (name, price, imgsrc)=>{
     let task ={id: `${nanoid()}`,"name":name, "price":price, "imgsrc": imgsrc}
     setCartList(prev => [...prev, task])
     }
  
     const handleDelete = (itemToRemove) =>{
      const  updateCart = cartList.filter((item)=> item.id !== itemToRemove);
      setCartList(updateCart)
     }
     
      

     const handleClothSave = (name, price, imgsrc)=>{
      if(whilstClick){
      const taskList = {id: `${nanoid()}`,"name":name, "price":price, "imgsrc": imgsrc}
       setWhilstTask(taskList)
       setWhilstList(prev => [...prev,taskList]);
       setBookMarkColor(!bookMarkColor)
       setWhilstclick(false)
      
       
      }else{
      const update = whilstList.filter(lists => lists.id !== whilstTask.id)
      setWhilstList(update)
      setBookMarkColor(whilstClick)
      setBookMarkColor(!bookMarkColor)
      setWhilstclick(true)
    
      
      
     }
     console.log(JSON.stringify(whilstList))
      }
      
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home handleClothChange={handleClothChange} handleClothSave={handleClothSave} bookMarkColor={bookMarkColor}/>}/>
        <Route path="loginpage" element={<LoginPage/>} />
        <Route path="whilst"  element={<Whilst whilstItems={whilstList}/>} />
        <Route path="cart"  element={<Cart cartitems={cartList} handleDelete={handleDelete}/>} />
      </Routes>
    </Router> 
   
   </>
  );
}


export default App;


