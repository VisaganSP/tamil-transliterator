import React from 'react';
import TamilTransliterator from './components/TamilTransliterator.jsx';
import KeyboardHelp from './components/KeyboardHelp.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Tamil Transliterator</h1>
        <p className="app-subtitle">Type Tamil in English (Tanglish) and see it converted to Tamil script</p>
      </header>
      
      <main className="app-container">
        <TamilTransliterator />
        <KeyboardHelp />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;