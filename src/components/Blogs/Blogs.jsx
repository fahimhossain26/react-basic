import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types';


const Blogs = (handelAddToBookmark) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                  blogs.map(blog=> <Blog key={blog.id}
                  blog={blog}
                  handelAddToBookmark={handelAddToBookmark}
                  ></Blog> )
            }  
         </div>
    );
};
// Blogs.propTypes{
//     handelAddToBookmark:propTypes.func
//}

export default Blogs;