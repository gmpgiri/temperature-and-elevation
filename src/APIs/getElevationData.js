import axios from 'axios'
import { elevationAPI } from './APIEndpoints'

const getElevationData = async (locations) => {
  const options = {
    method: 'GET',
    url: elevationAPI,
    params: { locations },
  }
  return axios.request(options)
}

export default getElevationData
