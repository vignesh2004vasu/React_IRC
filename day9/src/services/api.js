import axios from 'axios'

const URL='http://localhost:3000'

const getUser =()=> axios.get(`${URL}/users`)

export {getUser}