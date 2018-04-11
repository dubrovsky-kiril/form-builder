import React from 'react';

export const CurrencyInput = ({data: {label, value, required, symbol, precision}}) => {
  const currencies = {
    EUR: '€',
    USD: '$'
  };

  const addComasToNumber = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const addPrecisionToNumber = number => ([number, '.'].join('')).padEnd(number.length + 1 + precision, Array(precision).join('0'))

  return (
    <div className='input'>
      <label>{label}</label>
      <div className="input-icon">
        <i>{currencies[symbol] || ''}</i>
        <input
          className={required ? 'active' : ''}
          type='text'
          defaultValue={precision ? addPrecisionToNumber(addComasToNumber(value)) : addComasToNumber(value)}
        />
      </div>
    </div>
  )
};
