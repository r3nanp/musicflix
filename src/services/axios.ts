import axios from 'axios'

const api = axios.create({
  baseURL: 'https://renanflix.herokuapp.com',
})

export default api