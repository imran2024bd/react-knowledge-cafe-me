import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author} </h3>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='gap-x-4' >
                {
                    hashtags.map((hash, idx) => <span  key={idx}><a href >#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.object.isRequired
}

export default Blog;






/* 
42-3 Set Layout And Make React Responsive

prop-types

https://www.npmjs.com/package/prop-types
npm install --save prop-types
import PropTypes from 'prop-types';
*/