import styles from './Link.module.css';

const Link = ({children,  ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => { //é tipado com um recurso do React chamado de 'atributos intrínsecos' para o elemento que está sendo trabalhado, no caso um âncora.
  return (
    <a className={styles.link} {... rest}>{children}</a> //um âncora recebe várias propriedades, o '...rest' é um spread operator que espalhará todas as propriedades restantes que poderão ser recebidas como href, target, etc
  )
};

export default Link;

//É necessário utilizar também para a tipagem uma notação do Typescript conhecida como 'Generics' <>
//Na notação escrevemos exatamente o elemento que queremos
//Essa notação é para o Typescript o que um parâmetro é para suas funções, ou seja, só em tempo de compilação é que esse componente vai descobrir o tipo do children que está sendo recebido