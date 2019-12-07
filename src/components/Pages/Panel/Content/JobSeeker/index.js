import React from 'react' 
import { Route } from 'react-router-dom';

import Resume from './Resume'
import SideBar from './SideBar';

const JobSeeker = () => {
    return (
        <div>
            <SideBar />
            <Route path="/panel/job" component={Resume} exact/>
        </div>
    )
}

export default JobSeeker ;