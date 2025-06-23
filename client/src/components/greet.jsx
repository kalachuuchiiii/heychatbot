import { motion } from 'framer-motion';
import { fromBottom } from '../data/variants/index.js';

const Greet = () => {


  return (
    <motion.div 
    variants = {fromBottom} 
    initial = "hidden" 
    animate = "visible"
    className="flex flex-col justify-center gap-10 my-10 text-center">

      <div className="grid gap-1">
        <h1 className="text-2xl font-semibold">Hi, I'm a chatbot assistant</h1>
        <p className="text-lg ">How can I help you?</p>
      </div>
    </motion.div>
  )
}

export default Greet