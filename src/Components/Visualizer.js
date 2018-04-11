import React from 'react';
import {Widget} from './Widget'

export const Visualizer = ({data: {widgets}}) => {
  return (
    <div>
      {widgets.map(widget => (
        <Widget
          key={widget.id}
          id={widget.id}
          name={widget.name}
          items={widget.items}
        />
      ))}
    </div>
  )
};
