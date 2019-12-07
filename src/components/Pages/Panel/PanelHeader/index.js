import React from 'react'
import Modal from 'react-modal'
import { IMAGES } from '../../../../Paths'

import './style.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: undefined
        }

        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onCloseModal() {
        this.setState({ showModal: undefined })
    }

    render() {
        return (
            <header className="panel-header" style={window.innerWidth<768?
                {backgroundImage:`url(../${IMAGES.PANEL_HEADER_P})`}
                :
                {backgroundImage:`url(../${IMAGES.PANEL_HEADER_P})`}
            }>
                <button className="panel-header__setting" onClick={() => {
                    this.setState({ showModal: true })
                }}>
                    <i className="fas fa-cog icon"></i>
                </button>
                <div className="panel-header__wallet">
                    <button><i className="fas fa-plus-circle icon"></i></button>
                    <span className="amount">100m</span>
                    <span className="dollar-sign"><i className="fas fa-dollar-sign icon"></i></span>
                </div>
                <Modal
                    isOpen={!!this.state.showModal}
                    // isOpen={true}
                    contentLabel="selected option"
                    onRequestClose={this.onCloseModal}
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <div className="setting">
                        <div className="setting__header">
                            <img src="/assets/images/setting-icon.svg" alt="تنظیمات"/>
                            <span>تنظیمات حساب</span>
                            <button onClick={this.onCloseModal}><img src="/assets/images/x-icon.svg" alt="بستن"/></button>
                        </div>
                        <div className="setting__items">
                            <button className="setting__items--item">تغییر گذرواژه</button>
                            <button className="setting__items--item">درخواست تیک آبی</button>
                            <button className="setting__items--item">ارتباط با پشتیبان</button>
                            <button className="setting__items--item">حذف حساب کاربری</button>
                        </div>
                    </div>
                </Modal>
            </header>
        )
    }
}

export default Header;