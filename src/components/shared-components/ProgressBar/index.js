import React from 'react';

import { Progress } from 'antd'
import RadialSeparators from './RadialSeparators'
import 'antd/dist/antd.css';

import './style.scss'

class ProgressBar extends React.Component {

    render() {
        return (
            <div className="progressbar">
                <div className="bar">
                    <Progress
                        style={{
                            transform: 'rotateX(180deg) rotateY(180deg)',
                            height: this.props.size,
                            width: this.props.size
                        }}
                        type="circle"
                        strokeColor={{
                            '0%': 'rgba(67, 19, 162,0.45)',
                            '100%': '#4213a2',
                        }}
                        percent={this.props.value}
                    />
                </div>
                <div className="separator">
                    <RadialSeparators
                        count={12}
                        style={{
                            background: '#ffffff',
                            width: '2px',
                            // This needs to be equal to props.strokeWidth
                            height: `${10}%`,
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default ProgressBar