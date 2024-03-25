
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  

  return (
    <>
      
    <Header></Header>
    <div className='md:flex mx-auto justify-between'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>

      {/* <h1 className='text-6xl bg-red-300 border-8 border-blue-700 rounded-2xl text-center '>React knowledge Cafe </h1> */}
      
      
    </>
  )
}

export default App
