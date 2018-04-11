import React from 'react';

export const DefaultInput = ({data: {label, value, required}}) => {
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
