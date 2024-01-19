import React from 'react'
import SLider from './Slider'

const Cards = () => {
  return (
    <div className="bg-slate-50 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-8">
          Select your Stream
        </h2>
        <div className="mt-10">
       <SLider/>
       </div>
      </div>
    </div>
  )
}

export default Cards