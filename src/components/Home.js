import React from 'react';
import Category from './Category';
import Foot from './Foot';
import Header from './Header';
import Kids from './Kids';
import Men from './Men';
import Trending from './Trending';
import Women from './Women';



function Home({handleClothChange, handleClothSave, bookMarkColor}) {
 
  return (
    <div>
      < div className = "container">
      <div className ="head"><Header/></div>
      <div className= "category"><Category/></div>
      <div className ="women"><Women handleClothChange={handleClothChange}/></div>
      <div className ="men"><Men     handleClothChange={handleClothChange} handleClothSave={handleClothSave} bookMarkColor={bookMarkColor}/></div>
      <div className = "trending"><Trending/></div>
      <div className = "kids"><Kids handleClothChange={handleClothChange}/></div>
     <div className = "foot"><Foot/></div>
    </div>

    </div>
  );
}


export default Home;