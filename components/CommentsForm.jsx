import React, { useState, useRef } from 'react'

function CommentsForm({ slug }) {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmission = (event) => {
    event.preventDefault()
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h1 className="text-xl mb-8 font-semibold border-b pb-4">Comment test</h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          name="comment"
          placeholder="Comment"
          // id=""
          // cols="30"
          // rows="10"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          type="text"
          ref={nameEl}
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          type="text"
          ref={emailEl}
          name="email"
          placeholder="Email"
        />
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duratoin-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default CommentsForm
