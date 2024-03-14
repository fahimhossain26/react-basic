

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'

function App() {
 const[bookmarks,setBookmarks]= useState([])
const handelAddToBookmark= blog=>{
  console.log(blog);
}
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
    <Bookmark></Bookmark>
    </div>
    </>
  )
}

export default App
