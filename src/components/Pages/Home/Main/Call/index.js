import React from 'react';
import { IMAGES } from '../../../../../Paths'

import './style.scss';

const Call = () => {
    return (
        <section className="call section">
            <div className="call__img">
                <img src={IMAGES.CALL_US} alt="تماس با تیم ما" />
            </div>
            <div className="call__items">
                <div className="call__title">
                    <h3>تماس با تیم ریکاپ</h3>
                </div>
                <div className="items__connect">
                    <div className="items__connect--call item">
                        <a href="tel:+" title="تماس با ما">
                            <span>
                                <i className="fas fa-phone icon"></i>
                            </span>
                            <p>026-32707354</p>
                        </a>
                    </div>
                    <div className="items__connect--linkedin item">
                        <a href="#" title="ما در لینکداین">
                            <span>
                                <i className="fab fa-linkedin-in icon"></i>
                            </span>
                            <p>026-32707354</p>
                        </a>
                    </div>
                    <div className="items__connect--instagram item">
                        <a href="#" title="ما در اینستاگرام">
                            <span>
                                <i className="fab fa-instagram icon"></i>
                            </span>
                            <p>026-32707354</p>
                        </a>
                    </div>
                    <div className="items__connect--mail item">
                        <a href="tel:+" title="ارسال ایمیل">
                            <span>
                                <i className="far fa-envelope icon"></i>
                            </span>
                            <p>026-32707354</p>
                        </a>
                    </div>
                </div>
                <div className="items__address item">
                    <a href="">
                        <span>
                            <i className="fas fa-map-marker-alt icon"></i>
                        </span>
                        <div>
                            ایران، کرج، سه راه گوهردشت، بلال2، پلاک 45
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Call;