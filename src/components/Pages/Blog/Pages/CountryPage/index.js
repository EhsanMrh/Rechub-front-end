import React from 'react'
import CountryHeader from './CountryHeader'
import CountryShareUs from './CountryShareUs'
import CountryArticle from './CountryArticle'


class CountryPage extends React.PureComponent {
    render() {
        return (
            <div>
                <CountryHeader country={this.props.country} pname={this.props.pname} />
                <CountryShareUs />
                <CountryArticle country={this.props.country} pname={this.props.pname} />
            </div>
        )
    }
}

export default CountryPage;