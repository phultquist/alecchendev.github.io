import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const name = 'Alec Chen';
export const siteTitle = 'Alec Chen';

export default function Layout({ children, home, skinny, selected }) {
  return (
    <div className={(home && styles.padTop) + ' ' + (skinny ? styles.skinnyContainer : styles.container)}>
      <Head>
        <script src="https://kit.fontawesome.com/98bcd674c2.js" crossorigin="anonymous"></script>
      </Head>

      <header className={styles.header}>
        <div className={styles.left}>
          <Link href='/'>
            <a className={styles.navItem + ' ' + (selected == '' && styles.selected)}>
              Alec Chen
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href='projects'>
            <a className={styles.navItem + ' ' + (selected == 'projects' && styles.selected)}>
              Projects
            </a>
          </Link>
          <Link href='videos'>
            <a className={styles.navItem + ' ' + (selected == 'videos' && styles.selected)}>
              Videos
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      <div className={styles.footer}>
        <a className={styles.icon} href={'mailto:alecchendev@gmail.com'} target="_blank"><MdEmail/></a>
        <a className={styles.icon} href={'https://github.com/alecchendev'} target="_blank"><FaGithub/></a>
        <a className={styles.icon} href={'https://twitter.com/alecchendev'} target="_blank"><FaTwitter/></a>
      </div>

      
    </div>
  )
}