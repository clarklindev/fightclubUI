import { useState, useEffect } from 'react';

let idCounter = 0;

export function useUID(identifier = 'uid') {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(`${identifier}-${idCounter++}`);
  }, [identifier]);

  return id;
}
