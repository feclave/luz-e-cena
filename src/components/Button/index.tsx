import styles from "./Button.module.css";
import classnames from "classnames";

type ButtonProps = {
    variant: "default" | "icon" //union types: faz a união de dois tipos que podem variar conforme a seleção.
} & React.ButtonHTMLAttributes<HTMLButtonElement> //o botão terá os tipos definidos em chaves e os instrínsecos de um elemento de botão no HTML

const Button = ({ children, variant = 'default', ...rest }: ButtonProps) => { //tipagem nas props / a variante é a default se não for selecionada

    const classMap = { // mapa de classes para o botão
        default: styles.default,
        icon: styles.icon,
    }

    return (
        <button
            className={classnames(styles.botao, classMap[variant])} // acessa os estilos de acordo com a variante que for definida
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button

// Prop "variant" define os tipo de botões que podem existir
// classNames: npm i classnames, é uma biblioteca que permite trabalhar com estilos dinâmicos no React.