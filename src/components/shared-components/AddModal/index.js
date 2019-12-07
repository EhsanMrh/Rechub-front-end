import React from 'react'
import Modal from 'react-modal'

import './style.scss'

class AddModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={!!this.props.open}
                // isOpen={true}
                contentLabel="selected option"
                onRequestClose={this.props.onCloseModal}
                closeTimeoutMS={200}
                className="modal"
            >
                {this.props.form}
                <button onClick={this.props.onCloseModal}>خروج</button>
            </Modal>
        )
    }
}

export default AddModal ;