function teacherRegister({ firstname, name }): {
  subject: string;
  html: string;
} {
  return {
    subject: 'Bienvenue sur Pixelearn',
    html: `
    <p>Hello ${firstname} ${name}</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Nous sommes absolument ravis de vous avoir à bord !</p>
    <p>Grâce à Pixelearn, vous pouvez à tout instant : </p>
    <ul>
      <li>Ajouter de nouveaux élèves dans votre école</li>
      <li>Vous déplacer dans une école virtuellement</li>
      <li>Accéder à une bibliothèque personnelle</li>
    </ul>
    <p>Ne perdez plus un instant, et mettez vous au travail !</p>
    <p>Pixelearn</p>
    `,
  };
}

export default teacherRegister;
