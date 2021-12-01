import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { StyledBox } from '../styles/ClassroomRegistration';
import Button from '../common/Button';
import Input from '../common/Input';

const validationSchema = Yup.object().shape({
  teacherFirstName: Yup.string().required(
    "Veuillez entrer le prénom de l'enseignant"
  ),
  teacherLastName: Yup.string().required(
    "Veuillez entrer le nom de la l'enseignant"
  ),
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer un mot de passe'),
  className: Yup.string().required('Veuillez entrer le nom de la classe'),
});

function ClassroomRegistrationForm(): JSX.Element {
  return (
    <StyledBox>
      <Formik
        initialValues={{
          teacherFirstName: '',
          teacherLastName: '',
          email: '',
          password: '',
          className: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="teacherLastname"
              type="text"
              errors={errors.teacherLastName}
              touched={touched.teacherLastName}
              placeholder="Nom de l'enseignant"
            />
            <Input
              name="teacherFirstName"
              type="text"
              errors={errors.teacherFirstName}
              touched={touched.teacherFirstName}
              placeholder="Prénom de l'enseignant"
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
            <Input
              name="className"
              type="text"
              errors={errors.className}
              touched={touched.className}
              placeholder="Nom de la classe"
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
