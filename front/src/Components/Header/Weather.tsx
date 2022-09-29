import React from 'react';
import { Card, CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import moment from 'moment';




const Weather = (weatherData: any) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader className="header">{weatherData.name}</CardHeader>
                    <p>Temprature: {weatherData.main.temp} &deg;C</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Description: {weatherData.weather[0].main}</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Day: {moment().format('dddd')}</p>
                    <p>Date: {moment().format('LL')}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Weather;