import axios from "axios";
const BASEURL = 'https://gym-qjfy.onrender.com'



// const initializeInterceptors = () => {
//     // Request Interceptor
//     axios.interceptors.request.use((req) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             req.headers.Authorization = `Bearer ${token}`;
//         }
//         return req;
// });

//     // Response Interceptor
//     axios.interceptors.response.use((res) => {
//         console.log("+===== interCepter",res)
//         return res;
//     });
// };

// initializeInterceptors()


export const getReq = async (url) => {
    return axios.get(BASEURL + url)
        .catch((e) => {
            console.log(e);
            return e;
        })
}

export const postReq = async (url, data) => {

    return axios.post(BASEURL + url, data)
        .catch((e) => { console.log(e); return e })
}
export const putReq = async (url, data) => {

    return axios.put(BASEURL + url, data)
    // .catch((e) =>{ console.log(e);return e})
}
export const patchReq = async (url, data) => {

    return axios.patch(BASEURL + url, data)
    // .catch((e) =>{ console.log(e);return e})
}
export const deleteReq = async (url) => {

    return axios.delete(BASEURL + url)
    // .catch((e) =>{ console.log(e);return e})
}