import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import uuid from 'uuid';
import "react-persian-calendar-date-picker/lib/DatePicker.css";
import DatePicker from "react-persian-calendar-date-picker";

import {
    addEdu,
    deleteEdu,
    addWork,
    deleteWork,
    addLicense,
    deleteLicense
} from './action';
import AddModal from '../AddModal';

import './style.scss';

Modal.setAppElement('#root');

function LargeItem(props) {

    const [showModal, setShowModal] = useState(undefined);
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });

    const [data, setData] = useState({
        edu: {
            uni: { 'tehran': 'تهران', 'sharif': 'شریف' },
            reshte: { 'se': 'کامپیوتر' }
        },
        work: {
            place: { 'google': 'گوگل', 'facebook': 'فیسبوک' },
            job: { 'fe': 'فرانت' }
        }
    })


    function handleSubmitForm(e) {
        e.preventDefault()
        const data = new FormData(e.target);
        const formValue = []
        for (var value of data.values()) {
            formValue.push(value)
        }


        switch (props.name) {
            case 'edu':
                props.addEdu({
                    id: uuid(),
                    uni: formValue[0],
                    reshte: formValue[1],
                    date: selectedDayRange
                })
                break;

            case 'work':
                props.addWork({
                    id: uuid(),
                    place: formValue[0],
                    job: formValue[1],
                    date: selectedDayRange
                })
                break;

            case 'license':
                props.addLicense({
                    id: uuid(),
                    title: formValue[0],
                    place: formValue[1],
                    date: selectedDayRange
                })
                break;

            default:
                break;
        }

        setShowModal(undefined);
    }

    function showFormatDate(date) {
        return `${date.year}/${date.month}/${date.day}`
    }

    function showData() {
        if (props.name === 'edu') {
            return props.educations.map((edu, index) => {
                return (
                    <div className="items__item" key={index}>
                        <div className="item__content">
                            <div className="content__title">
                                <span className="title__main">{data['edu']['uni'][edu.uni]}</span>
                            </div>
                            <div className="content__subtitle">
                                <span>{data['edu']['reshte'][edu.reshte]}</span>
                                <span>{`${showFormatDate(edu.date['from'])} تا ${showFormatDate(edu.date['to'])}`}</span>
                            </div>
                        </div>
                        <div className="item__delete"><button onClick={() => props.deleteEdu(edu.id)}><i className="fas fa-trash-alt icon" title="حذف"></i></button></div>
                    </div>
                )
            })
        } else if (props.name === 'work') {
            return props.works.map((work, index) => {
                return (
                    <div className="items__item" key={index}>
                        <div className="item__content">
                            <div className="content__title">
                                <span className="title__main">{data['work']['place'][work.place]}</span>
                            </div>
                            <div className="content__subtitle">
                                <span>{data['work']['job'][work.job]}</span>
                                <span>{`${showFormatDate(work.date['from'])} تا ${showFormatDate(work.date['to'])}`}</span>
                            </div>
                        </div>
                        <div className="item__delete"><button onClick={() => props.deleteWork(work.id)}><i className="fas fa-trash-alt icon" title="حذف"></i></button></div>
                    </div>
                )
            })
        } else if (props.name === 'license') {
            return props.licenses.map((license, index) => {
                return (
                    <div className="items__item" key={index}>
                        <div className="item__content">
                            <div className="content__title">
                                <span className="title__main">{license.title}</span>
                            </div>
                            <div className="content__subtitle">
                                <span>{license.place}</span>
                                <span>{`${showFormatDate(license.date['from'])} تا ${showFormatDate(license.date['to'])}`}</span>
                            </div>
                        </div>
                        <div className="item__delete"><button onClick={() => props.deleteLicense(license.id)}><i className="fas fa-trash-alt icon" title="حذف"></i></button></div>
                    </div>
                )
            })
        }
    }

    function showDropDown(newData) {
        const opt = []

        for (let uni in newData) {
            opt.push(
                <option value={uni} key={uni}>{newData[uni]}</option>
            )
        }

        return opt
    }

    function renderForm() {
        return (
            <form onSubmit={handleSubmitForm}>
                {props.dropdown ?
                    <div>
                        <select name={Object.keys(data[props.name])[0]} id="">
                            {showDropDown(data[props.name][Object.keys(data[props.name])[0]])}
                        </select>
                        <select name={Object.keys(data[props.name])[1]} id="">
                            {showDropDown(data[props.name][Object.keys(data[props.name])[1]])}
                        </select>
                    </div>
                    :
                    <div>
                        <input type="text" name="title" placeholder="عنوان مدرک" required autoFocus />
                        <input type="text" name="place" placeholder="صادر کننده مدرک" required />
                    </div>
                }

                <DatePicker
                    selectedDayRange={selectedDayRange}
                    onChange={setSelectedDayRange}
                    inputPlaceholder="انتخاب روزهای نمایش"
                    isDayRange
                />

                {selectedDayRange['from'] !== null && selectedDayRange['to'] !== null?<button type="submit">افزودن</button>:null}
                
            </form>
        )
    }

    return (
        <div className="large-item">
            <div className="large-item__title">
                <h2>{props.title}</h2>
                <button onClick={() => setShowModal(true)}><i className="fas fa-plus-circle icon" title="افزودن"></i></button>
            </div>
            <div className="large-item__items">
                {showData()}
            </div>
            <AddModal
                open={showModal}
                onCloseModal={() => setShowModal(false)}
                form={renderForm()}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        educations: state.educations,
        works: state.works,
        licenses: state.licenses
    }
}

export default connect(mapStateToProps, {
    addEdu,
    deleteEdu,
    addWork,
    deleteWork,
    addLicense,
    deleteLicense
})(LargeItem);