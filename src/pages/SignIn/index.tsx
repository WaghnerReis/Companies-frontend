import React, { useCallback, useEffect, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { getValidationErrors } from '../../utils';
import { useAuth } from '../../hooks/auth';

import { SignInCredentials } from '../../interfaces';

import { Container } from './styles';

import LogoHome from '../../assets/images/logo-home.png';
import { Input, Button, Load } from '../../components';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signRequest, error, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      formRef.current?.setErrors({
        email: ' ',
        password: ' ',
      });
    }
  }, [error]);

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
          password: Yup.string().min(8, 'No mínimo 8 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signRequest(data);
        history.push('/Companies');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, signRequest]
  );

  return (
    <Container>
      {loading && <Load />}

      <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={LogoHome} alt="Logo da Ioasys" />

        <strong>BEM-VINDO AO EMPRESAS</strong>

        <span>
          Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
        </span>

        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" type="password" />

        <p>{error}</p>

        <Button type="submit">ENTRAR</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
