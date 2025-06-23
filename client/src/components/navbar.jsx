import { MdRestartAlt } from "react-icons/md";
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import RestartConfirmation from './restartConfirmation.jsx';
import useToggler from '../hooks/useToggler.js';

const Navbar = () => {
  const { isVisible: isConfirmationElementOpen, hide: hideConfirmationElement, toggle: toggleConfirmationElement } = useToggler();


  return <div className="absolute z-40 inset-y-0 top-0 sticky bg-zinc-900 rounded-b-lg flex p-4   w-full">
    <div className="flex gap-8 items-center justify-start h-10">
      <MdRestartAlt onClick={toggleConfirmationElement} size="25" />
      <AnimatePresence>
              {
        isConfirmationElementOpen && <RestartConfirmation onClose = {hideConfirmationElement} />
      }
      </AnimatePresence>
    </div>
  </div>
}

export default Navbar