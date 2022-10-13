import React from 'react';
import { useState, useEffect } from 'react';
import Weather from './../Weather/index';
import { Grid } from '@mui/material';

//var REACT_APP_API_URL ="68fd4ac89d4f7f496963d98973a4583d";
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
//http://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}
const WeatherMap = (weatherData: any,) => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [location, setLocation] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             setLat(position.coords.latitude);
    //             setLong(position.coords.longitude);
    //         })

    //         //await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //         await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=68fd4ac89d4f7f496963d98973a4583d`)
    //             .then(res => res.json())
    //             .then(result => {
    //                 setData(result);
    //                 console.log(result);
    //             });
    //     }
    //     fetchData();
    // }, [lat, long])

    //     navigator.geolocation.getCurrentPosition( (position) => {
    //         setLat(position.coords.latitude)
    //         setLong(position.coords.longitude)
    //     })

    //     useEffect(() => {
    //         navigator.geolocation.getCurrentPosition( (position) => {
    //             fetch(`https://api.weatherapi.com/v1/forecast.json?key=db698b5e650a441fae6190451221401&q=${position.coords.latitude},${position.coords.longitude}&days=1&aqi=yes&alerts=yes`)
    //             .then(response => response.json())
    //             .then(data => { 
    //                 const locationData = data;
    //                 setLocation(locationData);
    //             });
    //         })           
    // }, [])

    const [myLocation, setMylocation] = useState(null);
    const [nearestLocation, setNearestLocation] = useState(null);
    const [status, setStatus] = useState(null);

    const locations = [
        {
            lat: 40.7722691,
            lng: -74.3008176
        },
        {
            lat: 40.682638,
            lng: -73.941015
        },
        {
            lat: 40.870347,
            lng: -74.105810
        },
        {
            lat: 40.7374197,
            lng: -74.2719785
        }
    ];

    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('tamilnadu');
    const [state, setState] = useState('tamilnadu');

    // API KEY AND URL
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [apiUrl]);

    const inputHandler = (event:any) => {
        setGetState(event.target.value);
    };

    const submitHandler = () => {
        setState(getState);
    };

    const kelvinToFarenheit = (k: any) => {
        return (k - 273.15).toFixed(2);
    };

    return (
        <Grid>

            <Grid container>
                <Grid >
                    <Grid >
                        <label >
                            Enter Location :
                        </label>
                    </Grid>
                    <Grid>
                        <input
                            type="text"
                            id="location-name"
                            className="form-control"
                            onChange={inputHandler}
                            value={getState}
                        />
                    </Grid>
                    <button className="btn btn-primary mt-2" onClick={submitHandler}>
                        Search
                    </button>
                </Grid>

                {/* <Grid className="card mt-3 mx-auto" style={{ width: '60vw' }}>
                    {apiData.main ? (
                        <Grid >
                            <img
                                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt="weather status icon"
                                className="weather-icon"
                            />

                            <p className="h2">
                                {kelvinToFarenheit(apiData.main.temp)}&deg; C
                            </p>

                            <p className="h5">
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                <strong>{apiData.name}</strong>
                            </p>

                            <Grid className="row mt-4">
                                <Grid className="col-md-6">
                                    <p>
                                        
                                        <strong>
                                            {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                                        </strong>
                                    </p>
                                    <p>
                                       
                                        <strong>
                                            {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                                        </strong>
                                    </p>
                                </Grid>
                                <Grid className="col-md-6">
                                    <p>
                                        {' '}
                                        <strong>{apiData.weather[0].main}</strong>
                                    </p>
                                    <p>
                                        <strong>
                                            
                                            {countries.getName(apiData.sys.country, 'en', {
                                                select: 'official',
                                            })}
                                        </strong>
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : (
                        <h1>Loading</h1>
                    )}
                </Grid> */}
            </Grid>

        </Grid>
    );
};

export default WeatherMap;