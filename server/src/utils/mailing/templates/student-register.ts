import serverConfig from '../../../config/server-config';

const { SERVER_STAGE } = process.env;

type InputStudentRegisterTemplate = {
  firstname: string;
  name: string;
  classroom: string;
};

function studentRegister({ firstname, name, classroom }: InputStudentRegisterTemplate): {
  subject: string;
  html: string;
} {
  if (!SERVER_STAGE) {
    throw new Error('SERVER_STAGE must be defined');
  }

  const registerUrl = `${serverConfig[SERVER_STAGE]}/register-student?classroom=${classroom}`;
  return {
    subject: 'Bienvenue sur Pixelearn 🏫',
    html: `
    <p>Hello ${firstname} ${name} 🧑‍🎓</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Visiblement ton professeur t'as ajouté à sa classe !</p>
    <p>Ne perd pas de temps, viens t'inscrire dès maintenant en allant sur cette url: ${registerUrl} !</p>
    <p>Pixelearn</p>
    `,
  };
}

export default studentRegister;
