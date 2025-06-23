import { useState, useCallback } from 'react';

const useToggler = ( initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  
  const toggle = useCallback(() => {
    setIsVisible(prev => !prev);
  }, [isVisible]);
  
  const show = useCallback(() => {
    setIsVisible(true);
  }, [])
  
  const hide = useCallback(() => {
    setIsVisible(false);
  }, [])
  
 return {
    isVisible, 
    toggle,
    show, 
    hide
  }
}

export default useToggler