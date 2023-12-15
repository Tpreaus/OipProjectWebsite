import { Grid } from "@mui/material"
import "./BlogDisp.css"
import BlogPost from "./BlogPost/BlogPost"

export default function BlogDisp() {
    return (
            <Grid item xs={12} sm={6} md={4}>
                <BlogPost />
            </Grid>
    )
}