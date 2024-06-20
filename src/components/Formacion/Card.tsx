import React from 'react'

interface Props{
    title:string,
    date:string,
    academy:string,
    certificate: JSX.Element
}

const Card = ({title, date, academy, certificate}:Props) => {
  return (
    <div className='flex flex-col gap-3 p-3 rounded-xl w-[300px] bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E]'>
        <div className='flex flex-col gap-2 font-semibold text-xl'>
            <p>{title}</p>
            <p>{date}</p>
            <p>{academy}</p>
        </div>
        {certificate}
    </div>
  )
}

export default Card