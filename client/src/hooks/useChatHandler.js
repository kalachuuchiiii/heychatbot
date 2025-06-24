import { useEffect, useState, useCallback } from 'react';
import axios from "axios";

const useChatHandler = () => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);
  const [content, setContent] = useState(localStorage.getItem("content") || "");
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }, [content, messages])


return {
  setContent, 
  content, 
  sendReq, 
  loading, 
  error, 
  messages
}
}

export default useChatHandler