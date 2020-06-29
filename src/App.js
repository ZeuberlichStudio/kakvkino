import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Slider from './components/slider.component';

function App() {
  return (
    <div className="App">
      <main>
        <Slider>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Slider>
      </main>
    </div>
  );
}

export default App;
