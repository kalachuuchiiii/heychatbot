import { useCallback } from 'react';

const useRefController = () => {

  const scrollToRef = useCallback((ref = null) => {
    if (!ref || !ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [])
  
  const heightAdaptor = useCallback((ref) => {
    const el = ref?.current; 
    if(!el)return; 
    el.style.height = "auto"; 
    el.style.height = `${el.scrollHeight}px`;
  }, []);
  
  
  return {
    scrollToRef,
    heightAdaptor
  }

}

export default useRefController