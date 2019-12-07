import React from 'react';
import { IMAGES } from '../../../../Paths'

import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__detail">
                    <div className="detail__logo">
                        <img src={`/${IMAGES.LOGO}`} alt="ریکاب" />
                    </div>
                    <div className="detail__content">
                        <div className="detail__content--title">
                            <div className="text-logo">ریکاب</div>
                            <span>|</span>
                            <div className="description">پلتفرم جامع کاریابی</div>
                        </div>
                        <div className="detail__content--phone">
                            <span>02632215387</span>
                            <span>-</span>
                            <span>09193665398</span>
                        </div>
                    </div>
                </div>
                <div className="footer__license">
                    <img src={`/${IMAGES.ETEHADIYE}`} alt="اتحادیه کسب و کارهای دیجیتال" />
                    <img src={`/${IMAGES.NAMAD}`} alt="" />
                </div>
            </div>
            <div className="footer__link">
                <div className="link__items">
                <a href="" title="ارسال ایمیل"><i className="far fa-envelope icon"></i></a>
                <a href="" title="ما در لینکداین"><i className="fab fa-linkedin-in icon"></i></a>
                <a href="" title="ما در اینستاگرام"><i className="fab fa-instagram icon"></i></a> 
                </div>
                <p>
                    تمامی حقوق کپی رایت محفوظ است
                </p>
            </div>
        </div>
    )
}

export default Footer;