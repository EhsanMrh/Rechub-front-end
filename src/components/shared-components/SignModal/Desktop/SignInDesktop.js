import React from 'react';
import { TweenMax } from 'gsap';

import './SignDesktop.scss';

function onChangeSignDesktop(first, seconde) {
    TweenMax.to(`.sign-modal__desktop--sign${first}`, 1, { width: "70%" });
    TweenMax.to(`.sign${first}__inputs--input, .sign${seconde}__inputs--text`, 0, { opacity: 1, display: 'flex' });

    TweenMax.to(`.sign-modal__desktop--sign${seconde}`, 1, { width: '30%' });
    TweenMax.to(`.sign${seconde}__inputs--input, .sign${first}__inputs--text`, 0, { opacity: 0, display: 'none' });
}

function SignInDesktop(props) {
    return (
        <div className="sign-modal__desktop--signin part" onClick={() => {
            onChangeSignDesktop('in', 'up')
        }}>
            <div className="signin__inputs">
                <div className="signin__inputs--text">
                    <h2>
                        از قبل حساب داری؟ اگر از قبل حساب کاربری ساختی ، از این قسمت ورود کنید:
                        </h2>
                    <button className="button">ورود</button>
                </div>
                <div className="signin__inputs--input">
                    <div className="input__header">
                        <h2>ورود:</h2>
                    </div>
                    <form onSubmit={props.handleSignIn}>
                        <div>
                            <input
                                className="input"
                                type="email"
                                value={props.email}
                                onChange={(e) => props.setEmail(e.target.value)}
                                placeholder="ایمیل"
                                required
                                autoFocus
                            />
                        </div>
                        <div>
                            <input
                                className="input"
                                type="password"
                                value={props.password}
                                onChange={(e) => props.setPassword(e.target.value)}
                                placeholder="رمز عبور"
                                required
                            />
                        </div>
                        <button type="submit" className="button" >ورود</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignInDesktop;