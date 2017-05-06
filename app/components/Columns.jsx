import React from 'react';
import Column from './Column';

export default ({columns}) => (
  <div className="columns">{columns.map(column =>
    <Column className="column" key={column.id} column={column} />
  )}</div>
)
