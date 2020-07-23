import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Preencha o Nome'),
  email: Yup.string()
    .required('Preencha o Email')
    .email('Digite um Email válido'),
  password: Yup.string().min(6, 'A senha deve ter ao menos 6 caracteres'),
});
