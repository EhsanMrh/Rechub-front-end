import React from 'react'
import Rater from 'react-rater'
import { IMAGES } from '../../../../../../Paths'
import 'react-rater/lib/react-rater.scss'

import './style.scss'

class CountryArticle extends React.Component {
    render() {
        return (
            <section className="country-article">
                <div className="country-article__img"><img src={`/${IMAGES.COUNTRIES}${this.props.country}/articles/01.png`} alt="مقاله" /></div>
                <div className="country-article__content">
                    <div className="country-article__content--title"><h3>مهاجرت به کانادا</h3></div>
                    <div className="country-article__content--text">
                        <p>
                            مدت‌ها پیش آموختم که نباید با خوک کشتی گرفت، تو کثیف می‌شوی و مهم‌تر از آن که خوک از این کار لذت می‌برد.
                            جرج برنارد شاو
                            مدت‌ها پیش آموختم که نباید با  کشتی گرفت، تو کثیف می‌شوی و مهم‌تر از آن که خوک از این کار خوک <a href="#" title="somthing">لذت</a> می‌برد.
                            جرج برنارد شاو
                    </p>
                    </div>
                </div>
                <div className="country-article__rating" style={window.innerWidth<768?
                    { backgroundImage: `url(/${IMAGES.RATING_PATTERN_P})` }
                    :
                    { backgroundImage: `url(/${IMAGES.RATING_PATTERN_D})`}
                }>
                    <div className="rating__title">لطفا رای خود را با ستاره ها مشخص کنید:</div>
                    <div className="rating__starts">
                        <Rater
                            total={5}
                            rating={2}
                            onRate={({ rating }) => { console.log(rating) }}
                        />
                    </div>
                    <div></div>
                </div>
            </section>
        )
    }
}

export default CountryArticle;