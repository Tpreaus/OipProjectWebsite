import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, Button, Collapse } from '@mui/material';


export default function CourseDisp() {
    const [openStates, setOpenStates] = useState({});

    const handleToggle = (uni_name) => {
    setOpenStates({ ...openStates, [uni_name]: !openStates[uni_name] });
};


    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/courses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                setCourses(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <Grid container spacing={2}>
          {Object.entries(courses)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([uni_name, uni_courses]) => (
            <Grid item xs={12} sm={6} md={4} key={uni_name}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {uni_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {uni_courses.length} courses
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {uni_courses[0].uni_country}
                  </Typography>
                  <Button onClick={() => handleToggle(uni_name)}>
                    {openStates[uni_name] ? 'Show Less' : 'Show More'}
                  </Button>
                  <Collapse in={openStates[uni_name]}>
                    <List>
                      {uni_courses.map((course) => (
                        <ListItem key={course.aui_course_code}>
                          <Typography variant="body2" color="text.secondary">
                            AUI: {course.aui_course_code} - Host: {course.host_course_code}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    
}
