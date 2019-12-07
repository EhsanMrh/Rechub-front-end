import React from 'react'
import { connect } from 'react-redux'
import AddModal from '../../../../shared-components/AddModal'

import './style.scss'

class PersonalLicense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: undefined
        }

        this.showDate = this.showData.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    onOpenModal() {
        this.setState({ showModal: true })
    }
    onCloseModal() {
        this.setState({ showModal: undefined });
    }

    renderForm() {
        return (
            <form>
                <input type="file" name='pic' />
                <button type="submit">افزودن</button>
            </form>
        )
    }

    showData() {

    }

    render() {
        return (
            <div className="personal">
                <div className="items__title">
                    <h2>{this.props.title}</h2>
                    <button onClick={this.onOpenModal}><img src="/assets/images/plus-icon.svg" alt="افزودن" /></button>
                </div>
                <div className="items__content">
                    {this.showData()}
                </div>
                <AddModal
                    open={this.state.showModal}
                    onCloseModal={this.onCloseModal}
                    form={this.renderForm(this.props.items)}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        id: state.id
    }
}

export default connect(mapStatetoProps)(PersonalLicense);