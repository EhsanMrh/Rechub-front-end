import React from 'react'

import HomeHeader from './HomeHeader'
import HomeArticles from './HomeArticles'

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <HomeHeader />
                <HomeArticles />
            </div>
        )
    }
}

export default HomePage