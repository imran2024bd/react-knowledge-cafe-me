import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
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