import axios from 'axios'


const baseUrl= 'http://challenge-react.alkemy.org'

const login= async(credentials={
    email:"challenge@alkemy.org",
    password:"react"
})=>{
    try {
        console.log(credentials)
        const auth= await axios.post(baseUrl,{...credentials})
        return auth;
    } catch (error) {
        console.log(error)
    }
}

const authService={
    login
}

export default authService