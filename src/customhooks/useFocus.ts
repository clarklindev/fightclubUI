import { useState } from 'react';

//custom hook
export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    console.log('focused');
  };

  const handleBlur = () => {
    console.log('blurred');
    setIsFocused(false);
  };

  const attrs = {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  //your component receives helper methods from useFocus: onFocus() onBlur()
  //and state: hovering
  return [isFocused, attrs];
};
