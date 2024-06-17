import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import "./HorizontalScrollbar.css";
const SimilarExercises = ({equipmentExercises ,targetMuscleExercises }) => {
  return (
    <div className='md:mt-[100px] mt-0'>
  <span className='text-4xl mx-5'>
    Exercises that target the same muscle group
  </span>
  <div className='flex  overflow-x-auto py-2 mt-5 scrollbar-hidden flex-wrap'> {/* Add flex-wrap here */}
    {targetMuscleExercises.length ? (
      <HorizontalScrollbar data={targetMuscleExercises} />
    ) : (
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        {/* ... svg content ... */}
      </svg>
    )}
    
  </div>

  <span className='text-4xl mx-5'>
    Exercises that uses the same equipment
  </span>
  <div className='flex  overflow-x-auto py-2 mt-5  flex-wrap scrollbar-hidden'> {/* Add flex-wrap here */}
    {equipmentExercises.length ? (
      <HorizontalScrollbar data={equipmentExercises} />
    ) : (
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        {/* ... svg content ... */}
      </svg>
    )}
    
  </div>
</div>
  )
}

export default SimilarExercises