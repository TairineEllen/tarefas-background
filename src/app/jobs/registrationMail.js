import mail from '../lib/mail';

export default {
  key: 'registrationMail',
  options: {
    delay: 5000,
    priority: 3

  },
  async handle({ data }) {
    const { user } = data;

    await mail.sendMail({
      from: 'Tairine <tairine.ellen@gmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo a DIO!`
    });
    
  }
}


