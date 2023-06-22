"use client"

import Image from 'next/image'
import styles from './darkModeToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
    //const mode = "dark"
    const { toggle, mode } = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        {/* <div className={styles.icon}>
            <span>
                <Image
                    src='/public/moon.png'
                    alt='moon'
                    width='50'
                    height='50'
                />
            </span>
        </div>
        <div className={styles.icon}>
            <span>
                <Image
                    src='/public/sun.png'
                    alt='sun'
                    width='50'
                    height='50'
                />
            </span>
        </div> */}
        <div className={styles.ball} 
            style={mode === "light" ? { left: "2px" } : { right: "2px" } }
        />
    </div>
  )
}

export default DarkModeToggle