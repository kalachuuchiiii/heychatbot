import { useCallback, useState } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  
  const copyText = useCallback((text) => {
    if(!text)return;
    navigator.clipboard.writeText(text); 
    setIsCopied(true);
    const timeoutId = setTimeout(() => {
      setIsCopied(false)
    }, 3000); 
  }, [])


return {
  isCopied, 
  copyText
}
}

export default useClipboard