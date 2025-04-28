import classNames from 'classnames';
import styles from './Tag.module.css'
import { Categoria, Censura } from '../../types';

interface TagProps {
    value: Categoria | Censura
}

const tagClasses = { //objeto que mapeia os estilos para cada classe de css
    Livre: styles.livre,
    "10 anos": styles.dez,
    "12 anos": styles.doze,
    "14 anos": styles.catorze,
    "16 anos": styles.dezesseis,
    "2D": styles.doisD,
    "3D": styles.tresD,
};

const Tag = ({ value }: TagProps) => {
    const classes = classNames(styles.tag, tagClasses[value]) 
    return (
    <span className={classes}>{value}</span>
  )
};

export default Tag

// os types criam tipos para cada classe de css e o interface junta eles
//o componente terá os estilos de tag e as classes do valor que for atribuído a ele