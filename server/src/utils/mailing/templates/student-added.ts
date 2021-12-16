import serverConfig from '../../../config/server-config';

const { SERVER_STAGE } = process.env;

export type InputStudentAddedTemplate = {
  mail: string;
  classroom?: string;
};

function studentAdded({ classroom }: InputStudentAddedTemplate): {
  subject: string;
  html: string;
} {
  if (!SERVER_STAGE) {
    throw new Error('SERVER_STAGE must be defined');
  }

  const registerUrl = `${serverConfig[SERVER_STAGE].urlFront}register-student?classroom=${classroom}`;

  return {
    subject: 'Bienvenue sur Pixelearn 🏫',
    html: `
    <p>Hello 🧑‍🎓</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Visiblement ton professeur t'as ajouté à sa classe !</p>
    <p>Ne perd pas de temps, viens t'inscrire dès maintenant en allant sur cette url: ${registerUrl} !</p>
    <p>Pixelearn</p>
    `,
  };
}

export default studentAdded;
