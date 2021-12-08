import type { UserAction, UserState } from './user.types';

const initialUserState: UserState = {
  userData: {
    id: '',
    lastname: '',
    firstname: '',
    role: '',
    classrooms: [],
    token: '',
  },
};

const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'USER_FETCH_DATA': {
      return { ...state, userData: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
