import React from 'react'
import axios from 'axios'

const CreatePost = () => {

  const handleSubmit = async (e)=>{

    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{
      alert("Post Created Successfully")
      e.target.reset()
    })
    .catch((err)=>{
      console.log(err)
      alert("Error Creating Posts")
    })
    e.preventDefault()
  }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter Caption'/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost