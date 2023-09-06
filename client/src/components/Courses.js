/** retrieves list of courses from /api/courses and renders it
 * renders course w/ link to their "Course Detail"
 * renders a link to the "Create Course" screen
 */

import { useState, useEffect } from "react";
import axios from "axios";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses')
            .then(response => {
                setCourses(response.data)
                // handle success
            })
            .catch(error => {
                // handle error
                console.log("Error fetching and parsing data", error);
            })
    }, []);

    /**
     * Each course needs to link to its respective "Course Detail" screen. 
     * This component also renders a link to the "Create Course" screen.
     */
    return (
        <>
            {courses.map((course) => {
                <a class="course--module course--link" href={course.detail}>
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">{course.title}</h3>
                </a>
            })}
            <a class="course--module course--add--module" href="create-course.html">
                    <span class="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                    </a>
        </>
    )

};

export default Courses;