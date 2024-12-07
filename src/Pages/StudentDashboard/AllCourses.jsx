import React from 'react'
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
  return (
    <div className='all-courses'>
        <h2 className='heading'>Courses</h2>
        <div className="courses">
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />
            <CourseCardComponent 
                courseTitle='Complete Web Development + Devops + Blockchain Cohort'
                courseDescription='Complete syllabus - https://blog.100xdevs.com/
Starts 2nd Au..'
                coursePrice={8499}
                discount={16.84}
                validity='2 Years'
                imgUrl='https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png'
            />

        </div>`
    </div>
  )
}

export default AllCourses
