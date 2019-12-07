import React from 'react';

import CountryHeaderImage from './CountryHeaderImage'
import CountryHeaderDescribe from './CountryHeaderDescribe';

import { IMAGES } from '../../../../../../Paths';

import './style.scss';

function CountryHeader(props) {
    return (
        <div className="country-header section" style={window.innerWidth<768?
            {backgroundImage: `url(/${IMAGES.COUNTRIES}${props.country}/${props.country}-header-P.png)`}
            :
            {backgroundImage: `url(/${IMAGES.COUNTRIES}${props.country}/${props.country}-header-D.png)`}
        }>
            <div className="country-header__image">
                <CountryHeaderImage pname={props.pname} country={props.country} />
            </div>
            <div className="country-header__describe">
                <CountryHeaderDescribe />
            </div>
        </div>
    )
}

export default CountryHeader;