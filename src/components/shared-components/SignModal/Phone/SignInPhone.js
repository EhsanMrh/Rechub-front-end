import React from 'react';
import { TweenMax } from 'gsap';

import './SignPhone.scss';

function onChangeSignPhone(first, seconde) {
    TweenMax.to(`.sign-modal__phone--sign${first}`, 0, { display: 'none' });
    TweenMax.to(`.sign-modal__phone--sign${seconde}`, 0, { display: 'block' });
}

function SignModalPhone(props) {
    return (
        <div className="sign-modal__phone--signin">
            <div className="modal__top">
                <h3>ورود:</h3>
            </div>
            <form className="modal__form" onSubmit={props.handleSignIn}>
                <div className="form__inputs">
                    <div>
                        <input
                            type="email"
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                            id=""
                            placeholder="ایمیل"
                            required
                            autoFocus
                        />
                        <div className="requirement">
                            invalid email
                        </div>
                    </div>
                    <div>
                        <input
                            type="password"
                            value={props.password}
                            onChange={(e) => props.setPassword(e.target.value)}
                            id=""
                            placeholder="رمز عبور"
                            required
                        />
                        <div className="requirement">
                            <p className="letter">حداقل یک حرف کوچک</p>
                            <p className="capital">حداقل یک حرف بزرگ</p>
                            <p className="number">حداقل یک عدد</p>
                            <p className="length">طول بیشتر از 8</p>
                        </div>
                    </div>
                    <div>
                        {props.error}
                    </div>
                </div>
                <div className="form__to-login">
                    <p>حساب نداری؟</p>
                    <button onClick={() => {
                        onChangeSignPhone('in', 'up')
                    }}>ثبت نام</button>
                </div>
                <button className="button" type="submit">ورود</button>
            </form>
        </div>
    )
}

export default SignModalPhone;