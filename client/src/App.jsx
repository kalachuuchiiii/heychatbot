
import MessagesFeed from './components/messagesFeed.jsx';
import ContentForm from './components/contentForm.jsx';
import Greet from './components/greet.jsx';
import Navbar from './components/navbar.jsx'
import LoadingDisplay from './components/loadingDisplay.jsx';
import ErrorDisplay from './components/errorDisplay.jsx';
import useChatHandler from './hooks/useChatHandler.js';
import useAutoLocalSave from './hooks/useAutoLocalSave.js';

function App() {
  const { setContent, loading, error, messages, sendReq, content } = useChatHandler();
  useAutoLocalSave({ messages, content })

  return <div className="fixed inset-0 justify-between items-center w-full  flex-col flex ">
    <Navbar />
    <div className=" overflow-y-auto flex flex-col items-center gap-2 my-4 w-full h-full sm:w-11/12 md:w-10/12 lg:w-8/12 ">
      {
        messages?.length > 0 ?       <MessagesFeed messages={messages}  /> : <Greet />
      }
            <div className = "text-xs w-full text-left px-4"> {
        error ? <ErrorDisplay/> : loading && <LoadingDisplay/>
      }</div>
      </div>

        <ContentForm 
        onSubmit={sendReq} 
        content={content} 
        setContent={setContent} 
        disabled={loading || !content} />

  
  </div>
}

export default App
