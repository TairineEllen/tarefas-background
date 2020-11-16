import passwordGenerator from 'password-generator';
import Queue from '../lib/queue';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false)
    };

    await Queue.add('registrationMail', { user })

    return res.json(user);
  }

  
};

