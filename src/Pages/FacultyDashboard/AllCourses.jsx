import React, { useState, useEffect, useContext } from 'react'
import { retrieve_all_courses } from '../../APICalls/course';
import './AllCourses.scss'

const AllCourses = ({ setActiveTab }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        retrieve_all_courses()
        .then((response) => {
            setCourses(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    const CourseCardComponent = ({
        courseTitle,
        courseDescription,
        coursePrice,
        discount,
        validity,
        imgUrl,
        courseId
    }) => {
        return (
            <div className="course-card">
                <div className="course-image">
                    <img src={imgUrl} alt="course" />
                </div>
                <div className="course-details">
                    <h3>{courseTitle}</h3>
                    <p style={{fontSize: '14px'}}>{courseDescription}</p>
                    <button onClick={() => setActiveTab('/course-dashboard')} className='course-btn'>Manage Course</button>
                </div>
            </div>
        )
    }

    return (
        <div className='all-courses'>
            <h2 className='heading'>Courses</h2>
            <div className="courses">
                {
                    courses?.map((course) => {
                        return (
                            <CourseCardComponent
                                key={course.courseId}
                                courseTitle={course.courseTitle}
                                courseDescription={course.courseDescription}
                                coursePrice={course.coursePrice}
                                discount={course.discount}
                                validity={course.validity}
                                imgUrl={course.imgUrl}
                                courseId={course.courseId}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllCourses
