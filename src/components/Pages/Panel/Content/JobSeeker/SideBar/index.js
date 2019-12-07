import React from 'react'
import ProgressBar from '../../../../../shared-components/ProgressBar'
import { IMAGES } from '../../../../../../Paths'


import './style.scss'

class SideBar extends React.Component {
    state = {
        firstName: 'احسان',
        lastName: 'فراهانی',
        showNav: false
    }

    componentDidMount() {
        const navbar = document.querySelector('.sidebar');
        const sideControl = document.getElementById('side__control');
        if (window.innerWidth < 768) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset !== 0) {
                    navbar.style.top = '0%'
                } else if (Math.floor(window.pageYOffset) === 0) {
                    navbar.style.top = '-100%'
                    sideControl.checked = false
                }
            })
        }
    }

    render() {
        return (
            <div className='sidebar'>
                {window.innerWidth < 768 ?
                    <div className="sidebar__header">
                        <i className="fas fa-bars icon" title="منو"></i>
                        <div className="sidebar__logo">
                            <img src={`../${IMAGES.LOGO}`} alt="ریکاب" />
                            <h1>ریکاب</h1>
                        </div>
                    </div>
                    :
                    null
                }
                {window.innerWidth < 768 ?
                    <input className="sidebar__control" type="checkbox" name="menu" id="side__control" />
                    :
                    null
                }
                <div className="sidebar__card">
                    <div className="card__header">
                        <div className="header__avatar">
                            <img src={`../${IMAGES.AVATAR}`} alt="عکس شما" />
                            <ProgressBar className="progressbar" value={60} size='8rem' />
                        </div>
                        <div className="header__detail">
                            <div className="detail__name">{this.state.firstName + ' ' + this.state.lastName}</div>
                            <button className="detail__exit">
                                <span>خروج از حساب</span>
                                <img src={`../${IMAGES.ICONS.EXIT}`} alt="خروج" />
                            </button>
                        </div>
                    </div>
                    <div className="card__welcome"><p>{`${this.state.firstName} عزیز خوش آمدید!`}</p></div>
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
}

export default SideBar;