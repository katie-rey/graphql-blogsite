import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { getCategories } from '@/services'

const Header = ({ backgroundColor = '' }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  //

  //

  return (
    <nav
      class="nav mx-auto px-10 w-full fixed top-0 z-40"
      style={{ backgroundColor, position: 'fixed', width: '100vw' }}
    >
      {/* <div className="container mx-auto px-10 mb-8 sticky top-0 z-40 bg-slate-100"> */}
      <div className=" w-full inline-block  py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">{'NZ & Beyond '}</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Header
