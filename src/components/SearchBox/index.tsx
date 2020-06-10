import React from 'react';

interface Result{
  main: Main;
  name: string;
  sys: Sys;
  weather: Weather[];
  icon?: string;
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

const SearchBox = (props: {searchResult: Result[]}) => {
  console.log(props)
  return (
    <div className="container">
      <ul className="cities">
      {props.searchResult.map((item, i) => {
        const {icon,main, sys, weather, name} = item
        return (
        <li className="city" key={i}>
          <h2 className="city-name">
          <span>{name}</span>
          <sup>{sys.country}</sup>
          </h2>
          <div className="city-temp">{main.temp}<sup>°C</sup></div>
            <figure>
              <img className="city-icon" src={icon} alt="{weather[0].main}" />
              <figcaption>{weather[0].main}</figcaption>
            </figure>
        </li>
        )
      })
      }
      </ul>
    </div>
  )
}

export default SearchBox;