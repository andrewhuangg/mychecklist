import React from 'react';

const ListItem = ({ text, listItems, setListItem, item }) => {
  const deleteHandler = (e) => {
    setListItem(listItems.filter((listItem) => listItem.id !== item.id));
  };

  const completeHandler = (e) => {
    setListItem(
      listItems.map((listItem) => {
        if (listItem.id === item.id) {
          return {
            ...listItem,
            completed: !listItem.completed,
          };
        }
        return listItem;
      })
    );
  };

  return (
    <div className={`listitem ${item.completed && 'listitem--completed'}`}>
      <li className={`listitem__li ${item.completed && 'listitem__li--completed'}`}>{text}</li>
      <button className='listitem__cta complete' onClick={completeHandler}>
        <i className='fas fa-check' />
      </button>
      <button className='listitem__cta trash' onClick={deleteHandler}>
        <i className='fas fa-trash' />
      </button>
    </div>
  );
};

export default ListItem;
