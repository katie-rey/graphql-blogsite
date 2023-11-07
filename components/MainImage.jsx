import React from 'react'
import bg from '../public/bg.jpg'
import Link from 'next/link'

const MainImage = () => {
  return (
    <div className="image-container relative">
      <div
        className="main-image h-[50rem] w-full mx-0 mb-14 
       bg-slate-100"
      ></div>

      <div className="main-copy absolute col-white text-white h-56 grid grid-row-3 gap-4 content-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          Follow our adventures
        </h1>
        <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          into the unknown
        </h1>

        <div className="text-center">
          <Link href={`/`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue
            </span>
          </Link>
        </div>
        {/* <img className="main-image h-auto" src={bg} alt="main-image"></img> */}
      </div>
    </div>
  )
}

export default MainImage
