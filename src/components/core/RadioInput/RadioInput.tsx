import { ContainerB } from './RadioInput.styles';
import { IInputProps } from './RadioInput.types';

const RadioInput = ({ ...props }: IInputProps) => {
  return (
    <ContainerB>
      {/* <RadioInputStyled {...props} className={`${className}`} type="radio" /> */}
      <label className="container" {...props}>
        One
        <input type="radio" checked name="radio" />
        <span className="checkmark"></span>
      </label>
    </ContainerB>
  );
};

export default RadioInput;
