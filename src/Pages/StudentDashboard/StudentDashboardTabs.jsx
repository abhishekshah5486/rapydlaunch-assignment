import React, {useState} from 'react';
import Sidebar from './Sidebar';
import AllCourses from './AllCourses';
import Purchases from './Purchases';

function StudentDashboardTabs() {
    const [activeTab, setActiveTab] = useState('courses');

    let ContentComponent = null;
    if (activeTab === 'courses') {
        ContentComponent = AllCourses;
    }
    else if (activeTab === 'purchases') {
        ContentComponent = Purchases;
    }

    return (
        <div style={{display: 'flex'}}>
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}/>
            {ContentComponent && <ContentComponent />}
        </div>
    )
}

export default StudentDashboardTabs;
