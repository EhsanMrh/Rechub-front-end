import axios from 'axios';
import Auth from './Auth';

class Ajax {
  static post(url, parameters) {
    const token = Auth.getToken() ;

    let header = {}

    let body = {
      username: 'javad',
      password: '1234',
      data: parameters
    }

    if(token) {
      header = {
        'Access-Control-Allow-Origin': true,
        token: token,
      }
    } else {
      header = {
        'Access-Control-Allow-Origin': true,
      }
    }

    return axios({
      method: 'post',
      url: url,
      header: header,
      data: body
    })
  }
}

export default Ajax ;


// import axios from 'axios';
// import Auth from './Auth';

// class Ajax{
//   static get(url, parameters = {}){
//     const token = Auth.getToken();
//     const parsedParameters = this.dataToParam(parameters);
//     let headers = {};
//     if(token){
//       headers = {
//         Authorization: `Token ${token}`,
//       }
//     }
//     return axios.get(`${url}${parsedParameters}`, { 
//       headers
//     });
//   }

//   static post(url, parameters){
//     const token = Auth.getToken();
//     let headers = {};
//     if(token){
//       headers = {
//         Authorization: `Token ${token}`,
//       }
//     }
//     return axios.post(url, parameters, { 
//       headers
//     });
//   }

//   static dataToParam(data) {
//     let params = '?';
//     Object.keys(data).forEach((itemKey) => {
//       if(!data[itemKey]) return;
//       params += `${itemKey}=${encodeURIComponent(data[itemKey])}&`;
//     });
//     params = params.substr(0, params.length - 1);
//     return params;
//   }
// }

// export default Ajax;