import React from 'react';
import { TweenMax } from 'gsap/TweenMax';
import { IMAGES } from '../../../../../Paths'

import './style.scss'

class Feature extends React.Component {
    render() {
        return (
            <section className="feature section">
                <div className="feature__cards">
                    <div className="card-container network">
                        <div className="base-card cards__card--front" onClick={(e) => {
                            TweenMax.to('.network', 0.5, { transform: 'rotateY(180deg) scaleY(1.1)' })
                        }}>
                            <img src={IMAGES.ICONS.F_NETWORK} alt="یکپارچه" />
                            <h2>یکپارچه</h2>
                        </div>
                        <div className="base-card cards__card--back" onClick={(e) => {
                            TweenMax.to('.network', 0.5, { transform: 'rotate(0)' })
                        }}>
                            <div className="back__header">
                                <img src={IMAGES.ICONS.F_NETWORK} alt="یکپارچه" />
                                <h2>یکپارچه</h2>
                            </div>
                            <div className="back__content">
                                <p>
                                    شما در ریکاپ به راحتی میتوانید میلیون ها درآمد داشته باشید.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container money">
                        <div className="base-card cards__card--front" onClick={(e) => {
                            TweenMax.to('.money', 0.5, { transform: 'rotateY(180deg) scaleY(1.1)' })
                        }}>
                            <img src={IMAGES.ICONS.F_MONEY} alt="سود و درآمد" />
                            <h2>سود و درآمد</h2>
                        </div>
                        <div className="base-card cards__card--back" onClick={(e) => {
                            TweenMax.to('.money', 0.5, { transform: 'rotate(0)' })
                        }}>
                            <div className="back__header">
                                <img src={IMAGES.ICONS.F_MONEY} alt="سود و درآمد" />
                                <h2>سود و درآمد</h2>
                            </div>
                            <div className="back__content">
                                <p>
                                    شما در ریکاپ به راحتی میتوانید میلیون ها درآمد داشته باشید.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container security">
                        <div className="base-card cards__card--front" onClick={(e) => {
                            TweenMax.to('.security', 0.5, { transform: 'rotateY(180deg) scaleY(1.1)' })
                        }}>
                            <img src={IMAGES.ICONS.F_SECURITY} alt="امنیت" />
                            <h2>امنیت</h2>
                        </div>
                        <div className="base-card cards__card--back" onClick={(e) => {
                            TweenMax.to('.security', 0.5, { transform: 'rotate(0)' })
                        }}>
                            <div className="back__header">
                                <img src={IMAGES.ICONS.F_SECURITY} alt="امنیت" />
                                <h2>امنیت</h2>
                            </div>
                            <div className="back__content">
                                <p>
                                    شما در ریکاپ به راحتی میتوانید میلیون ها درآمد داشته باشید.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;

