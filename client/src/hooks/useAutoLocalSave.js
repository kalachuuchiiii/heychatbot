import { useEffect } from 'react';

const useAutoLocalSave = (objs = {}) => {
  
  Object.entries(objs).forEach(([key, value]) => {
    useEffect(() => {
      const dataToStore = typeof value === "string" ? value : JSON.stringify(value);
      
      localStorage.setItem(key, dataToStore);
      
    }, [value])
  });
}

export default useAutoLocalSave