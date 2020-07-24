import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import { signUpSchema } from './dataShecma';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      await signUpSchema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="Logo GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1> Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="create">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
