import React from 'react';

export const CurrencyInput = ({data}) => {
  const {label, value, required} = data;

  return (
    <div className='input'>
      <label>{label}</label>
      <input
        className={required ? 'active' : ''}
        type='text'
        defaultValue={value}
      />
    </div>
  )
};
