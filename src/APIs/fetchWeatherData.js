import axios from 'axios'
import { weatherAPI } from './APIEndpoints'

const fetchWeatherData = async (location = 'nagercoil') => {
  const options = {
    method: 'GET',
    url: weatherAPI,
    params: { q: location },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }
  return axios.request(options)
}

export default fetchWeatherData
