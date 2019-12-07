import React from 'react'
import { IMAGES } from '../../../../Paths'

import './style.scss'

class NewsLetters extends React.PureComponent {
    render() {
        return (
            <div className="newsletters" style={window.innerWidth<768?
                    { backgroundImage: `linear-gradient(138deg, rgba(49, 101, 121, 0.5) , rgba(67, 19, 162, 0.5)), url(/${IMAGES.NEWSLETTERS_P})` }
                    :
                    { backgroundImage: `linear-gradient(138deg, rgba(49, 101, 121, 0.5) , rgba(67, 19, 162, 0.5)), url(/${IMAGES.NEWSLETTERS_D})` }
                }>
                <div className="newsletters__content">
                    <p>اگر مایل به دریافت مقالات و یا فرصت های مهاجرتی هستید، ایمیل خود را وارد نمائید:</p>
                    <form action="">
                        <input type="email" name="user-email" id="" placeholder="ایمیل شما" required />
                        <button type="submit">ثبت ایمیل</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewsLetters;