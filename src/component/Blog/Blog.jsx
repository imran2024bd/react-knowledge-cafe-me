import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark}) => {
    // console.log(blog);
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author} </h3>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-red-400 text-2xl'
                    > <FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p >
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href >#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.object.isRequired
    handleAddToBookmark: PropTypes.function
}

export default Blog;






/* 
42-3 Set Layout And Make React Responsive

prop-types

https://www.npmjs.com/package/prop-types

npm install --save prop-types
import PropTypes from 'prop-types';

https://react-icons.github.io/react-icons/
*/