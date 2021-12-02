import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer votre email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer votre mot de passe'),
});

export const validationSchemaRegistration = Yup.object().shape({
  firstname: Yup.string().required('Veuillez entrer un prénom'),
  lastname: Yup.string().required('Veuillez entrer un nom'),
  mail: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer un mot de passe'),
  classroom: Yup.string().required('Veuillez entrer le nom de la classe'),
});
