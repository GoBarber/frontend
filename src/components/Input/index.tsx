import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

// Converte o atributo icon em letra maiuscula para que possa entender que é um componente.
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  // Porque usar useCallBack?
  // No react, toda fez que uma função (ou componente) tem mudança de estado ou props, ele é renderizado novamente
  // Isso quer dizer que a função hadleInputBlur seria adicionada à memória novamente muitas vezes
  // O useCallback indica quando ela função deve ser adicionada/reescrita, neste caso, [] => apenas no começo
  const hadleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const hadleInputFocus = useCallback(() => setIsFocused(true), []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={() => hadleInputFocus()}
          onBlur={() => hadleInputBlur()}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>
      {error}
    </>
  );
};

export default Input;
