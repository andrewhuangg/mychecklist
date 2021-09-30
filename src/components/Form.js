import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({
  setListInput,
  setListItem,
  listItems,
  listInput,
  setItemStatus,
  handleDarkMode,
}) => {
  const listInputHandler = (e) => {
    setListInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setListItem([...listItems, { text: listInput, completed: false, id: uuidv4() }]);
    setListInput('');
  };

  const setItemStatusHandler = (e) => {
    setItemStatus(e.target.value);
  };

  return (
    <>
      <form className='form'>
        <div className='form__info-wrapper'>
          <input
            type='text'
            className='form__input'
            onChange={listInputHandler}
            value={listInput}
          />
          <button type='submit' className='form__cta' onClick={submitHandler}>
            <i className='fas fa-plus-square' />
          </button>
        </div>
        <div className='form__select'>
          <select name='checklists' className='form__filter' onChange={setItemStatusHandler}>
            <option value='all'>all</option>
            <option value='completed'>completed</option>
            <option value='uncompleted'>uncompleted</option>
          </select>
        </div>
        <div className='theme' onClick={handleDarkMode} />
      </form>
    </>
  );
};

export default Form;
