import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '@/services'

const Categories = ({ catergories, slug }) => {
  const [relatedCategories, setRelatedCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => setRelatedCategories(categories))
  }, [slug])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Categories' : 'not sure'}
      </h3>
      {relatedCategories.map((post) => (
        <>
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none"></div>
            <div className="flex-grow ml-4">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Categories
