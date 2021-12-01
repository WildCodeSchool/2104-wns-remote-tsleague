import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { StyledBox } from '../styles/StudentRegistration';
import Button from '../common/Button';
import Input from '../common/Input';

const validationSchema = Yup.object().shape({
  studentFirstName: Yup.string().required(
    "Veuillez entrer le prénom de l'enseignant"
  ),
  studentLastName: Yup.string().required(
    "Veuillez entrer le nom de la l'enseignant"
  ),
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer un mot de passe'),
});

function ClassroomRegistrationForm(): JSX.Element {
  return (
    <StyledBox>
      <Formik
        initialValues={{
          studentFirstName: '',
          studentLastName: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="studentLastname"
              type="text"
              errors={errors.studentLastName}
              touched={touched.studentLastName}
              placeholder="Nom de l'élève"
            />
            <Input
              name="studentFirstName"
              type="text"
              errors={errors.studentFirstName}
              touched={touched.studentFirstName}
              placeholder="Prénom de l'élève"
            />
            <Input
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
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
