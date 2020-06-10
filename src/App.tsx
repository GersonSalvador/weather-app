import React from 'react';
import AppHeader from './components/AppHeader';
import AppSection from './components/AppSection';
import AppFooter from './components/AppFooter';
import './App.css';

function App() {

  return (
    <div className="App">
      <main>
        <AppHeader />
        <AppSection />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
