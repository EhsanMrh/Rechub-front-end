import React from 'react'
import { Route } from 'react-router-dom'
import JobSeeker from './JobSeeker'
import ImmigrationOffice from './ImmigrationOffice'

import './style.scss'

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edu: ['sharif'],
            work: [],
            user: {
                situation: true
            }
        }
    }

    render() {
        return (
            <div className="content section">
                <Route path="/panel/office" component={ImmigrationOffice} />
                <Route path="/panel/job" component={JobSeeker} />
            </div>
        )
    }
}

export default Content;