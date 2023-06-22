import styles from './page.module.css'
import Image from 'next/image'
import Hero from 'public/heroin.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Awesome designs for software products</h1>
        <p className={styles.description}>Bring your Ideas into rality. We bring together great talents from the tech ecosystem</p>
        
        <Button url="/portfolio" text="View Our portfolio" />
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="Hero Image" className={styles.img} />
      </div>
    </div>
  )
}
