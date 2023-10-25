import React, { useState } from 'react';

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

/*
ENUM ITERATOR
VIEW: https://stackblitz-starters-znczk4.stackblitz.io
CODE: https://stackblitz.com/edit/stackblitz-starters-znczk4?file=src%2FApp.tsx
*/
const EnumIterator = () => {
  const [currentColor, setCurrentColor] = useState<Colors>(Colors.Red);

  const iterateEnum = () => {
    const enumValues = Object.values(Colors);
    const currentIndex = enumValues.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % enumValues.length;
    setCurrentColor(enumValues[nextIndex]);
  };

  return (
    <div>
      <p>Current Color: {currentColor}</p>
      <button onClick={iterateEnum}>Next Color</button>
    </div>
  );
};

export default EnumIterator;
