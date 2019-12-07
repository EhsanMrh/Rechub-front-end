import React from 'react'
import { connect } from 'react-redux'
import {
    addSkill,
    addLang,
    addInterest,
    addCondition,
    deleteSkill,
    deleteLang,
    deleteInterest,
    deleteCondition
} from './action'
import AddModal from '../AddModal'

import './style.scss'

class SmallItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: undefined
        }

        this.showDate = this.showData.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this)

    }

    onOpenModal() {
        this.setState({ showModal: true })
    }
    onCloseModal() {
        this.setState({ showModal: undefined });
    }

    handleSubmitForm(e, items) {
        e.preventDefault()
        const data = new FormData(e.target);
        const formValue = []
        for (var value of data.values()) {
            formValue.push(value)
        }

        const checklist = this.props[items].filter(item => item.id === formValue[0])
        console.log(checklist)

        if (checklist.length === 0) {
            switch (items) {
                case 'skills':
                    this.props.addSkill({
                        id: formValue[0],
                        name: formValue[0]
                    })
                    break;
                case 'langs':
                    this.props.addLang({
                        id: formValue[0],
                        name: formValue[0],
                        image: true
                    })
                    break;

                case 'interests':
                    this.props.addInterest({
                        id: formValue[0],
                        name: formValue[0],
                        image: true
                    })
                    break;

                case 'conditions':
                    this.props.addCondition({
                        id: formValue[0],
                        name: formValue[0]
                    })
                    break;

                default:
                    break;
            }
        }

        this.setState({ showModal: undefined });
    }

    deleteItem(items, id) {
        switch (items) {
            case 'skills':
                this.props.deleteSkill(id)
                break;

            case 'langs':
                this.props.deleteLang(id)
                break;

            case 'interests':
                this.props.deleteInterest(id)
                break;

            case 'conditions':
                this.props.deleteCondition(id)
                break;

            default:
                break;
        }
    }


    showData(items) {
        return this.props[items].map((item) => {
            return (
                <div className="item" key={item.name}>
                    {item.image ?
                        <img src={`assets/images/${item.name}`} />
                        :
                        null
                    }
                    <div className="item__name">{item.name}</div>
                    <div className="item__delete"><button onClick={() => this.deleteItem(this.props.items, item.id)}><i className="fas fa-times icon" title="حذف"></i></button></div>
                </div>
            )
        })
    }

    renderForm(items) {
        return (
            <form onSubmit={(e) => {
                this.handleSubmitForm(e, this.props.items)
            }}>
                <input type="text" name={items} autoFocus />
                <button type="submit">افزودن</button>
            </form>
        )
    }

    render() {
        return (
            <div className="items">
                <div className="items__title">
                    <h2>{this.props.title}</h2>
                    <button onClick={this.onOpenModal}><i className="fas fa-plus-circle icon" title="افزودن"></i></button>
                </div>
                <div className="items__content">
                    {this.showData(this.props.items)}
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        skills: state.skills,
        langs: state.langs,
        interests: state.interests,
        conditions: state.conditions
    }
}

export default connect(mapStateToProps, {
    addSkill,
    addLang,
    addInterest,
    addCondition,
    deleteSkill,
    deleteLang,
    deleteInterest,
    deleteCondition
})(SmallItems);