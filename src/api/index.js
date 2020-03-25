import request from '../utils/request';
const login=function(data) {
    return request({
        url: '',
        method: 'post',
        data
    })
}
const ajax={
    login:login
}

export default ajax;
