import styles from './Fieldset.module.css'

type FieldsetProps = {
    variant?: "primary" | "secondary" //tipagem de variant
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>; //tipagem do fieldset

const Fieldset = ({ children, variant = "primary" }: FieldsetProps) => {
    return (
        <fieldset
            className={`${styles.inputWrapper} ${
            variant === "primary" ? styles.primary : styles.secondary //ternário: se for primary, senão secondary
            }`}
        >
            {children}
        </fieldset>
    )
}

export default Fieldset