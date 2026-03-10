import { Input, type InputProps } from 'antd';
import type { ChangeEvent } from 'react';

interface IInputProps extends InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  id?: string;
}

const BaseInput = ({ value, onChange, type, className, placeholder, id, ...rest }: IInputProps) => {
  return (
    <Input
      id={id}
      className={className}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const InputComponent = Object.assign(BaseInput, {
  Password: Input.Password,
  Search: Input.Search,
  TextArea: Input.TextArea,
});

export default InputComponent;