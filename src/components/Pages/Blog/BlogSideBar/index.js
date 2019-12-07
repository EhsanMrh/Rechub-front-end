import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SignModal from '../../../shared-components/SignModal'
import ProgressBar from '../../../shared-components/ProgressBar'
import { IMAGES } from '../../../../Paths'


import './style.scss'

function BlogSideBar() {
    const [firstName, setFirsName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [showSignModal, setShowSignModal] = useState(false);

    function showNavBar() {
        if (window.location.pathname !== '/') {
            const navbar = document.querySelector('.blog-sidebar');
            const sideControl = document.getElementById('blog-side__control');
            if (window.pageYOffset !== 0) {
                navbar.style.top = '0%';
            } else if (Math.floor(window.pageYOffset) === 0) {
                navbar.style.top = '-100%'
                sideControl.checked = false
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showNavBar);
    })

    return (
        <div className='blog-sidebar'>
            {window.innerWidth < 768 ?
                <div className="blog-sidebar__header">
                    <i className="fas fa-bars icon" title="منو"></i>
                    <div className="blog-sidebar__logo">
                        <img src={`../${IMAGES.LOGO}`} alt="ریکاب" />
                        <h1>ریکاب</h1>
                    </div>
                    <SignModal
                        open={showSignModal}
                        onCloseSignModal={() => setShowSignModal(false)}
                    />
                </div>
                :
                <div className="blog-navbar">
                    <div className="blog-navbar__right-part">
                        <Link to="/" className="right-part__logo">
                            <img src={`/${IMAGES.LOGO}`} alt="ریکاب" />
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
                        <button className="button" onClick={() => {
                            setShowSignModal(true);
                        }} >ورود/ثبت نام</button>
                    </div>
                    <SignModal
                        open={showSignModal}
                        onCloseSignModal={() => setShowSignModal(false)}
                    />
                </div>
            }
            <input className="blog-sidebar__control" type="checkbox" name="menu" id="blog-side__control" />
            <div className="blog-sidebar__card">
                {firstName !== undefined ?
                    <div className="card__header">
                        <div className="header__avatar">
                            <img src={`../${IMAGES.AVATAR}`} alt="عکس شما" />
                            <ProgressBar className="progressbar" value={60} size='8rem' />
                        </div>
                        <div className="header__detail">
                            <div className="detail__name">{firstName + ' ' + lastName}</div>
                            <button className="detail__exit">
                                <span>خروج از حساب</span>
                                <img src={`../${IMAGES.ICONS.EXIT}`} alt="خروج" />
                            </button>
                        </div>
                    </div>
                    :
                    <div className="card__header">
                        <button className="button" onClick={() => {
                            const navbar = document.querySelector('.blog-sidebar');
                            const sideControl = document.getElementById('blog-side__control');
                            navbar.style.top = '-100%';
                            sideControl.checked = false;

                            setShowSignModal(true);
                        }}>ورود/ثبت نام</button>
                    </div>
                }
                {firstName !== undefined ?
                    <div className="card__welcome"><p>{`${firstName} عزیز خوش آمدید!`}</p></div>
                    :
                    null
                }
                <div className="card__content">
                    <ul>
                        <li>فرصت های شغلی</li>
                        <li>مورد علاقه های من</li>
                        <li>درخواست های من </li>
                        <li>وبلاگ</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
                <div className="card__footer">
                    <div className="footer__share-us">
                        <button>
                            <img src={`../${IMAGES.ICONS.SHARE}`} alt="اشتراک گذاری" />
                            <span>معرفی به دوستان</span>
                        </button>
                    </div>
                    <div className="footer__links">
                        <a href="" title="ارسال ایمیل"><i className="far fa-envelope icon"></i></a>
                        <a href="" title="ما در لینکداین"><i className="fab fa-linkedin-in icon"></i></a>
                        <a href="" title="ما در اینستاگرام"><i className="fab fa-instagram icon"></i></a>
                    </div>
                    <div className="footer__copy">
                        <span><img src={`../${IMAGES.ICONS.COPYRIGHT}`} alt="copyright" /></span>
                        حق کپی رایت محفوظ است
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSideBar;