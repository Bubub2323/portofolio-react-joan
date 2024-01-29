import React from 'react';
import joan from "./joan.jpg";
import './App.css';

const socialMediaLinks = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/live/3yY9mWUGtBs?feature=shared'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/joanianra'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Bubub2323'
  },
  {
    name: 'Discord',
    url: 'https://www.linkedin.com/in/joan-ianra-700b0b19b/'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='profil' src={joan} alt="Joan Ianra" />
        <p>
          <h1>Hello, I am Joan!</h1>
          <p className='umur'>16 Y.O</p>
          <p className='tempat'>Birthplace: Sendawar</p>
          <p className='n'>Indonesia</p>
          <h2>About me!</h2>
          <p>I love Korea, I love sports, I love travel, i love go youn jung, i love hansooee,i love nasgor</p>
          <h3>I love you</h3>
          <h2>Connect with me</h2>
          <ul>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </p>
        
        
         
        
      </header>
    </div>
  );
}

export default App;