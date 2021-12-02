function studentRegister({ firstname, name, url }): {
  subject: string;
  html: string;
} {
  return {
    subject: 'Bienvenue sur Pixelearn',
    html: `
    <p>Hello ${firstname} ${name}</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Visiblement ton professeur t'as ajouté à sa classe !</p>
    <p>Grâce à Pixelearn, vous pouvez à tout instant : </p>
    <p>Ne perd pas de temps, viens t'inscrire dès maintenant en allant sur cette url: ${url} !</p>
    <p>Pixelearn</p>
    `,
  };
}

export default studentRegister;
