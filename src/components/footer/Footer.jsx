import Image from 'next/image'
import styles from './page.module.css'

const Footer = () => {

  return (
    <div className={styles.container}>
        <div className={styles.copyright}>&copy; {new Date().getFullYear()}  Gordwhine. All rights reserved.</div>
        <div className={styles.socials}>
          <Image src="/facebook.jpg" width={15} height={15} className={styles.icon} alt="Gordwhine Dev facebook account"/>
          <Image src="/twitter.jpg" width={15} height={15} className={styles.icon} alt="Gordwhine Dev twitter account"/>
          <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Gordwhine Dev instagram account"/>
          <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Gordwhine Dev youtube account"/>
        </div>
    </div>
  )
}

export default Footer