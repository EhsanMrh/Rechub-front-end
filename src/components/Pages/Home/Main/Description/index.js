import React from 'react'
import { TweenMax } from 'gsap'
import SignModal from '../../../../shared-components/SignModal';
import { IMAGES } from '../../../../../Paths'

import './style.scss';
import '../../../../shared-components/Button/style.scss'


class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSignModal: undefined
        }
        this.onOpenSignModal = this.onOpenSignModal.bind(this);
        this.onCloseSignModal = this.onCloseSignModal.bind(this);
    }


    onOpenSignModal() {
        this.setState({ showSignModal: true })
    }
    onCloseSignModal() {
        this.setState({ showSignModal: undefined });
    }

    onShowSeconde(click) {
        TweenMax.to('.description__content--seconde', 0, { display: 'flex' })
        TweenMax.to(`.seconde__${click}`, 0, { display: 'flex' });
        TweenMax.to(`.seconde__${click}`, 1, { opacity: 1 });
        TweenMax.to('.description__content--first', 0, { display: 'none' });
    }

    onBackSeconde() {
        TweenMax.to('.description__content--seconde', 0, { display: 'none' })
        TweenMax.to(`.seconde__immigration`, 0, { display: 'none', opacity: 0});
        TweenMax.to(`.seconde__immigrant`, 0, { display: 'none', opacity: 0});
        TweenMax.to('.description__content--first', 0, { display: 'flex' });
    }

    render() {
        return (
            <section className="description section">
                <h2>خدمت ریکاب به شما</h2>
                <h3>لطفا نوع کاربری خود را انتخاب کنید</h3>
                <div className="description__content">
                    <div className="description__content--first">
                        <div className="first__immigration">
                            <div className="work-img">
                                <img src={IMAGES.RECRUMENTARY_OFFICE} alt="دفتر مهاجرتی" />
                            </div>
                            <button className="button" onClick={() => {
                                this.onShowSeconde('immigration');
                            }}>دفتر مهاجرتی هستیم</button>
                        </div>
                        <div className="first__immigrant">
                            <div className="work-img">
                                <img src={IMAGES.JOB_SEEKER} alt="کارجو" />
                            </div>
                            <button className="button" onClick={() => {
                                this.onShowSeconde('immigrant')
                            }} >کارجو هستم</button>
                        </div>
                    </div>
                    <div className="description__content--seconde">
                        <div className="seconde__immigration">
                            <div className="detail__content">
                                <div className="content__header">
                                    <button onClick={this.onBackSeconde}>
                                        <i className="fas fa-arrow-left" title="بازگشت"></i>
                                    </button>
                                    <h4>دفتر مهاجرتی عزیز خوش آمدید</h4>
                                </div>
                                <p>
                                    در ریکاب به سریع ترین حالت ممکن شغل مورد نطر خود را در کشورهای درجه یک دنیا پیدا کنید. کافیه روی دکمه زیر کلیک کنید:
                                </p>
                                <div className="detail__button" >
                                    <button className="button" onClick={this.onOpenSignModal} >ثبت نام</button>
                                </div>
                            </div>
                            <div className="detail__img">
                                <img src={IMAGES.RECRUMENTARY_OFFICE} alt="دفتر مهاجرتی" />
                            </div>
                        </div>
                        <div className="seconde__immigrant">
                            <div className="detail__content">
                                <div className="content__header">
                                    <button onClick={this.onBackSeconde}>
                                        <i class="fas fa-arrow-left" title="بازگشت"></i>
                                    </button>
                                    <h4>کارجو عزیز خوش آمدید</h4>
                                </div>
                                <p>
                                    در ریکاب به سریع ترین حالت ممکن شغل مورد نطر خود را در کشورهای درجه یک دنیا پیدا کنید. کافیه روی دکمه زیر کلیک کنید:
                                </p>
                                <div className="detail__button" >
                                    <button className="button" onClick={this.onOpenSignModal} >ثبت نام</button>
                                </div>
                            </div>
                            <div className="detail__img">
                                <img src={IMAGES.JOB_SEEKER} alt="دفتر مهاجرتی" />
                            </div>
                        </div>
                    </div>
                    <SignModal
                        open={this.state.showSignModal}
                        onCloseSignModal={this.onCloseSignModal}
                    />
                </div>
            </section>
        )
    }
}

export default Description;