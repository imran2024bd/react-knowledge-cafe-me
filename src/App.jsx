
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  
const [bookmarks, setBookmarks] = useState([]);

const handleAddToBookmak = blog => {
  console.log('bookmark adding soon');
}
  return (
    <>
      
    <Header></Header>
    <div className='md:flex  justify-between max-w-7xl mx-auto'>
        <Blogs handleAddToBookmak={handleAddToBookmak} ></Blogs>
      <Bookmarks></Bookmarks>
    </div>

      {/* <h1 className='text-6xl bg-red-300 border-8 border-blue-700 rounded-2xl text-center '>React knowledge Cafe </h1> */}
      
      
    </>
  )
}

export default App
