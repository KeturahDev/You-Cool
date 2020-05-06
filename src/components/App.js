import React, {useState} from 'react';
import Header from './Header';
import CoolCard from './CoolCard';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <Header />
      {/* dynamically render cool card or button text based on visibility state */}
      <CoolCard />
      <Form />
      <button>button text</button>
    </div>
  );
}

export default App;
