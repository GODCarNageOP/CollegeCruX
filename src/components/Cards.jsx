import React from 'react'
import SLider from './Slider'

const Cards = () => {
  return (
    <div className="bg-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
        Engineer Your Future: Discover Exciting Streams
        </h2>
        <div className="mt-10 lg:mx-0 mx-10">
       <SLider/>
       </div>
      </div>
    </div>
  )
}

export default Cards