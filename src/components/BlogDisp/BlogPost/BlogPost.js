import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import img from "./ex.png"; 

function BlogPost() {
  return (
    <Box sx={{ margin: 2 }}>
      <Paper elevation={3} sx={{ borderRadius: 2, border: '1px solid #ccc', padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={img} alt="Blog" style={{width: '100%', objectFit: 'cover'}}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h2">
              Blog Post Title
            </Typography>
            <Typography variant="body1">
              This is the blog post content. Here you'll find the latest updates and articles.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default BlogPost;