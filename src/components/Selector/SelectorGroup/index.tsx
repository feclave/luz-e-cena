import styles from './SelectorGroup.module.css';

interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode; //"?"=antes dos ":" significa que o elemento é opcional e o 'react node' é porque o icone será um nó do react
};

const SelectorGroup = ({ icon, children, ...rest }: SelectorGroup) => {
    return (
        <div className={styles.container}>
            {icon && <div className={styles.icone}>{icon}</div>}
            <select className={styles.selector} {...rest}>
                {children}
            </select>
        </div>
    )
};

export default SelectorGroup

// interface: também utilizado para tipar elementos, sendo a principal vantagem extender outros elementos de forma mais clara.
// icon &&: se a prop icone for passada um div será renderizada

/*
    Extensão: interface pode ser estendida por outras interfaces, enquanto type pode usar interseções para combinar tipos, 
    mas não pode ser estendido da mesma forma.

    Uniões: type pode criar uniões de tipos, enquanto interface não pode.

    Implementação em Classes: interface é mais comumente usada para definir contratos que classes devem seguir.

*/