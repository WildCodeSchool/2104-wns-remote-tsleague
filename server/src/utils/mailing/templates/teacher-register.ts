export type InputTeacherRegisterTemplate = {
  mail: string;
  firstname: string;
  lastname: string;
  studentUser1?: string;
  studentUser2?: string;
};

function teacherRegister({
  firstname = '',
  lastname = '',
  studentUser1,
  studentUser2,
}: InputTeacherRegisterTemplate): {
    subject: string;
    html: string; } {
  return {
    subject: 'Bienvenue sur Pixelearn',
    html: `
    <p>Hello ${firstname} ${lastname}</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Nous sommes absolument ravis de vous avoir à bord !</p>
    <p>Grâce à Pixelearn, vous pouvez à tout instant : </p>
    <ul>
      <li>Ajouter de nouveaux élèves dans votre école</li>
      <li>Vous déplacer dans une école virtuellement</li>
      <li>Accéder à une bibliothèque personnelle</li>
    </ul>
    <p>Nous avons crée deux utilisateurs test pour vous, voici leurs identifiants</p>
    <p>🧑‍🎓 Utilisateur 1 : ${studentUser1}</p>
    <p>🧑‍🎓 Utilisateur 2 : ${studentUser2}</p>
    <p>Le mot de passe est le même que votre compte principal</p>
    <p>Ne perdez plus un instant, et mettez vous au travail !</p>
    <p>Pixelearn</p>
    `,
  };
}

export default teacherRegister;
