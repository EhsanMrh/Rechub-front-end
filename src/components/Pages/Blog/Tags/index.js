import React from 'react'
import { IMAGES } from '../../../../Paths'

import './style.scss'

const Tags = () => {
    return (
        <div className="tags" style={window.innerWidth<768?
                {backgroundImage: `url(/${IMAGES.TAGS_PATTERN_P})`, backgroundSize: '100% 100%'}
                :
                {backgroundImage: `url(/${IMAGES.TAGS_PATTERN_D})`, backgroundSize: '100% 100%'}            
            }>
            <h3>برچسب ها:</h3>
            <div className="tags__items">
                <a className="tags__items--tag">
                    <span>ویزای کاری</span>
                </a>
                <a className="tags__items--tag">
                    <span>ویزای کاری</span>
                </a>
                <a className="tags__items--tag">
                    <span>ویزای کاری</span>
                </a>
                <a className="tags__items--tag">
                    <span>ویزای کاری</span>
                </a>
            </div>
        </div>
    )
}

export default Tags