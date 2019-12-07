import React from 'react'
import { IMAGES } from '../../../../../../Paths'

import './style.scss'

const HomeHeader = () => {
    return (
        <header className="blog-home-header section" style={window.innerWidth > 768 ?
            { backgroundImage: `url(${IMAGES.BLOG_HEADER_D})` }
            :
            { backgroundImage: `url(${IMAGES.BLOG_HEADER_P})` }
        }>
            <div className="blog-home-header__content">
                <div className="blog-home-header__content-section">
                    <h2 className="blog-home-header__content-title">تمامی انواع ویزای شینگن</h2>
                    {window.innerWidth > 768 ?
                        <p className="blog-home-header__content-text">
                            ویزای شینگن دارای انواع مختلفی است که در ادامه انواع آن ها را شرح میدهیم.
                    </p>
                        :
                        null
                    }
                    <a href="#" className="blog-home-header__content-link">بیشتر...</a>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader