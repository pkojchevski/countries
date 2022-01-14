import React from 'react';
import {CountriesProvider} from './context/Countries.context';
import Content from './components/Layout/Content';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
        <CountriesProvider>
           <Content />
      </CountriesProvider>
    </div>
  );
}

export default App;
