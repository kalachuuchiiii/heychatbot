import { memo } from 'react';
import { motion } from 'framer-motion';
import { fade } from '../data/variants/index.js';
import { MdRestartAlt } from "react-icons/md";
import Markdown from './markdown.jsx';
import useClipboard from '../hooks/useClipboard.js';

const Message = ({message = null}) => {
  
  const { isCopied, copyText } = useClipboard();


const { role = "user", content = "" } = message
 
const roleTitle = role === "user" ? "You" : "Paris"

return <motion.div
 variants = {fade} 
 initial = "hidden" 
 animate = "visible"
 className = "w-full"
>
  <div className = "p-2 w-full bg-zinc-700/60 rounded-lg flex flex-col gap-1">
  <p className = " text-sm">{roleTitle}</p>
  <div className = { role === "user" && "break-all"}>
    <Markdown>
      {content}
    </Markdown>
  </div>

      <button disabled = {isCopied} onClick = {() => copyText(content)} className = " text-xs text-right w-full text-white/50 ">{isCopied ? "Copied!" : "Copy"}</button>
</div>
</motion.div>
}

export default memo(Message)