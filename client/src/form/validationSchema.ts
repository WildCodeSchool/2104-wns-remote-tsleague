import * as Yup from 'yup';

const EMAIL = Yup.string()
  .min(4, 'Votre entrée est trop courte!')
  .email('Veuillez entrer votre email')
  .required('Ce champ est obligatoire');
const PASSWORD = Yup.string().required('Veuillez entrer un mot de passe');
const FIRST_NAME = Yup.string().required('Veuillez entrer un prénom');
const LAST_NAME = Yup.string().required('Veuillez entrer un nom');
const CLASSROOM = Yup.string().required('Veuillez entrer le nom de la classe');

export const validationSchemaLogin = Yup.object().shape({
  email: EMAIL,
  password: PASSWORD,
});

export const validationSchemaRegistration = Yup.object().shape({
  firstname: FIRST_NAME,
  lastname: LAST_NAME,
  mail: EMAIL,
  password: PASSWORD,
  classroom: CLASSROOM,
});

export const validationSchemaForgotPassword = Yup.object().shape({
  email: EMAIL,
});

export const validationSchemaResetPassword = Yup.object().shape({
  email: EMAIL,
  password: PASSWORD,
});
