import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function AddBlog({ onAddBlog }) {
    const [newBlogContent, setNewBlogContent] = useState('');

    const addBlog = () => {
        if (newBlogContent.trim() !== '') {
            onAddBlog(newBlogContent);
            setNewBlogContent('');
        }
    };

    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <TextField
                    fullWidth
                    label="Add blog content"
                    variant="outlined"
                    value={newBlogContent}
                    onChange={(e) => setNewBlogContent(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={addBlog}
                >
                    Add Blog
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddBlog;
