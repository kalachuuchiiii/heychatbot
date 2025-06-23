import { useEffect, useRef, memo } from 'react';
import useRefController from '../hooks/useRefController.js';

const ContentForm = ({ setContent, disabled = false, content = "", onSubmit}) => {
  const contentRef = useRef(null);
  const { heightAdaptor } = useRefController();
  

  useEffect(() => {
    if(contentRef.current){
      heightAdaptor(contentRef)
    }
  }, [content, contentRef])

return <div className = "flex bg-zinc-900 p-5 rounded-t-lg  w-full items-center gap-2">
        <textarea ref = {contentRef} onChange={(e) => setContent(e.target.value)} rows={1} value = {content} placeholder = "Ask paris" className="p-2 outline-none w-6/12 no-scrollbar w-full bg-transparent " />
        <button disabled={disabled} className= {`${disabled && "text-neutral-500" }`} onClick={() => onSubmit(content)} >
          Send
        </button>
</div>
}

export default memo(ContentForm)