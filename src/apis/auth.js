import { loginEndpoint, signupEndpoint } from './endpoints';


import Ajax from '../helpers/Ajax';

export const login = (email,password) => Ajax.post(loginEndpoint, { email,password });
export const signup = (username, email, password) => Ajax.post(signupEndpoint, { username, email,password });