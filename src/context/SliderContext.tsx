import React, { useState, createContext, useContext } from 'react';
import { Orientation } from '@swagfinger/types/Orientation';

interface SliderContextProps {
  orientation: Orientation[keyof Orientation];
  setOrientation: (orientation: Orientation[keyof Orientation]) => void;
}

const SliderContext = createContext<SliderContextProps>({
  orientation: Orientation.HORIZONTAL,
  setOrientation: _ => {},
});

export const useSlider = () => {
  return useContext(SliderContext);
};

type SliderProviderProps = {
  children: React.ReactNode | string;
};

export const SliderProvider = ({ children }: SliderProviderProps) => {
  const [orientation, setOrientation] = useState<Orientation[keyof Orientation]>(Orientation.HORIZONTAL);
  return (
    <SliderContext.Provider
      value={{
        orientation,
        setOrientation,
      }}>
      {children}
    </SliderContext.Provider>
  );
};
