import React, { useState } from 'react';
import Modal from 'react-modal';
import Auth from '../../../helpers/Auth';
// import GoogleAuth from '../GoogleAuth';
import { login, signup } from '../../../apis/auth';

import SignInPhone from './Phone/SignInPhone';
import SignUpPhone from './Phone/SignUpPhone';
import SignInDesktop from './Desktop/SignInDesktop';
import SignUpDesktop from './Desktop/SignUpDesktop';

import './style.scss';

Modal.setAppElement('#root')

function SignModal(props) {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    async function handleSignIn(e) {
        e.preventDefault();

        //Ajax code for SignIn
        await login(username, password)
            .then(res => {
                // Set Token
                // Auth.authorize(res);

                // To Close SignModal
                props.onCloseSignModal();
            })
            .catch(err => {
                console.log(err);
                setError('مشکلی رخ داده است. لطفادوباره تلاش کنید...');
            })
    }

    async function handleSignUp(e) {
        e.preventDefault();

        //Ajax code for SignIn
        await signup(username, email, password)
            .then(res => {
                // Set Auth
                // Auth.authorize(res);

                // To Close SignModal
                props.onCloseSignModal();
            })
            .catch(err => {
                console.log(err);
                setError('مشکلی رخ داده است. لطفادوباره تلاش کنید...');
            })
    }

    return (
        <Modal
            isOpen={!!props.open}
            contentLabel="selected option"
            onRequestClose={props.onCloseSignModal}
            closeTimeoutMS={200}
            className="sign-modal"
        >
            <button className="exit-modal" onClick={props.onCloseSignModal}>
                <i class="fas fa-times icon"></i>
            </button>
            {window.innerWidth < 768 ?
                (<div className="sign-modal__phone">
                    <SignUpPhone
                        handleSignUp={handleSignUp}
                        username={username}
                        setUsername={setUsername}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        error={error}
                    />

                    <SignInPhone
                        handleSignIn={handleSignIn}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />
                </div>)
                :
                (<div className="sign-modal__desktop">
                    <SignInDesktop
                        handleSignIn={handleSignIn}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />
                    <SignUpDesktop
                        handleSignUp={handleSignUp}
                        username={username}
                        setUsername={setUsername}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        error={error}
                    />
                </div>)
            }
        </Modal>
    )
}

export default SignModal;