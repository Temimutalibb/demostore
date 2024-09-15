import React from 'react';
import Category from './Category';
import Foot from './Foot';
import Header from './Header';
import Kids from './Kids';
import Men from './Men';
import Trending from './Trending';
import Women from './Women';



function Home() {
 
  return (
    <div>
      < div className = "container">
      <div className ="head"><Header/></div>
      <div className= "category"><Category/></div>
      <div className ="women"><Women/></div>
      <div className ="men"><Men/></div>
      <div className = "trending"><Trending/></div>
      <div className = "kids"><Kids/></div>
     <div className = "foot"><Foot/></div>
    </div>
 </div>
  );
}


export default Home;