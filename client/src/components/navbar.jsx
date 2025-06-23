import { MdRestartAlt } from "react-icons/md";
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import RestartConfirmation from './restartConfirmation.jsx';

const Navbar = () => {
  const [isRestartConfirmationNoticeOpen, setIsRestartConfirmationNoticeOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsRestartConfirmationNoticeOpen(prev => !prev);
  }, [])


  return <div className="absolute z-40 inset-y-0 top-0 sticky bg-zinc-900 rounded-b-lg flex p-4   w-full">
    <div className="flex gap-8 items-center justify-start h-10">
      <MdRestartAlt onClick={handleClick} size="25" />
      <AnimatePresence>
              {
        isRestartConfirmationNoticeOpen && <RestartConfirmation onClose = {handleClick} />
      }
      </AnimatePresence>
    </div>
  </div>
}

export default Navbar