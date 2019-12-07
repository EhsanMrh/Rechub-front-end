import React, { useState } from 'react';
import { Link } from 'react-router-dom' ;

import SignModal from '../../../shared-components/SignModal';
import { IMAGES } from '../../../../Paths';
 
import './style.scss';

function BlogNavBar() {
    const [showSignModal, setShowSignModal] = useState(false);

    if (window.innerWidth < 768) {
        return null;
    }
    
    return (
        <div className="blog-navbar">
            <div className="blog-navbar__right-part">
                <Link to="/" className="right-part__logo">
                    <img src={`/${IMAGES.LOGO}`} alt="ریکاب"/>
                    <h1>ریکاب</h1>
                </Link>
                <div className="right-part__links">
                    <Link to="/blog/canada" title="ویزای کانادا">ویزای کانادا</Link>
                    <Link to="/blog/canada" title="ویزای کانادا">ویزای کانادا</Link>
                    <Link to="/blog/canada" title="ویزای کانادا">ویزای کانادا</Link>
                    <Link to="/blog/canada" title="ویزای کانادا">ویزای کانادا</Link>
                </div>
            </div>
            <div className="blog-navbar__left-part">
                <button className="button" onClick={() => setShowSignModal(true)} >ورود/ثبت نام</button>
            </div>
            <SignModal
                open={showSignModal}
                onCloseSignModal={() => setShowSignModal(false)}
            />
        </div>
    )
}

export default BlogNavBar;