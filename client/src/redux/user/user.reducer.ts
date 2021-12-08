import type { UserAction, UserState } from './user.types';

const initialUserState = {
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
  state = initialUserState,
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
