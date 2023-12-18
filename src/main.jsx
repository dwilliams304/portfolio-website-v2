import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import NavBar from './components/layout/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <>
      <NavBar />
    </>
  )
}

export default App;
