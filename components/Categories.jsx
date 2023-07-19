import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '@/services'

const Categories = ({ catergories, slug }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  // console.log(categories)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <span className="cursor-pointer font-semibold block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
