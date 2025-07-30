import React from 'react';
import './NYLColumns.scss';

const NYLColumns = ({ 
  columns = [], 
  gapSize = 'medium',
  alignment = 'top',
  columnId
}) => {
  return (
    <div 
      className={`nyl-columns nyl-columns--gap-${gapSize} nyl-columns--align-${alignment}`}
      data-aue-component={`nyColumns-${columnId}`}
      data-aue-type="container"
    >
      {columns.map((column, index) => (
        <div 
          key={index} 
          className="nyl-columns__column"
          data-aue-type="container"
        >
          {column}
        </div>
      ))}
    </div>
  );
};

export default NYLColumns;
