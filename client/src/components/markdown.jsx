import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/atom-one-dark.css";

const Markdown = ({children}) => {


return <ReactMarkdown remarkPlugins = {[remarkGfm]} rehypePlugins = {[rehypeHighlight]} >
    {children}
  </ReactMarkdown>
}

export default Markdown