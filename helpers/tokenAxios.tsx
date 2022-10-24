
import requestAxios from './axios';

function tokenAuth(token: string) {
    if(token)
    {
        requestAxios.defaults.headers.common['authorization'] = `Token  ${token}`;
    }else{
        delete requestAxios.defaults.headers.common['authorization'];
    }
}

export default tokenAuth;