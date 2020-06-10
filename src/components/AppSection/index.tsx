import React, { FormEvent, useState, ChangeEvent } from 'react';
import SearchBox from '../SearchBox';
import axios, {AxiosError, AxiosResponse } from 'axios';

interface Result extends AxiosResponse {
  data: {
    main: Main;
    name: string;
    sys: Sys;
    weather: Weather[];
    icon?: string;
  }
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Main{
  temp: number,
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Weather{
  id: number;
  main: string;
  description: string;
  icon: string;
}

export default function AppSection(){

  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState<Result['data'][]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>){
    setInputVal(event.currentTarget.value)
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=cbc3ec79f8d86311a22440c94fea7eb5&units=metric`)
    .then((response: Result) =>{
      const { main, name, sys, weather } = response.data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;
      setResult([{main, name, sys, weather, icon}, ...result])
      setInputVal('')
    }).catch(function (error: AxiosError<Error>) {
      console.log(error);
    })
  }

  return(
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" onChange={handleChange} value={inputVal} autoComplete="off"/>
      </form>
      {result.length ? <SearchBox searchResult={result}/> : ''}
    </section>
  )
}