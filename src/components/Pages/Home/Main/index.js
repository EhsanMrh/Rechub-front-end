import React from 'react' ;

import Feature from './Feature'
import Description from './Description'
import Call from './Call'
import Coworker from './Coworker'

import './style.scss' ;

const Main = () => {
    return (
        <div className="main section">
            <Feature />
            <Description />
            <Call />
            <Coworker />
        </div>
    )
}

export default Main ;