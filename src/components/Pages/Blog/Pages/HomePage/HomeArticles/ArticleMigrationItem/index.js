import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGES } from '../../../../../../../Paths';

import './style.scss';

class ArticleMigrationItem extends React.PureComponent {
    render() {
        const type = this.props.type.toUpperCase();
        const image = IMAGES[type];

        return (
            <Link
                to={`/blog/${this.props.type}`}
                className="article-migration-item"
                style={
                    {
                        backgroundImage:
                            `linear-gradient(138deg, rgba(49, 101, 121, 0.5) , rgba(67, 19, 162, 0.5)),
                        url(${image})`
                    }}
            >
                <div className="article-migration-item__small-title">مهاجرت از طریق :</div>
                <div className="article-migration-item__large-title">سرمایه گذاری</div>
            </Link>
        )
    }
}

export default ArticleMigrationItem;