import React from 'react';

const GradientCircle = ({texto}) => {
  return (
    <div className="w-12 h-12 rounded-full relative overflow-hidden">
    <div className="w-full h-full flex items-center justify-center text-4xl text-white z-20 bg-gradient-to-r-mine">
        {texto}
    </div>
    </div>
  );
};

export default GradientCircle;
