import { useEffect, useState } from 'react'
import { useGeolocation } from 'rooks'
import fetchWeatherData from './APIs/fetchWeatherData'
import { LocationAndTemperature } from './Components/LocationAndTemperature/LocationAndTemperature'
import './App.scss'
import getElevationData from './APIs/getElevationData'

function App() {
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState('')
  const [elevation, setElevation] = useState('')
  const geoObj = useGeolocation()

  const updateWeatherData = () => {
    const locationCords = `${geoObj.lat},${geoObj.lng}`
    fetchWeatherData(locationCords)
      .then((res) => {
        setWeatherData(res.data)
      })
      .catch((err) => {
        console.log({ err })
      })
      .finally(() => {
        setLoading(false)
      })
    getElevationData(locationCords).then((res) => {
      setElevation(res.data.results[0].elevation)
    })
  }

  useEffect(() => {
    setLoading(true)
    if (geoObj) {
      updateWeatherData()
    }
  }, [geoObj])

  return (
    <div className='mainContainer'>
      {weatherData && (
        <LocationAndTemperature
          weatherData={weatherData}
          elevation={elevation}
        />
      )}
      {geoObj && geoObj.isError && (
        <h3>Provide Location permission to view temperature data</h3>
      )}
      {loading && <p>loading</p>}
    </div>
  )
}

export default App
