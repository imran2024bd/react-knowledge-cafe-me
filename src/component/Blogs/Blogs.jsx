import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmak }) => {
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setBlogs(data))
        // .then( data => console.log(data))
    },[])
    return (
        <div className="md: w-2/3">
             <h1 className="text-4xl">Blogs: {blogs.length}</h1>  
             {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmak={handleAddToBookmak}
                    ></Blog>)
             }
        </div>
    );
};

export default Blogs;



/* Resource _ Cover_ img
https://unsplash.com/s/photos/blog-cover

https://www.freepik.com/free-photo/hand-drawn-paper-fathers-day_4086946.htm#from_view=detail_alsolike

https://md-imran-hossain222.imgbb.com/

Github_link
https://github.com/ProgrammingHero1/react-knowledge-cafe




42-2 Create Fake Data For The Blogs And Load Data
*/