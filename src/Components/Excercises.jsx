import React, { useEffect, useState } from "react";
import ExcerciseCard from "./ExcerciseCard";
import { excerciseOptions} from "../utils/fetchData";


const Excercises = ({ exercises, setExcercises, bodyPart }) => {
  // console.log("hhhhh",exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 4;

  const LastExercise = currentPage * exercisesPerPage;
  const FirstExercise = LastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(FirstExercise, LastExercise);

  const paginate = (e, val) => {
    setCurrentPage(val);

    window.scrollTo({ Top: 1800, behavior: "smooth" });
  };
  
  const fetchData = async (url , options) =>{
    
    try {
      
      const response = await fetch(url, options);
      if(response.ok){
        
        const dataval =await response.json();
        
        
        return dataval;
      }
      
      else{
        console.log(response);
        
      }
      
    } catch (error) {
      console.log(error)
      
    }
    
  }

  // console.log("ddd",bodyPart)
   
  useEffect(() => {
    const fetchExcerciseData = async () => {
      let excercisesData = [];

      if (bodyPart === 'all') {
        excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio`,excerciseOptions);
      } else {
        excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }
      setExcercises(excercisesData);
    };
    fetchExcerciseData();
  }, [bodyPart]);
    
    

//  console.log("hhh",currentExercises);
  return (
    <div className="mt-10 p-10 sm:mt-28" id="excercises">
      <div className="text-3xl font-semibold mb-12">Showing Results</div>

        
      <div className="flex flex-wrap justify-center gap-12 sm:gap-28">
        {currentExercises && currentExercises.map((exercise, index) => (
          <ExcerciseCard key={index} exercise={exercise} />
          // <p>{exercise.name}</p>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center items-center">
      
    </div> 

      <div className="mt-20 flex justify-center items-center">
        {exercises.length > 4 && (
          <div className="space-x-4">
            {/* Pagination Component */}
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => paginate(currentPage + 1)} // Navigate to next page
              disabled={
                currentPage === Math.ceil(exercises.length / exercisesPerPage)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Excercises;
