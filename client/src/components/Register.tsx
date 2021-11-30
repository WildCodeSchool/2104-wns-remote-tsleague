import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';

const USER_REGISTER = gql`
  mutation Login($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function Register() {
  const [registerMutation, { data, loading, error }] = useMutation(
    USER_REGISTER,
    { errorPolicy: 'all' }
  );

  if (loading) return <p>Submitting... </p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <button
        onClick={() =>
          registerMutation({
            variables: {
              body: {
                lastname: 'sam',
                firstname: 'bill',
                mail: 'sam.bill@hotmail.fr',
                password: 'azerty',
                role: 'admin',
                classroom: 'class 01',
              },
            },
          })
        }
      >
        Register
      </button>
    </div>
  );
}

export default Register;
