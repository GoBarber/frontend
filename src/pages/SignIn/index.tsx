import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { signInSchema } from './dataShecma';
import { Container, Content, Background } from './styles';

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, user } = useAuth();

  console.log(user);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        await signInSchema.validate(data, { abortEarly: false });

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

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
