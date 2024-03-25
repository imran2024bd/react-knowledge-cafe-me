import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setBlogs(data))
        // .then( data => console.log(data))
    },[])
    return (
        <div>
            
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

*/