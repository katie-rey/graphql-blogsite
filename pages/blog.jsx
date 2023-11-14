import Head from 'next/head'
import { MainImage, PostCard, PostWidget, Categories, Divider, TravelStory } from '../components'
import { getPosts } from '../services'

export default function Blog({ posts }) {
  return (
    <>
      <div className="container mx-auto px-8 mb-8">
        <Divider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(params) {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
