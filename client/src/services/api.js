import axios from "axios";


const url = 'http://localhost:4000'
export const authenticateSignup = async (signupdata1) => {
    // const url = 'http://localhost:8000'
    try {
        return await axios.post(`${url}/users`, signupdata1);
        // return await axios.post(url, signupdata1);
    } catch (error) {
        console.log(error)
    }
}


export const authenticatelogin = async (logindata) => {
    try {
        return await axios.post(`${url}/users`, logindata);
        // return await axios.post(url, logindata);
    } catch (error) {
        console.log(error)
    }
}
export const writecode = async (codedata) => {
    try {
        return await axios.post(`${url}/write-code`, codedata);
        // return await axios.post(url, logindata);
    } catch (error) {
        console.log(error)
    }
}
export const submitcode = async () => {
    try {
         axios.get(`${url}/write-code`);
       
        // return await axios.post(url, logindata);
    } catch (error) {
        console.log(error)
    }
}
