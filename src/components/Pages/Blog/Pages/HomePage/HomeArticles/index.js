import React from 'react';

import ArticleCountryItem from './ArticleCountryItem';
import ArticleMigrationItem from './ArticleMigrationItem';
import { IMAGES } from '../../../../../../Paths';

import './style.scss'

const HomeArticles = () => {
    return (
        <div className="home-articels">
            <div className="home-articles__countries">
                <h2 className="home-articles__countries-title">مقالات بر اساس کشورها</h2>
                <div className="home-articles__countries-country">
                    <ArticleCountryItem country="canada" fname="کانادا" />

                    <ArticleCountryItem country="germany" fname="آلمان" />

                    <ArticleCountryItem country="england" fname="انگلیس" />

                    <ArticleCountryItem country="australia" fname="استرالیا" />
                </div>
            </div>
            <div className="home-articles__migration">
                <h2 className="home-articles__migration-title">مقالات بر اساس نوع مهاجرت</h2>
                <div className="home-articles__migration-types">
                    <ArticleMigrationItem type='invesment' />
                    <ArticleMigrationItem type='job_opp' />
                </div>
            </div>
        </div>
    )
}

export default HomeArticles