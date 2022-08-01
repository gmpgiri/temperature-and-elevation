import { GiMountainCave } from 'react-icons/gi'
import './LocationAndTemperature.scss'

export const LocationAndTemperature = ({ weatherData, elevation }) => {
  const { location, current } = weatherData
  const { condition } = current

  return (
    <div className='locationAndTemperatureWrap'>
      {elevation && (
        <div className='elevationWrap'>
          <GiMountainCave />
          <p>{elevation}</p>
        </div>
      )}
      <h2>{location.name}</h2>
      <p>{location.localtime.slice(location.localtime.length - 5)}</p>
      {condition && (
        <>
          <img src={condition.icon} alt={`${condition.text} icon`} />
          <p>{condition.text}</p>
        </>
      )}
    </div>
  )
}
