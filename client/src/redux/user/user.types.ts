export type UserState = {
  userData: UserData;
};

export type UserData = {
  id: string;
  lastname: string;
  firstname: string;
  role: string;
  classrooms: string[];
  token: string;
};

export type UserAction = {
  type: 'USER_FETCH_DATA';
  payload: UserData;
};
