import { GiMountainCave } from 'react-icons/gi'
import './LocationAndTemperature.scss'

export const LocationAndTemperature = ({ weatherData, elevation }) => {
  const { location, current } = weatherData
  const { condition } = current

  return (
    <div className='locationAndTemperatureWrap'>
      <h2>{location.name}</h2>
      <div className='temperatureAndEleveationWrap'>
        <h4>{current.temp_c} °C </h4>
        {elevation && (
          <div className='elevationWrap'>
            <GiMountainCave />
            <p>{elevation}</p>
          </div>
        )}
      </div>
      {current && condition && (
        <>
          <img src={condition.icon} alt={`${condition.text} icon`} />
          <p>{condition.text}</p>
        </>
      )}
      <p>{location.localtime.slice(location.localtime.length - 5)}</p>
    </div>
  )
}
