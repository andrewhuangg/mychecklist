import './assets/styles/styles.scss';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import CheckList from './components/CheckList';

const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';

const App = () => {
  const [listInput, setListInput] = useState('');
  const [listItems, setListItem] = useState([]);
  const [itemStatus, setItemStatus] = useState('all');
  const [filteredListItems, setFilteredListItems] = useState([]);

  useEffect(() => {
    filterHandler();
    saveListLocalStorageHandler();
  }, [listItems, itemStatus]);

  const filterHandler = () => {
    switch (itemStatus) {
      case COMPLETED:
        setFilteredListItems(listItems.filter((item) => item.completed === true));
        break;

      case UNCOMPLETED:
        setFilteredListItems(listItems.filter((item) => item.completed === false));
        break;

      default:
        setFilteredListItems(listItems);
        break;
    }
  };

  // Local storage
  const saveListLocalStorageHandler = () => {
    if (localStorage.getItem('listItems') === null) {
      localStorage.setItem('listItems', JSON.stringify([]));
    } else {
      localStorage.setItem('listItems', JSON.stringify(listItems));
    }
  };

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
          setItemStatus={setItemStatus}
        />
        <CheckList
          listItems={listItems}
          setListItem={setListItem}
          filteredListItems={filteredListItems}
        />
      </div>
    </>
  );
};

export default App;
