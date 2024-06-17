import React from 'react'

const ExerciseVideos = ({exerciseVideos,name}) => {
     
  console.log(exerciseVideos);
   if(!exerciseVideos.length) return 'loading...';

  return (
    <div className='mt-5 sm:mt-48 p-5 '>
         <span className='text-3xl font-semibold capitalize mb-7'>
          watch  <span className='text-[#ff2625]'>{name}</span>  exercise videos
         </span>
         <div className='justify-start items-center overflow-hidden flex flex-col sm:flex-row flex-wrap gap-24'> 
            {exerciseVideos?.slice(0,6).map((item,index) => (

              <a key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
               target="_blank"
                rel="noreferrer">

                  <div className='flex flex-col'>
                  <div className='flex items-center justify-center w-[300px] h-[300px]'>
                 <img src={item.video.thumbnails[0].url}alt={item.video.title} />
                  </div>
                  </div>
                 <div className='flex flex-col items-center justify-center text-center'>
                    <span className='text-xl text-black w-[200px]'>
                      {item.video.title}
                    </span>
                
                    <span className='text-xl  text-[#ff2625] capitalize'>
                      {item.video.channelName}
                    </span>
                 </div>
              </a>
            ))}
         </div>
    </div> 
  )
}

export default ExerciseVideos