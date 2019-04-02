import  React from 'react';


import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_Key = '281058af96ec36f14d99744ebb17bfa5'

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}&units=metric`)
    const data = await api_call.json()
    console.log(data)
  }
  render() {
    return(
      <div>
        <Titles />
        <Form  getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App