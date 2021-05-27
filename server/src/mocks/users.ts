import casual from 'casual';
import { User } from '../models/user-model';

export default {
  Int: (): number => 6,
  Float: (): number => 22.1,
  String: (): string => 'Hello',
  User: (): User => ({
    id: casual.uuid,
    lastname: casual.last_name,
    firstname: casual.first_name,
    mail: casual.email,
    birthday: casual.date(),
    password: casual.password,
    role: 'admin',
  }),
};
