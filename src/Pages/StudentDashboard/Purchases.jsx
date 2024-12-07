import React, { useState, useEffect, useContext, use } from 'react'
import { retrieve_all_courses } from '../../APICalls/course';
import UserContext from '../../Context/userContext';
import { retrieve_courses_by_student_id } from '../../APICalls/course_student';
import './Purchases.scss'

const Purchases = () => {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const userId = user?.userId;

        retrieve_courses_by_student_id(userId)
        .then((response) => {
            setPurchasedCourses(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [user]);

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
                    <p style={{fontSize: '14px'}}><b>Validity: {validity}</b></p>
                    <button className='buy-btn'>Resume Course</button>
                </div>
            </div>
        )
    }

    return (
        <div className='all-courses'>
            <h2 className='heading'>My Purchases</h2>
            {purchasedCourses && purchasedCourses.length > 0 ? (
                <div className="courses">
                    {purchasedCourses.map((course, index) => (
                        <CourseCardComponent
                            key={index}
                            courseTitle={course.courseTitle}
                            courseDescription={course.courseDescription}
                            coursePrice={course.coursePrice}
                            discount={course.discount}
                            validity={course.validity}
                            imgUrl={course.imgUrl}
                            courseId={course.courseId}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-purchases">
                    <p>No courses purchased</p>
                </div>
            )}
        </div>
    )
}

export default Purchases;
