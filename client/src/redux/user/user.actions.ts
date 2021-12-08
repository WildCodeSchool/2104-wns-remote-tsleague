import { UserAction, UserData } from './user.types';

const getUserData = (payload: UserData): UserAction => ({
  type: 'USER_FETCH_DATA',
  payload,
});

export default { getUserData };
