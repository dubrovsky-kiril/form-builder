import React from 'react';

export const DefaultInput = ({data}) => {
  const {label, value, required} = data;

  return (
    <div className='input'>
      <label>{label}</label>
      <input
        className={required ? 'required' : ''}
        type='text'
        defaultValue={value}
      />
    </div>
  )
};
