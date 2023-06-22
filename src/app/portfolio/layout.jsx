import styles from './page.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our Works
            {children}
        </h1>
    </div>
  )
}

export default Layout