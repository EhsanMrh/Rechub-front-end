import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGES } from '../../../../../../../Paths';

import './style.scss';

// Pure cause we dont want rerender item every time
class ArticleItem extends React.PureComponent {
    render() {
        return (
            <Link to={`/blog/${this.props.country}`} className="article-country-item" >
                <img src={`${IMAGES.COUNTRIES}${this.props.country}/${this.props.country}-flag.png`} alt={this.props.fname} className="article-country-item__image" />
                <div className="article-country-item__title">
                    <h3 className="article-country-item__title-text">ویزای {this.props.fname}</h3>
                </div>
            </Link>
        )
    }
}

export default ArticleItem;