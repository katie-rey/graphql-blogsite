import React from 'react'
import PostCard from './PostCard'
import FeaturedPostCard from './FeaturedPostCard'
import PostWidget from './PostWidget'
import Categories from './Categories'
import { getFeaturedPosts, getRecentPosts } from '../services'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const RecentAdventures = ({ posts }) => {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    getFeaturedPosts().then((result) => setFeaturedPosts(result))
  }, [])

  useEffect(() => {
    getRecentPosts().then((result) => setRecentPosts(result))
  }, [])
  // console.log(featuredPosts)

  return (
    <div className="image-container relative">
      <h1 className="mb-14 text-center text-3xl font-light">OUR RECENT ADVENTURES</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {featuredPosts.map((post, index) => (
          <div className="grid-col-1 lg:col-span-3">
            <div className="flex flex-col lg:col-span-3 ">
              <FeaturedPostCard post={post} key={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentAdventures

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
