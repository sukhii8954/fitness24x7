import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {excerciseOptions, youtubeOptions} from '../utils/fetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';


const ExerciseDetails = () => {
 
  const fetchData = async (url , options) =>{
    
    try{
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

   const [exerciseDetail, setExerciseDetail] = useState({});
   const { id } =useParams();   // gives access to particular exercise no
    
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const  fetchExercisesData =async ()=> {
          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';
          const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
           
          setExerciseDetail(exerciseDetailData);

          const exerciseVideoData =await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
           
          setExerciseVideos(exerciseVideoData.contents);

          const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,excerciseOptions);
          const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,excerciseOptions);


           settargetMuscleExercises(targetMuscleExercisesData);
           setEquipmentExercises(equipmentExercisesData);
    }
     fetchExercisesData();
  },[id] );
  




  return (
    
   <div>
    
     <Detail exerciseDetail= {exerciseDetail}/>
     <ExerciseVideos exerciseVideos ={exerciseVideos} name={exerciseDetail.name}/>
     <SimilarExercises targetMuscleExercises={targetMuscleExercises}
     equipmentExercises ={equipmentExercises} />
   </div>
   
  )
}

export default ExerciseDetails

