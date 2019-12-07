class Auth {
    static isAuth(){
        return Boolean(
            localStorage.getItem('token')
        )
    }

    static authorize(token){
        localStorage.setItem('token',token);
    }

    static logout(){
        localStorage.removeItem('token');
    }
    
    static getToken(){
        return localStorage.getItem('token')
    }
}

export default Auth ;