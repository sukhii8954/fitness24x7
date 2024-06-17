import React from 'react'
import BodypartImg from  '../assets/icons/body-part.png';
import TargetImg from  '../assets/icons/target.png';
import EquipmentImg from  '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
   const {bodyPart, gifUrl, name , target , equipment} = exerciseDetail;
   
  //  console.log(gifUrl);
    const extraDetail = [
      {
         icon: BodypartImg,
         name:  bodyPart,
      },
      
      {
         icon: TargetImg,
         name:  target,
      },
      {
         icon: EquipmentImg,
         name:  equipment,
      },
    ]


   return (
    <div className='gap-16 md:flex-row p-10  flex justify-center mx-32 my-20'>
           <img  className=' flex w-96 h-96' src= {gifUrl} alt={name} loading="lazy" />
           <div className='gap-5  flex-row  text-center  md:gap-9'>
             <span className='text-3xl  font-semibold'>
               {name}
             </span>
            <p className='text-xl py-12 text-wrap  text-center' >
               Exercises keep you strong. {name} {` `}
               is one of the best exercises to target your {target}.
                It will help you improve your mood and gain energy. 
            </p>
             
             {extraDetail.map((item)=> (
              <div key={item.name} className='flex flex-row gap-12 justify-center'> 
                <button  className=' flex items-center m-4 justify-center bg-[#fff2db] rounded-full w-[100px] h-[100px] overflow-hidden'>
                  <img  className=' object-cover ' src= { item.icon} alt={bodyPart}/>
                </button>
                <div className=' mt-10 capitalize  text-nowrap flex text-center justify-center mx-auto font-semibold text-xl'>
                  {item.name}
                </div>
               </div> 
             ))}
           </div>
    </div>
  )
}

export default Detail