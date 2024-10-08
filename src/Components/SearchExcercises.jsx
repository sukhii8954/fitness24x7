import React, { useEffect, useState } from 'react';
import {excerciseOptions} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExcercises = ({setExcercises, bodyPart,setBodyPart}) => {
  
  
  const [searchval, setSearchval] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
 
  // console.log(bodyPart)
    
  useEffect(() => {
     const fetchExcerciseData = async ()=> {
      const bodyPartsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,excerciseOptions);
        // const bodyPartsData = [
        //   "back",
        //   "cardio",
        //   "chest",
        //   "lower arms",
        //   "lower legs",
        //   "neck",
        //   "shoulders",
        //   "upper arms",
        //   "upper legs",
        //   "waist"
        // ]  
      // console.log(bodyPartsData);

      setBodyParts(bodyPartsData);
        
     }
  
      fetchExcerciseData();
  }, [])
  
  // console.log(bodyParts)
  
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
  
  const handleSearch= async ()=>{
    // console.log("sfs")
    if(searchval){
      const excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,excerciseOptions);
      // const excercisesData = [
      //   {
      //     "bodyPart": "waist",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/RH7nlJooMbvSMx",
      //     "id": "0001",
      //     "name": "3/4 sit-up",
      //     "target": "abs",
      //     "secondaryMuscles": [
      //       "hip flexors",
      //       "lower back"
      //     ],
      //     "instructions": [
      //       "Lie flat on your back with your knees bent and feet flat on the ground.",
      //       "Place your hands behind your head with your elbows pointing outwards.",
      //       "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
      //       "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      //       "Repeat for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "waist",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/jV-zexvvnoKKsA",
      //     "id": "0002",
      //     "name": "45° side bend",
      //     "target": "abs",
      //     "secondaryMuscles": [
      //       "obliques"
      //     ],
      //     "instructions": [
      //       "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
      //       "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
      //       "Pause for a moment at the bottom, then slowly return to the starting position.",
      //       "Repeat on the other side.",
      //       "Continue alternating sides for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "waist",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/TZg2IdHH05YAnG",
      //     "id": "0003",
      //     "name": "air bike",
      //     "target": "abs",
      //     "secondaryMuscles": [
      //       "hip flexors"
      //     ],
      //     "instructions": [
      //       "Lie flat on your back with your hands placed behind your head.",
      //       "Lift your legs off the ground and bend your knees at a 90-degree angle.",
      //       "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
      //       "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
      //       "Continue alternating sides in a pedaling motion for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "upper legs",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/HUULkRLRPtbl6V",
      //     "id": "1512",
      //     "name": "all fours squad stretch",
      //     "target": "quads",
      //     "secondaryMuscles": [
      //       "hamstrings",
      //       "glutes"
      //     ],
      //     "instructions": [
      //       "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
      //       "Extend one leg straight back, keeping your knee bent and your foot flexed.",
      //       "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
      //       "Hold this position for 20-30 seconds.",
      //       "Switch legs and repeat the stretch on the other side."
      //     ]
      //   },
      //   {
      //     "bodyPart": "waist",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/iXC6-xyVbTPk2Y",
      //     "id": "0006",
      //     "name": "alternate heel touchers",
      //     "target": "abs",
      //     "secondaryMuscles": [
      //       "obliques"
      //     ],
      //     "instructions": [
      //       "Lie flat on your back with your knees bent and feet flat on the ground.",
      //       "Extend your arms straight out to the sides, parallel to the ground.",
      //       "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
      //       "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
      //       "Continue alternating sides for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "back",
      //     "equipment": "cable",
      //     "gifUrl": "https://v2.exercisedb.io/image/6azprmRGbPHyp-",
      //     "id": "0007",
      //     "name": "alternate lateral pulldown",
      //     "target": "lats",
      //     "secondaryMuscles": [
      //       "biceps",
      //       "rhomboids"
      //     ],
      //     "instructions": [
      //       "Sit on the cable machine with your back straight and feet flat on the ground.",
      //       "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      //       "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      //       "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      //       "Repeat for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "lower legs",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/YaXKRkpAKDhixh",
      //     "id": "1368",
      //     "name": "ankle circles",
      //     "target": "calves",
      //     "secondaryMuscles": [
      //       "ankle stabilizers"
      //     ],
      //     "instructions": [
      //       "Sit on the ground with your legs extended in front of you.",
      //       "Lift one leg off the ground and rotate your ankle in a circular motion.",
      //       "Perform the desired number of circles in one direction, then switch to the other direction.",
      //       "Repeat with the other leg."
      //     ]
      //   },
      //   {
      //     "bodyPart": "back",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/6-N5dUpctYf345",
      //     "id": "3293",
      //     "name": "archer pull up",
      //     "target": "lats",
      //     "secondaryMuscles": [
      //       "biceps",
      //       "forearms"
      //     ],
      //     "instructions": [
      //       "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
      //       "Engage your core and pull your shoulder blades down and back.",
      //       "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
      //       "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
      //       "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
      //       "Alternate sides with each repetition."
      //     ]
      //   },
      //   {
      //     "bodyPart": "chest",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/Uvn9ZBfj5I1Dpj",
      //     "id": "3294",
      //     "name": "archer push up",
      //     "target": "pectorals",
      //     "secondaryMuscles": [
      //       "triceps",
      //       "shoulders",
      //       "core"
      //     ],
      //     "instructions": [
      //       "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      //       "Extend one arm straight out to the side, parallel to the ground.",
      //       "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      //       "Push back up to the starting position.",
      //       "Repeat on the other side, extending the opposite arm out to the side.",
      //       "Continue alternating sides for the desired number of repetitions."
      //     ]
      //   },
      //   {
      //     "bodyPart": "waist",
      //     "equipment": "body weight",
      //     "gifUrl": "https://v2.exercisedb.io/image/aZvpTygjRIvIXG",
      //     "id": "2355",
      //     "name": "arm slingers hanging bent knee legs",
      //     "target": "abs",
      //     "secondaryMuscles": [
      //       "shoulders",
      //       "back"
      //     ],
      //     "instructions": [
      //       "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
      //       "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
      //       "Slowly lower your legs back down to the starting position.",
      //       "Repeat for the desired number of repetitions."
      //     ]
      //   }
      // ]

      //  const handleSearch =async () =>{
// 
         if(excercisesData?.length>0){
           const searchedExcercises = excercisesData?.filter(
           (excercise)=>  excercise.name.toLowerCase().includes(searchval)
           || excercise.target.toLowerCase().includes(searchval)
           || excercise.equipment.toLowerCase().includes(searchval)
           || excercise.bodyPart.toLowerCase().includes(searchval)
   
         );
   
        //  console.log(searchedExcercises);
   
         setSearchval('');
         setExcercises(searchedExcercises);
         }
      //  }

    }
    
  }
  
  return (  
    
    <div className=' relative flex flex-col text-center justify-center my-80'>
     
      <h1 className='text-3xl font-bold sm:text-5xl'>
        Awesome Excercises You <br/> Should Know
      </h1>
      

     <div className='p-5 mx-10 flex my-12  gap-2'>
     <input type="text" 
      value={searchval}
      onChange={(e) => setSearchval(e.target.value.toLowerCase())}
      placeholder='Search Excercises'
      className=' border mx-auto w-full hover:border px-4 font-bold py-2 rounded hover:border-red-500'/>
      <button onClick={handleSearch} className='mx-auto bg-[#FF2625] w-32 font-medium hover:shadow-[#FF2625] hover:shadow-sm text-white px-4 py-2 rounded  focus:ring focus:border-red-500'>
        Search
      </button>

     </div>
      
     <div className='w-full p-10 '> 
           <HorizontalScrollbar data ={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
     </div>
    </div>

  )
}

export default SearchExcercises
     