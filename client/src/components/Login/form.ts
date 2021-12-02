import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer votre email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer votre mot de passe'),
});

export default validationSchema;
