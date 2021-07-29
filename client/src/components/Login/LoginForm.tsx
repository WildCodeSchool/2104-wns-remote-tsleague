import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { StyledBox } from '../styles/Login';
import Button from '../common/Button';
import Input from '../common/Input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez mettre votre email')
    .required('Ce champ est obligatoire'),
  password: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .required('Ce champ est obligatoire'),
});

function LoginForm(): JSX.Element {
  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
            {/* <button type="submit">Submit</button> */}
            <Button text="Connectez-vous" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <a href="http://localhost:3000/">Vous avez oublié votre mot de passe ?</a>
    </StyledBox>
  );
}

export default LoginForm;
