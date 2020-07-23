import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Preencha o Nome'),
  email: Yup.string().required('Preencha o Email').email('Email inválido'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres'),
});
