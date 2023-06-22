import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://picsum.photos/seed/picsum/200/300"
          fill={true}
          alt='About Image'
          className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Software Stories</h1>
            <h2 className={styles.imgDescription}>
              Programing and developing software with experiences
            </h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are?</h1>
          <p className={styles.description}>Lorem Picsum · The Lorem Ipsum for photos. ·
           Easy to use, stylish placeholders·
           Specific Image · Static Random Image · 
           Grayscale · Blur · Advanced Usage · 
           List Images.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.description}>Lorem Picsum · The Lorem Ipsum for photos. ·
           Easy to use, stylish placeholders·
           Specific Image · Static Random Image · 
           Grayscale · Blur · Advanced Usage · 
           List Images.</p>
           <br />

           <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About