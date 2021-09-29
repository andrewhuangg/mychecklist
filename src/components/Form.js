import React from 'react';

const Form = () => {
  return (
    <form className='form'>
      <input type='text' className='form__input' />
      <button type='submit' className='form__cta'>
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
