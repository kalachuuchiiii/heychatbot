import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { fade } from '../data/variants/index.js';
import { MdRestartAlt } from "react-icons/md";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/atom-one-dark.css";

const Message = ({message = null}) => {
const [isCopied, setIsCopied] = useState(false);

const { role = "user", content = "" } = message
 
const roleTitle = role === "user" ? "You" : "Assistant"
const handleCopy = () => {
  setIsCopied(true);
  navigator.clipboard.writeText(content);
  setInterval(() => {
    setIsCopied(false);
  }, 3000)
}

return <motion.div
 variants = {fade} 
 initial = "hidden" 
 animate = "visible"
 className = "w-full"
>
  <div className = "p-2 w-full bg-zinc-700/60 rounded-lg flex flex-col gap-1">
  <p className = " text-sm">{roleTitle}</p>
  <div className = { role === "user" && "break-all"}>
      <ReactMarkdown remarkPlugins = {[remarkGfm]} rehypePlugins = {[rehypeHighlight]} >
    {content}
  </ReactMarkdown>
  </div>

      <button disabled = {isCopied} onClick = {handleCopy} className = " text-xs text-right w-full text-white/50 ">{isCopied ? "Copied!" : "Copy"}</button>
</div>
</motion.div>
}

export default memo(Message)