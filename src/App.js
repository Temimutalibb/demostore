import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Home from './components/Home';
import LoginPage from "./components/LoginPage";
import Whilst from "./components/Whilst";


function App() {
  
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="loginpage" element={<LoginPage/>} />
        <Route path="whilst"  element={<Whilst/>} />
        <Route path="cart"  element={<Cart/>} />
      </Routes>
    </Router> 
   
   </>
  );
}


export default App;


