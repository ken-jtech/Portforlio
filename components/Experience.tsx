import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex` text-left md:flex-row max-w-fill px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
        </h3>

        <div>
            <ExpCard />
            <ExpCard />
            <ExpCard />
            <ExpCard />
        </div>
    </motion.div>
  )
}

export default Experience