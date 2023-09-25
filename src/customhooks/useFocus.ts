import { useState } from 'react';

type FocusAttributes = {
  onFocus: () => void;
  onBlur: () => void;
};

//custom hook
export const useFocus = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setIsFocused(true);
    console.log('focused');
  };

  const handleBlur = () => {
    console.log('blurred');
    setIsFocused(false);
  };

  const attrs: FocusAttributes = {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  //your component receives helper methods from useFocus: onFocus() onBlur()
  //and state: hovering
  return [isFocused, attrs];
};
