export type TUserData = {
    name: string, value: string | null | boolean
}

export type TInitialUserData = {
  theme: {
    light: string;
    dark: string;
  };
  themeMode: string;
  token: string | null;
  userInfo: string;
  login: string;
  firstName: string;
  lastName: string;
  id: number;
  age: number;
  hobby: string;
  company: string;
  city: string;
  init: boolean;
  settings: string | {
    notifications: boolean;
  };
  changeUser: string | null;
}

export type TChangeUserData = {
  changeUser: {};
  name: string,
  value: string | null | boolean
}

export type TAuthValues = {
  token: string | null;
  userInfo: string;
  changeUser: string | null;
}
