import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/4T.jpeg" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
