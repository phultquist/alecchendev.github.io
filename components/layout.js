import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const name = 'Alec Chen';
export const siteTitle = 'Alec Chen';

export default function Layout({ children, home, skinny, selected }) {

  const [ colorMode, setColorMode ] = useState('Dark Mode');

  const toggleDarkMode = () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      setColorMode('Dark Mode');
    } else {
      document.body.classList.add("dark-mode");
      setColorMode('Light Mode');
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.navigation}>
        <Link href='/'>Alec Chen</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/hobbies'>Hobbies</Link>
        <Link href='/consumption'>Consumption</Link>
        <Link href='/people'>People</Link>
        <Link href='/blog'>Blog</Link>
        <a onClick={toggleDarkMode}>{colorMode}</a>
      </div>

      <main className={styles.content}>{children}</main>
      
    </div>
  )
}