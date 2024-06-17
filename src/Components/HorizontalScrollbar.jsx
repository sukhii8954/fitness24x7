import React, { useState } from "react";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from "./BodyPart";
import "./HorizontalScrollbar.css";
// import Slider from "react-slick";
import ExcerciseCard from './ExcerciseCard';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart ,isBodyParts}) => {
  // console.log(data)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
   

    <div className="relative">
 
      

      <div  className="flex overflow-x-auto scrollbar-hidden  py-2">
     
      {data.map((item, index) => (
        <div
          className="flex gap-5 flex-shrink-0 mx-20"
          key={index}
          itemID={item.id || item}
          title={item.id || item}
        >
          <div className="">
           { isBodyParts ? <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
            : <ExcerciseCard exercise={item}/>}
          </div>
        </div>
      ))}
   
   
  </div>
     
    </div>
  );
};

export default HorizontalScrollbar;
