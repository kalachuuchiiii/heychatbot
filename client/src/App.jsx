import { useState, useEffect, useRef, useCallback } from 'react'
import axios from "axios";
import MessagesFeed from './components/messagesFeed.jsx';
import ContentForm from './components/contentForm.jsx';
import Navbar from './components/navbar.jsx'

function App() {
  const [content, setContent] = useState(localStorage.getItem("content") || "");
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) || [])
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const lowestElement = useRef(null);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setContent(value)
  }, [])

  const handleScrollToBottom = () => {
    const ref = lowestElement.current;
    ref.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    handleScrollToBottom();
    localStorage.setItem("messages", JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    localStorage.setItem("content", content);
  }, [content])

  const sendReq = useCallback(async(content) => {
    setError(false);
    setLoading(true);
    
    try {
      setMessages(prev => [...prev, { role: "user", content }]);
      setContent("");
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/chatbot/api/response`, {
        messages: [...messages, { role: "user", content }]
      })

      const e = res.data.response?.error
      if (e) throw new Error(e);

      const text = res.data.response.choices[0].message;
      setMessages(prev => ([...prev, text]));
      setLoading(false);
      handleScrollToBottom();
    } catch (e) {
      
      setError(true);
      setLoading(false);
    }
  }, [])

  return <div className="fixed inset-0 overflow-y-auto  items-center flex-col flex ">
    <Navbar />
    <div className=" flex w-full sm:w-11/12 md:w-10/12 lg:w-8/12 flex-col h-full gap-2 items-center justify-between">

      <MessagesFeed error={error} loading={loading} messages={messages} lowestElement={lowestElement} />
      <div className="p-3 z-30 rounded-t-lg flex w-full bg-zinc-900 fixed bottom-0 sticky bg-gradient-to-t justify-center w-full items-center gap-2 ">
        <ContentForm onSubmit={sendReq} content={content} onChange={handleChange} disabled={loading || !content || content.length === 0} />
      </div>

    </div>
  </div>
}

export default App
