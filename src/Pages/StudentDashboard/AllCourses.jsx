import React, { useState, useEffect, useContext } from 'react'
import { retrieve_all_courses } from '../../APICalls/course';
import UserContext from '../../Context/userContext';
import { enroll_student_in_course } from '../../APICalls/course_student';
import './AllCourses.scss'

function AllCourses() {
    const [courses, setCourses] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        retrieve_all_courses()
        .then((response) => {
            setCourses(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    const handle_course_purchase = async (course_id) => {

        try {

            const courseId = course_id;
            const studentId = user?.userId;

            const response = await enroll_student_in_course(courseId, studentId);
            if (response.success) {
                alert('Course purchased successfully.');
            }

        } catch (err) {
            
            console.error(err);
            alert('Internal server error.');

        }

    }

    const CourseCardComponent = ({
        courseTitle,
        courseDescription,
        coursePrice,
        discount,
        validity,
        imgUrl,
        courseId
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
                        <p style={{textDecoration: 'line-through'}}>₹{coursePrice}</p>
                        <p style={{position: 'absolute', right: '1rem', color: '#25c16f'}}><b>{discount}%</b></p>
                    </div>
                    <p style={{fontSize: '14px'}}><b>Validity: {validity}</b></p>
                    <button onClick={() => handle_course_purchase(courseId)} className='buy-btn'>Buy Now</button>
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
