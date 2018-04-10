import React from 'react';
import {Section} from './Section'

export const Widget = ({id, name, items}) => {
  return (
    <div className='widget' id={id}>
      <h1>{name}</h1>
      {items.map((item, index) => <Section key={index} data={item} />)}
    </div>
  )
};
