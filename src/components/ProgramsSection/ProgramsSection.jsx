import React from 'react';
import './ProgramsSection.scss';

const ProgramCardComponent = ({
    title, 
    imgUrl
}) => {
    return (
        <div className='program-card'>
            <img src={imgUrl} alt="" />
            <div className="program-details">
                <h2>{title}</h2>
                <div className="btn-group">
                    <button style={{backgroundColor: 'white', color: '#4b4b4b', border: '1px solid #e4e4e4'}}>GO TO PROGRAM</button>
                    <button style={{backgroundColor: '#0041ca', color: 'white'}}>BROCHURE</button>
                </div>
            </div>
        </div>
    )
}

function ProgramsSection() {
    
    const programData = [
        {
            "title": "Academy (Software Development)",
            "imgUrl": "https://assets.fp.scaler.com/seo/_next/static/media/academy.6fb5523e.webp",
        },
        {
            "title": "Data Science & Machine Learning",
            "imgUrl": "https://assets.fp.scaler.com/seo/_next/static/media/dsml.c8ff05d0.webp"
        },
        {
            "title": "DevOps",
            "imgUrl": "https://assets.fp.scaler.com/seo/_next/static/media/devops.d3b40154.webp"
        }
    ]

    return (
        <div className='programs-section'>
            <h2 className='section-title'>Programs To Help You Upskill</h2>
            <div className="programs-container">
                {
                    programData.map((program, idx) => {
                        return (
                            <ProgramCardComponent 
                                key={idx}
                                title={program.title}
                                imgUrl={program.imgUrl}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProgramsSection;
