import React from 'react';
import {Row} from './Row';

export const Section = ({data: {header, columns, items}}) => {
  const rowsCount = Math.ceil(items.length / columns);

  const rowsInitialStructure = Array(rowsCount).fill([]);

  const rowsData = rowsInitialStructure.reduce((acc, curr) => {
    const columnsPushed = acc.length * columns;

    acc.push(items.slice(columnsPushed, columnsPushed + columns));

    return acc;
  }, []);

  return (
    <div className='section'>
      <h3>{header}</h3>
      {rowsData.map((rowData, index) => <Row key={index} data={rowData} />)}
    </div>
  )
};
