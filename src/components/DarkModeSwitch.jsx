'use client'

import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme(); 
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme
useEffect(() => {
    setMounted(true)
}, [])
  return (
    <div className='hover:text-amber-400 duration-150'>
{
    mounted && (currentTheme === 'dark' ?
    <MdLightMode className='text-2xl cursor-pointer hover:text-amber-400' 
    onClick={() => setTheme('light')}/> 
    : 
    <MdDarkMode className='text-2xl cursor-pointer hover:text-amber-400' 
    onClick={() => setTheme('dark')}/>
)}
    </div>
  )
}