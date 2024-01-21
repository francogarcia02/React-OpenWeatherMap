import React from 'react';
import './Card.css';
import Spinner from './Spinner/Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear()
    let date = day + '/' + month + '/' + year

    let url = '';
    let iconUrl = '';

    let iconUrl3 = '';
    let iconUrl6 = '';
    let iconUrl9 = '';

    let forecastDate3 = '';
    let forecastDate6 = '';
    let forecastDate9 = '';

    if(loadingData){
        return(
            <div className="mx-auto">
                <Spinner/>
            </div>
        )
    }

    if(showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)

    }

    return(
        <div className="container p-3 mt-5">
            {showData===true
            ?
            <div className="mx-auto card bg-dark text-light">
                <div className="row g-0">
                    <div className="col-md-4">
                        <h3 className="card-title p-3 mx-auto">{weather.name}</h3>
                        <h5 className="card-date">{date}</h5>
                        <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                        <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                        <img className="img-fluid rounded-start" src='https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='ciudad'/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start p-2">
                            <h5 className="card-text">Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                            <h5 className="card-text">Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                            <h5 className="card-text">Sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                            <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                            <h5 className="card-text">Viento: {weather.wind.speed}m/s</h5>
                        </div>
                        <hr/>
                        <div className="row mt-2">
                            <div className="col columna">
                                <p>{forecastDate3}h</p>
                                <p className="description m-0"><img src={iconUrl3} alt='icon'/>{forecast.list[1].weather[0].description}</p>
                                <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                            </div>
                            <div className="col columna">
                                <p>{forecastDate6}h</p>
                                <p className="description m-0"><img src={iconUrl6} alt='icon'/>{forecast.list[2].weather[0].description}</p>
                                <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                            </div>
                            <div className="col columna">
                                <p>{forecastDate9}h</p>
                                <p className="description m-0"><img src={iconUrl9} alt='icon'/>{forecast.list[3].weather[0].description}</p>
                                <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <h2 className="mx-auto text-center">No hay datos</h2>
            }
        </div>
    )
}

export default Card