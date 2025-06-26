import React from 'react';

const ProgressBar = ({ percentage, color }) => (
  <div className="relative w-full">
    <div className={`overflow-hidden h-2 text-xs flex rounded bg-${color}-200`}>
      <div
        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
