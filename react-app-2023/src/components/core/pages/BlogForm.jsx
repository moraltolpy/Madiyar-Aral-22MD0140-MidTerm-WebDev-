import React, { useState } from 'react';
import AddBlog from '../form/AddBlog';
import BlogList from '../view/BlogList';

function BlogForm(){
const [blogs, setBlogs] = useState([]);
const [counter, setCounter] = useState(0);

const addBlog = (content) => {
    const newBlog = {
        id: counter,
        content: content,
        likes: 0,
        dislikes:0,
    };


    setCounter(counter+1);
    setBlogs([...blogs, newBlog]);
};
const editBlog = (id,content) => {
    const updatedBlogs = blogs;
    updatedBlogs.forEach((blog) => {
        if(blog.id === id) {
            blog.content= content
        }
    });

    setBlogs([...updatedBlogs]);
};


const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
};
    function likeBlog(id){
    const updatedBlogs = blogs;
    updatedBlogs.forEach((blog) => {
        if(blog.id === id) {
            blog.likes <1 && blog.likes++;
            blog.dislikes >0 && blog.dislikes--;
        }
    });

        setBlogs([...updatedBlogs]);
};


    function dislikeBlog(id){
    const updatedBlogs = blogs;
    updatedBlogs.forEach((blog) => {
        if(blog.id === id) {
            blog.likes >0 && blog.likes--;
            blog.dislikes <1 && blog.dislikes++;
        }
    });

        setBlogs([...updatedBlogs]);
};
function appreciateBlog(id,isPositive){
    if(isPositive)
        likeBlog(id)
    else
        dislikeBlog(id)
}

return (
    <div className="BlogForm">
        <AddBlog onAddBlog={addBlog} />
        <BlogList blogs={blogs} onDelete={deleteBlog}  onLike={likeBlog}  onEdit={editBlog}  onDislike={dislikeBlog}/>
    </div>
);
}
export default BlogForm