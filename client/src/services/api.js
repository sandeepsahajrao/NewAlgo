import axios from "axios";


const url = 'http://localhost:8000'
export const authenticateSignup = async (signupdata1) => {
    // const url = 'http://localhost:8000'
    try {
        return await axios.post(`${url}/signup`, signupdata1);
    } catch (error) {
        console.log(error)
    }
}


export const authenticatelogin = async (logindata) => {
    try {
        return await axios.post(`${url}/login`, logindata);
    } catch (error) {
        console.log(error)
    }
}
