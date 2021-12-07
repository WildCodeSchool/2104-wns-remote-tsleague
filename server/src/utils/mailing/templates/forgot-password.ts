import serverConfig from '../../../config/server-config';

const { SERVER_STAGE } = process.env;

export type InputForgotPasswordTemplate = {
  mail: string;
  token?: string;
};

function forgotPassword({ mail, token }: InputForgotPasswordTemplate): {
  subject: string;
  html: string;
} {
  if (!SERVER_STAGE) {
    throw new Error('SERVER_STAGE must be defined');
  }

  const url = `${serverConfig[SERVER_STAGE].urlFront}reset-password?email=${mail}&token=${token}`;

  return {
    subject: 'Changement de mot de passe - Pixelearn',
    html: `
    <p>${mail}</p>
    <p>Il y a eu une demande de changement de mot de passe !</p>
    <p>Si vous n'avez pas fait cette demande, veuillez ignorer cet e-mail.</p>
    <p>Sinon, veuillez cliquer sur ce lien pour modifier votre mot de passe : ${url}</p>
    <p>Pixelearn</p>
    `,
  };
}

export default forgotPassword;
