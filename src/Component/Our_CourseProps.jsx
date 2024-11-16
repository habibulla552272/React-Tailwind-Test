import React from 'react'

const Our_CourseProps = (props) => {
  return (
    <section className='bg-white rounded-md'>
      <div className='px-4 py-4'>
        <img src={props.Image} alt="" />
        <div className='flex justify-between py-3'>
          <div className="flex gap-3">
            <p>{props.p1} </p>
            <p>{props.p2}</p>
          </div>
          <div>
            <p> {props.p3}</p>
          </div>
        </div>
        <h2 className=' py-1font-extrabold text-2xl'>{props.tittle}</h2>
        <p className='py-2'>{props.Discription}</p>
        <button className='w-full text-center py-2 bg-gray-300 rounded-md'>Get It Now </button>
      </div>
    </section>
  );
}

export default Our_CourseProps
