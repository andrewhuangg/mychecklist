import './assets/styles/styles.scss';
import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <div className='app'>
        <header>
          <h1>CheckList</h1>
        </header>
        <Form />
      </div>
    </>
  );
};

export default App;
