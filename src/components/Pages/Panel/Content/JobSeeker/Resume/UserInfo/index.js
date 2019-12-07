import React from 'react'
import ProgressBar from '../../../../../../shared-components/ProgressBar'
import { IMAGES } from '../../../../../../../Paths'

import './style.scss'

class UserInfo extends React.Component {
    state = {
        showDetail: undefined,
        user: {
            situation: true,
            name: 'احسان فراهانی',
            birthday: 1398,
            sex: 'مرد',
            phone: '0261234567',
            mobile: '0912123456',
            email: 'ex@gmail.com',
            province: 'البرز',
            address: 'کرج - بالاترین نقطه شهر در بدترین وضعیت',
            aboutMe: 'به شدت محتاج زندگی و هوای تازه و برنامه نویسی درگیر باگ',
            percentage: 60
        }
    }

    render() {
        return (
            <div className="info">
                <div className="info__avatar">
                    <img src={`../${IMAGES.AVATAR}`} alt="عکس شما" />
                    <ProgressBar className="progressbar" value={this.state.user.percentage} size="12rem" />
                </div>
                <div className="info__content">
                    <div className="content__name">
                        <h2>{this.state.user.name}</h2>
                    </div>
                    <div className="content__describe">
                        <div className="describe__header">
                            <h3>{this.state.user.situation ? 'کارجو' : 'دفتر مهاجرتی'}</h3>
                            {window.innerWidth < 768 ?
                                <div className="show-detail">
                                    <span>مشاهده اطلاعات</span>
                                    <div className={this.state.showDetail ? 'rotate-arrow' : null}>
                                        <input onChange={(e) => {
                                            if (!this.state.showDetail && window.pageYOffset === 0) {
                                                window.scrollBy(0, 100);
                                            }
                                            this.setState({ showDetail: e.target.checked });
                                        }} className="show-more-detail" type="checkbox" name="" id="" />
                                        <i className="fas fa-chevron-down icon"></i>
                                    </div>
                                </div>
                                :
                                null
                            }

                        </div>
                        {this.state.showDetail || window.innerWidth > 768 ?
                            <div className="describe__more-details">
                                <button><i className="fas fa-pen icon"></i></button>
                                <div className="detail">
                                    <h4>تاریخ تولد:</h4>
                                    <p>{this.state.user.birthday}</p>
                                </div>
                                <div className="detail">
                                    <h4>جنسیت:</h4>
                                    <p>{this.state.user.sex}</p>
                                </div>
                                <div className="detail">
                                    <h4>تلفن:</h4>
                                    <p>{this.state.user.phone}</p>
                                </div>
                                <div className="detail">
                                    <h4>موبایل:</h4>
                                    <p>{this.state.user.mobile}</p>
                                </div>
                                <div className="detail">
                                    <h4>ایمیل:</h4>
                                    <p>{this.state.user.email}</p>
                                </div>
                                <div className="detail">
                                    <h4>استان:</h4>
                                    <p>{this.state.user.province}</p>
                                </div>
                                <div className="detail">
                                    <h4>آدرس:</h4>
                                    <p>{this.state.user.address}</p>
                                </div>
                            </div>
                            :
                            null
                        }
                        <div className="describe__about">
                            <h4>درباره من:</h4>
                            <p>{this.state.user.aboutMe}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;