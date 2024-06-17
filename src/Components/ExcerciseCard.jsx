import React from 'react'
import { Link } from 'react-router-dom';

const ExcerciseCard = ({exercise}) => {
    console.log(exercise)
  return (
    <Link className='' to={`/exercise/${exercise?.id}`}>
         <img className='border-t-4 rounded-md border-red-700' src={exercise?.gifUrl} alt={exercise?.name} loading="lazy"/>
         <div className='flex flex-row'>
             <button className='mx-5 px-4 font-bold  py-2 text-white bg-red-400 text-[18px] rounded-full capitalize' >
                {exercise.bodyPart}
             </button>
             <button className=' text-white font-bold px-4 py-2 bg-yellow-300 text-[18px] rounded-full capitalize' >
                {exercise.target}
             </button>
         </div> 
         
             <div className='mx-5 text-black font-bold mt-3 pb-3 capitalize text-xl'>
            {exercise.name}
          </div>
          

    </Link>
  )
}

export default ExcerciseCard