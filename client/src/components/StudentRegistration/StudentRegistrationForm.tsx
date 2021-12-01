import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

import { StyledBox } from '../styles/StudentRegistration';
import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  lastname: string;
  firstname: string;
  mail: string;
  password: string;
  role?: 'student';
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Veuillez entrer le prénom de l'enseignant"),
  lastname: Yup.string().required("Veuillez entrer le nom de la l'enseignant"),
  mail: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer un mot de passe'),
});

const USER_REGISTER = gql`
  mutation Register($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function ClassroomRegistrationForm(): JSX.Element {
  const [registerMutation] = useMutation(USER_REGISTER);
  const [registerError, setRegisterError] = useState('');
  const history = useHistory();

  const register = async (formData: FormData) => {
    const { firstname, lastname, mail, password } = formData;

    setRegisterError('');
    try {
      const { data } = await registerMutation({
        variables: {
          body: {
            lastname,
            firstname,
            mail,
            password,
            role: 'student',
          },
        },
      });
      Cookies.set('token', data.register.token);
      return history.push('/');
    } catch (error: any) {
      return setRegisterError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          mail: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data: FormData) => register(data)}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="lastname"
              type="text"
              errors={errors.lastname}
              touched={touched.lastname}
              placeholder="Nom de l'élève"
            />
            <Input
              name="firstname"
              type="text"
              errors={errors.firstname}
              touched={touched.firstname}
              placeholder="Prénom de l'élève"
            />
            <Input
              name="mail"
              type="email"
              errors={errors.mail}
              touched={touched.mail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              placeholder="Mot de passe"
            />
            <Button text="INSCRIRE" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <a href="/">Revenir sur la page d&apos;accueil </a>
    </StyledBox>
  );
}

export default ClassroomRegistrationForm;
