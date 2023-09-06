/** retrieves course details from /api/courses/:id
 /* renders Delete Course that sends a delete request
 * also renders "Update Course" to navigate to Update Course Screen
*/

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link to={`course/${course.id}/update`} className="button" href="update-course.html">Update Course</Link>
                    <Link to={`course/${course.id}/delete`} className="button" >Delete Course</Link>
                    <Link to='/courses' className="button" href="index.html">Return to List </Link>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.name}</h4>
                            <p>By {course.user.id}</p>

                            <p>{course.description}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                {course.materialsNeeded.map((courseMaterial) => {
                                    <li>{courseMaterial}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>

    )

}

export default CourseDetail;