import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ setListInput, setListItem, listItems, listInput }) => {
  const listInputHandler = (e) => {
    setListInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setListItem([...listItems, { text: listInput, completed: false, id: uuidv4() }]);
  };

  return (
    <form className='form'>
      <input type='text' className='form__input' onChange={listInputHandler} />
      <button type='submit' className='form__cta' onClick={submitHandler}>
        <i className='fas fa-plus-square' />
      </button>
      <div className='form__select'>
        <select name='checklists' className='form__filter'>
          <option value='all'>all</option>
          <option value='completed'>completed</option>
          <option value='uncompleted'>uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
