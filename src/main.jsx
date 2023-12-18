import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <>
      <NavBar />

      <div className="wrapper">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App;
