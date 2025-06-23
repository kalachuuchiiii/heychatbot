import Message from './messageComponent.jsx';
import { memo, useRef, useEffect, useCallback } from 'react';
import useRefController from '../hooks/useRefController.js';

const MessagesFeed = ({messages = []}) => {
  const lowestElement = useRef(null);
  const { scrollToRef } = useRefController();
  
  useEffect(() => {
    scrollToRef(lowestElement);
  }, [messages])

return <div className = "w-11/12 flex flex-col gap-1 justify-center items-center">
  {
     messages.map((message, i) => <Message message = {message} key = {i} /> )
  }
  <div ref = {lowestElement}></div>
</div>
}

export default memo(MessagesFeed)