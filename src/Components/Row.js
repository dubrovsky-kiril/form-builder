import React from 'react';
import {DefaultInput} from './Inputs/DefaultInput';
import {CurrencyInput} from './Inputs/CurrencyInput';

export const Row = ({data}) => {
  return (
    <div className='row'>
      {data.map((inputData, index) => {
        switch (inputData.type) {
          case 'input':
            return <DefaultInput key={index} data={inputData} />
          case 'currency':
            return <CurrencyInput key={index} data={inputData} />
          default:
            return null;
        }
      })}
    </div>
  )
};
