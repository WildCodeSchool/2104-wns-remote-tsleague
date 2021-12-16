export type InputStudentRegisterTemplate = {
  mail: string;
  firstname: string;
  lastname: string;
};

function studentRegister({
  firstname = '',
  lastname = ''
}: InputStudentRegisterTemplate): {
    subject: string;
    html: string; } {

  return {
    subject: 'Bienvenue sur Pixelearn 🏫',
    html: `
    <p>Hello ${firstname} ${lastname}</p>
    <p>Bienvenue sur Pixelearn !</p>
    <p>Nous sommes absolument ravis de vous avoir à bord !</p>
    <p>Ne perdez plus un instant, et mettez vous au travail !</p>
    <p>Pixelearn</p>
    `,
  };
}
export default studentRegister;
