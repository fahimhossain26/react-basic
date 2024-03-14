
import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";
// import Blogs from '../Blogs/Blogs';
const Blog = ({blog , handelAddToBookmark}) => {
    const {title,cover,author,author_img ,posted_date,reading_time,hashtags }=blog;
    return (
        <div className='mb-20'>
          <img className='w-ful mb-8' src={cover}  alt={`cover piccture all the title ${title}`} />
          <div className='flex justify-between'>
            <div className='flex gap-2 mb-2'>
              <img className='w-14' src={author_img} alt="" />
              <div>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
              </div>
            </div>
            <div>
              <span>{reading_time}</span><br />
              <button
               onClick={()=>handelAddToBookmark(Blog)}
               className='flex gap-2'>bookmark <IoBookmarks /></button>
            </div>
          </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>{hashtags} </p>
            
        </div>
    );
    // Blog.PropTypes={
    //   blog: PropTypes.object.isRequired ,handelAddToBookmark:PropTypes.func
    // }
};

export default Blog;