import React, {useState} from 'react';
import Header from './Header';
import CoolCard from './CoolCard';
import Form from './Form';

function App() {
  const [currentPage, setPage] = useState('CoolCard')
  const handleClick = () => {
    if(currentPage === 'CoolCard') {
      setPage('Form')
    } else if ( currentPage === 'Form') {
      setPage('CoolCard')
    }
  }
  const setVisibility = () => {
    if(currentPage === 'CoolCard') {
      return {
        component: <CoolCard />,
        buttonText: "Add new Compiment"
      }
    } else if ( currentPage === 'Form') {
      return {
        component: <Form />,
        buttonText: "Back to Compliments"
      }
    }
  }
  const currentlyVisible = setVisibility()
  return (
    <div className="App">
      <Header />
      {/* dynamically render cool card or button text based on visibility state */}
      {currentlyVisible.component}
      <button onClick={handleClick}>{currentlyVisible.buttonText}</button>
    </div>
  );
}

export default App;
