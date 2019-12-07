import React from 'react'

import './style.scss'

class CountryShareUs extends React.PureComponent {
    componentDidMount() {
        const showMore = document.getElementById('show-more');
        const more = document.querySelector('.country-share-us__more');
        window.addEventListener('scroll', () => {
            if (window.innerWidth> 768) {
                more.style.width = '0'
                more.style.opacity = '0'
            }
            showMore.checked = false
        })
    }

    render() {
        return (
            <section className="country-share-us">
                <div className="country-share-us__links">
                    <button className="item links__link--first"><i className="fab fa-linkedin-in icon"></i></button>
                    <button className="item links__link--first"><i className="fab fa-instagram icon"></i></button>
                    <button className="item links__link--first"><i className="fab fa-telegram-plane icon"></i></button>
                    <div className="item links__show-more ">
                        <input type="checkbox" name="more" id="show-more" onChange={(e) => {
                            const more = document.querySelector('.country-share-us__more');
                            if (e.target.checked) {
                                if (window.innerWidth < 768) {
                                    more.style.top = '99%'
                                } else {
                                    more.style.width = '23.4rem'
                                    more.style.opacity = '1'
                                }
                            } else {
                                if (window.innerWidth < 768) {
                                    more.style.top = '0'
                                } else {
                                    more.style.width = '0'
                                    more.style.opacity = '0'
                                }
                            }
                        }} />
                        <i className="fas fa-ellipsis-h icon"></i>
                    </div>
                </div>
                <div className="country-share-us__more">
                    <button className="item links__link--seconde"><i className="fab fa-whatsapp icon"></i></button>
                    <button className="item links__link--seconde"><i className="far fa-envelope icon"></i></button>
                    <button className="item links__link--seconde"><i className="far fa-envelope icon"></i></button>
                    <button className="item links__link--seconde"><i className="far fa-envelope icon"></i></button>
                </div>
            </section>
        )
    }
}

export default CountryShareUs;