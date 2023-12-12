import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';


export default function CourseDisp() {
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
        <div className="coursedisp">
            {courses.map(course => (
                <div key={course.approvedclassid}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" component="div">
                                AUI Course ID - {course.auicourseid}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Course Code at Host - {course.hostcourseid}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
    
}
