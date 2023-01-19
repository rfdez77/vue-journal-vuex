
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDz0vUw1HLJGH80jHtNk58mx3B7sFWojF8'
    }
})


export default authApi


