import { Grid } from "@mui/material"
import "./BlogDisp.css"
import BlogPost from "./BlogPost/BlogPost"

export default function BlogDisp() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
        </Grid>
    )
}