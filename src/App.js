import './assets/styles/styles.scss';
import React, { useState } from 'react';
import Form from './components/Form';
import CheckList from './components/CheckList';

const App = () => {
  const [listInput, setListInput] = useState('');
  const [listItems, setListItem] = useState([]);

  return (
    <>
      <div className='app'>
        <header>
          <h1>CheckList</h1>
        </header>
        <Form
          setListInput={setListInput}
          setListItem={setListItem}
          listItems={listItems}
          listInput={listInput}
        />
        <CheckList />
      </div>
    </>
  );
};

export default App;
