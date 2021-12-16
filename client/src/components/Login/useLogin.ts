import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

type LoginFunction = (userCredentials: FormValues) => Promise<void>;

type UseLogin = { login: LoginFunction; requestError: string };

type Classroom = { id: string };

type Login = {
  id: string;
  firstname: string;
  lastname: string;
  classrooms: Classroom;
  role: string;
  token: string;
};

const USER_LOGIN = gql`
  mutation Login($body: AuthLoginInput!) {
    login(body: $body) {
      id
      firstname
      lastname
      classrooms {
        id
      }
      role
      token
    }
  }
`;

const useLogin = (): UseLogin => {
  const dispatch = useDispatch();
  const [loginMutation] = useMutation(USER_LOGIN);
  const [requestError, setRequestError] = useState('');
  const history = useHistory();

  const login: LoginFunction = async (userCredantials): Promise<void> => {
    try {
      const { data } = await loginMutation({
        variables: {
          body: {
            mail: userCredantials.email,
            password: userCredantials.password,
          },
        },
      });
      const { token, ...loginPayload }: Login = data.login;
      Cookies.set('token', token);
      dispatch({ type: 'USER_FETCH_DATA', payload: loginPayload });
      history.push('/game');
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return { login, requestError };
};

export default useLogin;
