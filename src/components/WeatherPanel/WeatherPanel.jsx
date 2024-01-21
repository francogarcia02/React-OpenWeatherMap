import './WeatherPanel.css';
import React, { useState } from 'react';
import Form from './Bricks/Form/Form';
import Card from './Bricks/Card/Card';

const WeatherPanel = () =>{
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=15fb6130b3cdd2e2901970d9e6f35693&lang=es'
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=15fb6130b3cdd2e2901970d9e6f35693&lang=es'
    let urlCity = '&q='

    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState('')

    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        //Weather

        urlWeather = urlWeather + urlCity + loc
        fetch(urlWeather)
        .then(response=>{
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((weatherData)=>{
            console.log(weatherData)
            setWeather(weatherData)
        })
        .catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        //Forecast

        urlForecast = urlForecast + urlCity + loc
        fetch(urlForecast)
        .then(response=>{
            if(!response.ok) throw {response}
            return response.json();
        })
        .then((forecastData)=>{
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)
        })
        .catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        })
    }

    return(
        <React.Fragment className="container">
            <Form newLocation={getLocation}/>
            <Card
            showData={show}
            loadingData={loading}
            weather={weather}
            forecast={forecast}
            />
        </React.Fragment>
    )

}

export default WeatherPanel