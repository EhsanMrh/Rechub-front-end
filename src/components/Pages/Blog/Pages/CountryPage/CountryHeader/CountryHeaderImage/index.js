import React from 'react';

import { IMAGES } from '../../../../../../../Paths';

import "./style.scss";

function CountryHeaderImage(props) {
    return (
        <div className="country-header-image">
            <div className="country-header-image__avatar">
                <img src={`/${IMAGES.COUNTRIES}${props.country}/${props.country}-title.png`} className="country-header-image__avatar-img" alt=""/>
            </div>
            <div className="country-header-image__text"><h2>مهاجرت به {props.pname}</h2></div>
        </div>
    )
}

export default CountryHeaderImage;