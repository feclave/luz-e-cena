import FooterInfo from "./FooterInfo"
import FooterLogo from "./FooterLogo"
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FooterInfo />
        </div>
    </footer>
    <h4 className={styles.desenvolvimento}> Desenvolvido por Felipe Jost Clavé </h4>
    </>

  )
}

export default Footer