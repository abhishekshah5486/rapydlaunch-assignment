import React, {useState} from 'react';
import Sidebar from './Sidebar';
import AllCourses from './AllCourses';

function FacultyDashboardTabs() {
    const [activeTab, setActiveTab] = useState('courses');

    let ContentComponent = null;
    if (activeTab === 'courses') {
        ContentComponent = AllCourses;
    }

    return (
        <div style={{display: 'flex'}}>
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}/>
            {ContentComponent && <ContentComponent setActiveTab={setActiveTab}/>}
        </div>
    )
}

export default FacultyDashboardTabs;
