import React from 'react';
import { Link } from 'react-router-dom';
import SignModal from '../../../shared-components/SignModal';
import { IMAGES } from '../../../../Paths'

import './style.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignModal: undefined
        }

        this.onOpenSignModal = this.onOpenSignModal.bind(this);
        this.onCloseSignModal = this.onCloseSignModal.bind(this);
    }


    onOpenSignModal() {
        this.setState({ showSignModal: true });
    }
    onCloseSignModal() {
        this.setState({ showSignModal: undefined });
    }

    render() {
        return (
            <header className="home-header section">
                <div className="home-header__top">
                    <Link to="/" className="home-header__top--logo">
                        <img src={IMAGES.LOGO} alt="" />
                        <div className="text-logo">ریکاب</div>
                    </Link>
                    <div className="home-header__top--button">
                        <button className="button" onClick={() => {
                            this.onOpenSignModal();
                        }}>ورود/ثبت نام</button>
                    </div>
                </div>

                <div className="home-header__info">
                    <div className="info__bg" 
                        style={window.innerWidth<768? 
                            {backgroundImage: `url(${IMAGES.HOME_HEADER_P})`}
                            :
                            {backgroundImage: `url(${IMAGES.HOME_HEADER_D})`}
                        }
                    >
                    </div>
                    <div className="info__content">
                        <div>
                            <h2>
                                تنها بستر معرفی کاریابی بین المللی
                    </h2>
                            <h3>
                                یک بستر امن و درآمدزا جهت معرفی کارجویان
                                به کاریابی های بین المللی به شکل دیجیتال
                    </h3>
                        </div>

                        <div className="info__more">
                            <button className="button">معرفی بیشتر...</button>
                        </div>
                    </div>
                </div>
                <SignModal
                    open={this.state.showSignModal}
                    onCloseSignModal={this.onCloseSignModal}
                />
            </header>
        )
    }
}

export default Header;