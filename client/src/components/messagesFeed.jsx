import Message from './messageComponent.jsx';
import Greet from './greet.jsx';
import { memo } from 'react';
const MessagesFeed = ({messages = [], loading = false, error = false, lowestElement}) => {

return <div className = "w-11/12 mt-6 flex flex-col gap-1 justify-center items-center">
  {
    messages && messages.length > 0 ? messages.map((message, i) => <Message message = {message} key = {i} /> ) : <Greet />
  }
  {
    error ? <p className = "text-xs text-white/50 text-left w-full">Too many requests! Please slow down and try again in a minute</p> : loading && <p className = "text-xs text-white/50 text-left w-full">Typing...</p>
  }
  <div ref = {lowestElement}></div>
</div>
}

export default memo(MessagesFeed)