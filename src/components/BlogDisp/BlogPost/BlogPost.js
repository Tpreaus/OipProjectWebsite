import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import BasicRating from '../../Rating/BasicRating';
import './BlogPost.css';
import img from './ex.png'

function BlogPost() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getBlogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Grid container spacing={2}>
      {blogs.map((blog, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Box sx={{ margin: 2 }}>
            <Paper elevation={3} sx={{ borderRadius: 2, border: '1px solid #ccc', padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={img} alt="Blog" style={{width: '100%', objectFit: 'cover'}}/>
                  <BasicRating />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2">
                    {blog.blogtitle}
                  </Typography>
                  <Typography variant="body1">
                    {blog.blogpost}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogPost;