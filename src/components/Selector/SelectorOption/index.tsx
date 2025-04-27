interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
    label: string; //";" no final de cada prop
    value: string;
};

const SelectorOption = ({ label, value, ...rest }: SelectorOption) => {
  return (
    <option value={value} {...rest}>
        {label}
    </option>
  )
};

export default SelectorOption

//é uma boa prática tipar o que os componentes recebem como prop e não o componente/função em si