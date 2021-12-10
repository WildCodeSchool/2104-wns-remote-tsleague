import React, { useState } from 'react';
import { Formik, Form } from 'formik';
// import { gql, useMutation } from '@apollo/client';
// import Cookies from 'js-cookie';

import { ErrorMsg } from '../styles/Authentication';
import { validationSchemaLogin } from '../../form/validationSchema';
import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  lastname: string;
  firstname: string;
  mail: string;
  phone: string;
  birthday: string;
}

// const USER_LOGIN = gql`
//   mutation Login($body: AuthLoginInput!) {
//     login(body: $body) {
//       id
//       token
//     }
//   }
// `;

function ClassroomForm(): JSX.Element {
  // const [loginMutation] = useMutation(USER_LOGIN);
  const [requestError, setRequestError] = useState('');
  // const history = useHistory();

  const login = async (formData: FormData): Promise<void> => {
    try {
      // const { data } = await loginMutation({
      //   variables: {
      //     body: {
      //       mail: mail,
      //       firstname,
      //     },
      //   },
      // });
      // Cookies.set('token', data.login.token);
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        mail: '',
        phone: '',
        birthday: '',
      }}
      validationSchema={validationSchemaLogin}
      onSubmit={(data: FormData) => login(data)}
    >
      {({ errors, touched }) => (
        <Form>
          <Input
            name="lastname"
            type="lastname"
            errors={errors.lastname}
            touched={touched.lastname}
            placeholder="Nom"
            fullWidth
          />
          <Input
            name="firstname"
            type="firstname"
            errors={errors.firstname}
            touched={touched.firstname}
            placeholder="Prénom"
            fullWidth
          />
          <Input
            name="mail"
            type="mail"
            errors={errors.mail}
            touched={touched.mail}
            placeholder="E-mail"
            fullWidth
          />
          <Input
            name="phone"
            type="phone"
            errors={errors.phone}
            touched={touched.phone}
            placeholder="N° téléphone"
            fullWidth
          />
          <Input
            name="birthday"
            type="birthday"
            errors={errors.birthday}
            touched={touched.birthday}
            placeholder="Date de naissance"
            fullWidth
          />
          {requestError ? <ErrorMsg>{requestError}</ErrorMsg> : ''}
          <Button
            text="sauvegarder modification"
            type="submit"
            buttonStyle="submit"
          />
          <Button text="annuler" type="button" buttonStyle="reverse" />
        </Form>
      )}
    </Formik>
  );
}

export default ClassroomForm;
