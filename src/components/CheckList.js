import React from 'react';
import ListItem from './ListItem';

const CheckList = ({ listItems, setListItem }) => {
  const checkListItems = () => {
    return (
      <>
        {listItems.map((item) => {
          return (
            <ListItem
              text={item.text}
              id={item.id}
              key={item.id}
              listItems={listItems}
              setListItem={setListItem}
              item={item}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className='checklist'>
      <ul className='checklist__ul'>{checkListItems()}</ul>
    </div>
  );
};

export default CheckList;
