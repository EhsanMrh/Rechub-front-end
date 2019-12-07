import React from 'react'
import UserInfo from './UserInfo'
import LargeItem from '../../../../../shared-components/LargeItem'
import SmallItem from '../../../../../shared-components/SmallItem'

import "./style.scss";

const Resume = () => {
    return (
        <section className="resume">
            <UserInfo />
            <LargeItem name="edu" title="سوابق تحصیلی" dropdown={true} />
            <LargeItem name="work" title="سوابق کاری" dropdown={true} />
            <LargeItem name="license" title="مدارک زبان، فنی حرفه ای و ..." />
            <SmallItem items="skills" title="مهارت ها" />
            <SmallItem items="langs" title="توانایی های زبان خارجه" />
            <SmallItem items="interests" title="کشورهای مورد علاقه من" />
            <SmallItem items="conditions" title="شرایط مهاجرتی" />
            <button className="resume__submit">ذخیره</button>
        </section>
    )
}

export default Resume;