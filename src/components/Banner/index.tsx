import styles from './Banner.module.css';

type BannerProps = { //nomeclatura "padronizada" de tipagem para as props
    src: string;
    alt: string;
};

const Banner = ({ src, alt }: BannerProps) => { //as props devem ser tipadas
  return (
    <img src={src} alt={alt} className={styles.banner}/>
  )
};

export default Banner;