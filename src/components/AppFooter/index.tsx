import React from 'react';
import logo from '../../logo.svg';

export default function AppFooter(){
  return (
    <footer className="App-footer">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <span className="App-link"> |  created by </span>
      <a href="https://github.com/gersonsalvador/weather-app" className="App-link" target="_blank" rel="noopener noreferrer">Gerson Salvador</a>
    </footer>
  )
}