import React from 'react';
import { Route,Switch } from 'react-router-dom'

import HomePage from './Pages/HomePage';
import CountryPage from './Pages/CountryPage';
import BlogNavBar from './BlogNavBar';
import BlogSideBar from './BlogSideBar';
import NewsLetters from './NewsLetters';
import Tags from './Tags';
import Footer from './Footer';


function BlogPage() {
    return (
        <div>
            <Route path="/blog" component={BlogNavBar} exact/>
            <BlogSideBar />
            <Switch >
                <Route path="/blog" component={HomePage} exact />
                <Route path="/blog/canada" render={() => <CountryPage country="canada" pname="کانادا" />} />
            </Switch>
            <NewsLetters />
            <Tags />
            <Footer />
        </div>
    )
}

export default BlogPage;