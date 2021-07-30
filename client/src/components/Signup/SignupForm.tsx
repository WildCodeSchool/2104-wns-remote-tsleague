import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { StyledBox } from '../styles/Signup';
import Button from '../common/Button';
import Input from '../common/Input';
import './Signup.css';

const validationSchema = Yup.object().shape({
  className: Yup.string()
    .min(2, 'Votre entrée est trop courte!')
    .max(50, 'Votre entrée est trop longue!')
    .required('Ce champ est obligatoire'),
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer votre email')
    .required('Ce champ est obligatoire'),
  password: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .required('Veuillez entrer votre mot de passe'),
  passwordConfirmation: Yup.string()
    .test(
      'passwords-match',
      'Les mots de passe ne sont pas les mêmes!',
      function (value) {
        return this.parent.password === value;
      }
    )
    .required('Ce champ est obligatoire'),
});

function LoginForm(): JSX.Element {
  return (
    <StyledBox>
      <Formik
        initialValues={{
          className: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="className"
              type="text"
              errors={errors.className}
              touched={touched.className}
              placeholder="Le nom de votre classe"
            />
            <Input
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
              placeholder="Votre e-mail"
            />
            <Input
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              placeholder="Votre mot de passe"
            />
            <Input
              name="passwordConfirmation"
              type="password"
              errors={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              placeholder="Retapez votre mot de passe"
            />

            <Button text="Inscrivez-vous" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <a href="/">Vous avez déjà un compte?</a>
    </StyledBox>
  );
}

export default LoginForm;
