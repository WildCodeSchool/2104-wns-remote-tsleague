export type UserState = {
  readonly userData: UserData;
};

export type UserData = {
  readonly id: string;
  readonly lastname: string;
  readonly firstname: string;
  readonly role: string;
  readonly classrooms: string[];
  readonly token: string;
};

export type UserAction = {
  type: 'USER_FETCH_DATA';
  payload: UserData;
};
