export type UserState = {
  readonly userData: UserData;
};

export type UserClassRoom = {
  id: string;
  name: string;
  __typename: string;
};

export type UserData = {
  readonly id: string;
  readonly lastname: string;
  readonly firstname: string;
  readonly role: string;
  readonly classrooms: Partial<UserClassRoom>[];
  readonly token: string;
};

export type UserAction = {
  type: 'USER_FETCH_DATA';
  payload: UserData;
};
