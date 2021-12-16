import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';

import { ErrorMsg } from '../styles/Authentication';
import { validationSchemaAddStudent } from '../../form/validationSchema';
import Button from '../common/Button';
import Input from '../common/Input';
import { State } from '../../redux/root-reducer';

interface ClassroomFormProps {
  handleModalForm: () => void;
}

interface FormData {
  mail: string;
  classroom?: string;
}

const ADD_STUDENT = gql`
  mutation SendEmailNewStudent($classroom: String!, $email: String!) {
    sendEmailNewStudent(classroom: $classroom, email: $email) {
      id
    }
  }
`;

function ClassroomForm({ handleModalForm }: ClassroomFormProps): JSX.Element {
  const classroomsName = useSelector(
    (state: State) => state.user.userData.classrooms[0].name
  );
  const [addStudentMutation] = useMutation(ADD_STUDENT);
  const [requestError, setRequestError] = useState('');

  const addStudent = async ({ mail, classroom }: FormData): Promise<void> => {
    try {
      await addStudentMutation({
        variables: { email: mail, classroom },
      });
      handleModalForm();
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        mail: '',
        classroom: classroomsName,
      }}
      validationSchema={validationSchemaAddStudent}
      onSubmit={(data: FormData) => addStudent(data)}
    >
      {({ errors, touched, handleReset }) => (
        <Form>
          <Input
            name="mail"
            type="mail"
            errors={errors.mail}
            touched={touched.mail}
            placeholder="E-mail"
            fullWidth
          />
          {requestError || errors.classroom ? (
            <ErrorMsg>{requestError || errors.classroom}</ErrorMsg>
          ) : (
            ''
          )}
          <Button text="Ajouter un élève" type="submit" buttonStyle="submit" />
          <Button
            text="annuler"
            type="button"
            buttonStyle="reverse"
            handleClick={() => {
              handleReset();
              handleModalForm();
            }}
          />
        </Form>
      )}
    </Formik>
  );
}

export default ClassroomForm;
