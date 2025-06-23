import { motion } from 'framer-motion';
import { fromLeft } from '../data/variants/index.js'

const RestartConfirmation = ({onClose}) => {

const handleResetConvo = () => {
    localStorage.setItem("messages", JSON.stringify([])); 
    
    window.location.reload();
  }

return (
   <motion.div 
        variants = {fromLeft} 
        initial = "hidden" 
        animate = "visible" 
        exit = "hidden"
       >
          <div className = "flex flex-col text-sm justify-center items-center">
                      <p>Restart conversation?</p>
          <div className="flex justify-center gap-5">      <button onClick = {onClose}>No</button>
            <button onClick = {handleResetConvo}>Yes</button></div>
          </div>
        </motion.div>
  )
}

export default RestartConfirmation