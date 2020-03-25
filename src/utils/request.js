import axios from 'axios';

const ajax = axios.create({
    // process.env.NODE_ENV === 'development', //来判断是否开发环境
     headers:{},
     baseURL: '',
    timeout: 5000
});

ajax.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

ajax.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default ajax;
