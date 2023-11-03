import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Blog({ blog, onDelete,onLike,onDislike,onEdit  }) {

    const [isEditForm , setEditForm ] = useState(false)
    const [blogContent, setBlogContent] = useState(blog.content);
    const textFieldId= 'editField';

    function keydownHandler(e){
            if(e.keyCode===13) {

                onEdit(blog.id,e.target.value);
                setEditForm(false);
            }



    }
    function changeForm(val){
        setEditForm(val)
    }

    return (
        <Paper elevation={3} className="blog tw-p-2 tw-relative">
            {isEditForm ? (
                <TextField
                    fullWidth
                    id={textFieldId}
                    label="Add blog content"
                    variant="outlined"
                    onKeyDown={keydownHandler}
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                />
            ) : (
                <Typography variant="body1" onClick={e=>changeForm(true)} className="tw-pb-2">
                    {blog.content}
                </Typography>
            )}


            <Button variant="contained" color="secondary" onClick={() => onDelete(blog.id)}>
                Delete blog
            </Button>
            <Button variant="contained" color="secondary" onClick={() => onLike(blog.id)}>
                like  {blog.likes}
            </Button>
            <Button variant="contained" color="secondary" onClick={() => onDislike(blog.id)}>
                dislike  {blog.dislikes}
            </Button>
        </Paper>
    );
}

export default Blog;
