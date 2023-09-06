/** retrieves course details from /api/courses/:id
 /* renders Delete Course that sends a delete request
 * also renders "Update Course" to navigate to Update Course Screen
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
    const courseId = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${courseId}`)
            .then(response => {
                setCourse(response.data)
                // handle success
            })
            .catch(error => {
                // handle error
                console.log("Error fetching and parsing data", error);
            })
    }, [courseId]);

}

export default CourseDetail;