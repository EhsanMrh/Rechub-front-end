import React from 'react';

import Header from './PanelHeader';
import Content from './Content'
import Footer from './PanelFooter';

const PanelPage = () => {
    return (
        <div className="App">
            <Header />
            <Content />
            {window.innerWidth < 768?
                <Footer />
                :
                null
            }
        </div>
    )
};

export default PanelPage ;