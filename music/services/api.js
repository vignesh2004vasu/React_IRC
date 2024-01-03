import axios from 'axios'

const URL='http://localhost:3000'

const getSongs =()=> axios.get(`${URL}/songs`)

export {getSongs}