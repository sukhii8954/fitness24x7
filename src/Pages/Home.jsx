import React, { useState } from "react";
import Herobaner from "../Components/Herobanner";
import SearchExcersis from "../Components/SearchExcercises";
import Excercises from "../Components/Excercises";


const Home = () => {
  const [exercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // console.log(bodyPart)
    //  console.log(exercises)
  return (
    <div>
      <Herobaner />
      <SearchExcersis
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Excercises 
       setExcercises={setExcercises}
       exercises={exercises}
       bodyPart ={bodyPart} 
        />
    </div>
  );
};

export default Home;
