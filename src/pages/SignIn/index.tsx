import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import { signInSchema } from './dataShecma';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      await signInSchema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1> Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="create">
          <FiLogIn />
          Criar minha conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
