import React, { useState, useEffect } from 'react'
import { retrieve_all_courses } from '../../APICalls/course';
import './AllCourses.scss'

const CourseCardComponent = ({
    courseTitle,
    courseDescription,
    coursePrice,
    discount,
    validity,
    imgUrl
}) => {
    const coursePriceDiscounted = Math.round(coursePrice - (coursePrice * discount / 100));
    return (
        <div className="course-card">
            <div className="course-image">
                <img src={imgUrl} alt="course" />
            </div>
            <div className="course-details">
                <h3>{courseTitle}</h3>
                <p style={{fontSize: '14px'}}>{courseDescription}</p>
                <div className="course-price">
                    <p><b>₹{coursePriceDiscounted}</b></p>
                    <p>₹{coursePrice}</p>
                    <p style={{position: 'absolute', right: '1rem', color: '#25c16f'}}><b>{discount}%</b></p>
                </div>
                <p style={{fontSize: '14px'}}><b>Validity: {validity}</b></p>
                <button className='buy-btn'>Buy Now</button>
            </div>
        </div>
    )
}

function AllCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        retrieve_all_courses()
        .then((response) => {
            setCourses(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    })

    return (
        <div className='all-courses'>
            <h2 className='heading'>Courses</h2>
            <div className="courses">
                {
                    courses.map((course) => {
                        return (
                            <CourseCardComponent
                                courseTitle={course.courseTitle}
                                courseDescription={course.courseDescription}
                                coursePrice={course.coursePrice}
                                discount={course.discount}
                                validity={course.validity}
                                imgUrl={course.imgUrl}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllCourses
