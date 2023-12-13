// Admin.js
import React from 'react';
import './Admin.css';

function Admin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const auiCode = data.get('auiCode');
        const hostCode = data.get('hostCode');
        const courseCredits = data.get('courseCredits');
        const auiName = data.get('auiName');
        const hostName = data.get('hostName');

        fetch('http://localhost:3001/add-course', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                auiCode: auiCode,
                hostCode: hostCode,
                courseCredits: courseCredits,
                auiName: auiName,
                hostName: hostName,
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    return (
        <div className="admin">
            <div className="admin_wrapper">
                <fieldset className='admin_aprovedcourse'>
                    <legend>Add Approved Course</legend>
                    <form onSubmit={handleSubmit}>
                        <label>Course Code at AUI:</label>
                        <input type="text" name="auiCode" />
                        <label>Course Code at Host:</label>
                        <input type="text" name="hostCode" />
                        <label>Name at Host:</label>
                        <input type="text" name="hostName" />
                        <label>Name at AUI:</label>
                        <input type="text" name="auiName" />
                        <label>Credits:</label>
                        <input type="text" name="courseCredits" />
                        <button type="submit">Submit</button>
                    </form>
                </fieldset>
                <div className='admin_blog'>
                </div>
            </div>
        </div>
    );
};

export default Admin;