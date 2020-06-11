import React from 'react';
import AppHeader from './components/AppHeader';
import AppSection from './components/AppSection';
import AppFooter from './components/AppFooter';
import './App.css';

function App() {

  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
  const index = Math.floor(Math.random() * images.length);
  console.log(index)
  return (
    <div className="App">
      <main style={{backgroundImage: `url(${images[index]})`}}>
        <AppHeader />
        <AppSection />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
