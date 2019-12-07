import React from 'react'

import './style.scss';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '139212183552-eukcj67fqeiilchctf61cc7fbql6m76n.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance() ;
                console.log('sing') ;                
            })
        })
    }

    render() {
        return (
            <div className="google-auth">
                <button onClick={() => {
                    this.auth.signIn()
                }} className="g-icon">
                    <img src="/assets/images/g-icon.png" alt="ثبت نام با گوگل" />
                </button>
            </div>
        )
    }
}

export default GoogleAuth;