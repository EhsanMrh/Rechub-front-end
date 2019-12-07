import React from 'react';
import { TweenMax } from 'gsap';

import './SignPhone.scss';

const PASSWORD_PATTERN = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

function onChangeSignPhone(first, seconde) {
    TweenMax.to(`.sign-modal__phone--sign${first}`, 0, { display: 'none' });
    TweenMax.to(`.sign-modal__phone--sign${seconde}`, 0, { display: 'block' });
}

function SignUpPhone(props) {
    return (
        <div className="sign-modal__phone--signup">
            <div className="modal__top">
                <h3>ثبت نام:</h3>
            </div>
            <form className="modal__form" onSubmit={props.handleSignUp}>
                <div className="form__inputs">
                    <div>
                        <input
                            type="text"
                            value={props.username}
                            onChange={(e) => props.setUsername(e.target.value)}
                            placeholder="نام کاربری"
                            required
                            autoFocus
                        />
                        <div className="requirement">
                            نام کاربری نامعتبر است
                                    </div>
                    </div>
                    <div>
                        <input
                            type="email"
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                            placeholder="ایمیل"
                            required
                        />
                        <div className="requirement">
                            ایمیل نامعتبر است
                                    </div>
                    </div>
                    <div>
                        <input
                            pattern={PASSWORD_PATTERN}
                            type="password"
                            value={props.password}
                            onChange={(e) => props.setPassword(e.target.value)}
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
                </div>
                <div className="form__to-login">
                    <p>از قبل حساب داری؟</p>
                    <button onClick={() => {
                        onChangeSignPhone('up', 'in');
                    }}>ورود</button>
                </div>
                <button className="button" type="submit">ثبت نام</button>
            </form>
        </div>

    )
}

export default SignUpPhone;