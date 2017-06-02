//making a request to server, so import axios
import axios from 'axios';

export function login(data){
  return dispatch  => {
    return axios.post('/api/auth', data);
  }
}
