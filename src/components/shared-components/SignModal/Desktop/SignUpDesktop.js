import React from 'react';
import { TweenMax } from 'gsap';

import './SignDesktop.scss';

const PASSWORD_PATTERN = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

function onChangeSignDesktop(first, seconde) {
    TweenMax.to(`.sign-modal__desktop--sign${first}`, 1, { width: "70%" });
    TweenMax.to(`.sign${first}__inputs--input, .sign${seconde}__inputs--text`, 0, { opacity: 1, display: 'flex' });

    TweenMax.to(`.sign-modal__desktop--sign${seconde}`, 1, { width: '30%' });
    TweenMax.to(`.sign${seconde}__inputs--input, .sign${first}__inputs--text`, 0, { opacity: 0, display: 'none' });
}

function SignUpDesktop(props) {
    return (
        <div className="sign-modal__desktop--signup part" onClick={() => {
            onChangeSignDesktop('up', 'in')
        }}>
            <div className="signup__inputs">
                <div className="signup__inputs--text">
                    <h2>حساب کاربری نداری؟ً! پس یه دونه بساز:</h2>
                    <button className="button">ثبت نام</button>
                </div>
                <div className="signup__inputs--input">
                    <div className="input__header">
                        <h2>ثبت نام:</h2>
                    </div>
                    <form onSubmit={props.handleSignUp}>
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
                        <button type="submit" className="button">ثبت نام</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpDesktop;