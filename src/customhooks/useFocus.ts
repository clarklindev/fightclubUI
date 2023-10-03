import { useState } from 'react';

type FocusAttributes = {
  onFocus: () => void;
  onBlur: () => void;
};

//custom hook
export const useFocus = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  const attrs: FocusAttributes = {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  //your component receives helper methods from useFocus: onFocus() onBlur()
  //and state: hovering
  return [isFocused, attrs] as [boolean, FocusAttributes];
};
