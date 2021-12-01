import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useHistory, useLocation, Link } from 'react-router-dom';

import { StyledBox, ErrorMsg } from '../styles/Registration';
import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  lastname: string;
  firstname: string;
  mail: string;
  password: string;
  role?: 'teacher' | 'student';
  classroom?: string;
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Veuillez entrer un prénom'),
  lastname: Yup.string().required('Veuillez entrer un nom'),
  mail: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer un mot de passe'),
  classroom: Yup.string().required('Veuillez entrer le nom de la classe'),
});

const USER_REGISTER = gql`
  mutation Register($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RegistrationForm(): JSX.Element {
  const history = useHistory();
  const { pathname } = useLocation();
  const query = useQuery();
  const [registerMutation] = useMutation(USER_REGISTER);
  const [registerError, setRegisterError] = useState('');
  const [teacherForm, setTeacherForm] = useState(
    pathname === '/register-teacher'
  );

  const register = async (formData: FormData) => {
    const { firstname, lastname, mail, password, classroom } = formData;
    setRegisterError('');
    try {
      const { data } = await registerMutation({
        variables: {
          body: {
            lastname,
            firstname,
            mail,
            password,
            classroom,
            role: teacherForm ? 'teacher' : 'student',
          },
        },
      });
      Cookies.set('token', data.register.token);
      return history.push('/');
    } catch (error: any) {
      if (error.message === 'Email already exist, please use an another one') {
        return setRegisterError(
          "L'email existe déjà, merci d'en utiliser un autre"
        );
      }
      return setRegisterError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          firstname: 'test',
          lastname: 'test',
          mail: 'testmail1@mail.com',
          password: 'test',
          classroom: query.get('classroom') ?? 'test',
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
              placeholder="Nom de l'enseignant"
            />
            <Input
              name="firstname"
              type="text"
              errors={errors.firstname}
              touched={touched.firstname}
              placeholder="Prénom de l'enseignant"
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
            {teacherForm ? (
              <Input
                name="classroom"
                type="text"
                errors={errors.classroom}
                touched={touched.classroom}
                placeholder="Nom de la classe"
              />
            ) : (
              ''
            )}
            {registerError ? <ErrorMsg>{registerError}</ErrorMsg> : ''}
            <Button text="INSCRIRE" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <Link to="/">Revenir sur la page d&apos;accueil</Link>
    </StyledBox>
  );
}

export default RegistrationForm;
