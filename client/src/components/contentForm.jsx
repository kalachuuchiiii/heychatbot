import { useEffect, useRef, memo } from 'react';

const ContentForm = ({rows = 1, onChange, disabled = false, content = "", onSubmit}) => {
  const contentRef = useRef(null);


const adaptTextboxHeight = () => {
    const ref = contentRef.current;
    if(!ref)return;
    ref.style.height = "auto";
    const height = `${ref.scrollHeight}px`
    ref.style.height = height;
  }

  useEffect(() => {
    adaptTextboxHeight();
  }, [content])

return <div className = "flex w-full items-center gap-2">
        <textarea ref = {contentRef} onChange={onChange} rows={rows} value = {content} className="p-2 outline-none w-6/12 no-scrollbar w-full bg-transparent border-b-1 border-b-white" />
        <button disabled={disabled} className= {`${disabled && "text-white/30" } active:text-white/30`} onClick={() => onSubmit(content)} >
          Send
        </button>
</div>
}

export default memo(ContentForm)