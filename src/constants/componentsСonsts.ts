import history from 'src/helpers/history';

interface IRegInput {
    id: 'login' | 'password' | 'confirm';
    placeholder: string;
    label: string;
}

export const regInputs: Array<IRegInput> = [{
    id: 'login',
    label: 'login_label',
    placeholder: 'login_placeholder',
},
{
    id: 'password',
    label: 'password_label',
    placeholder: 'password_placeholder',
},
{
    id: 'confirm',
    label: 'confirm_label',
    placeholder: 'confirm_placeholder',
}];

export const logInputs = [{
    id: 'login',
    label: 'login_label',
    placeholder: 'login_placeholder',
},
{
    id: 'password',
    label: 'password_label',
    placeholder: 'password_placeholder',
}];

export const INPUT__MESSAGE = [{
    id: 'message',
    placeholder: 'placeholder_control_input',
}];

export const INPUT_PLACEHOLDER_SEARCH = [{
        id: 'search',
        placeholder: 'placeholder_search_input',
}];

export const MODAL_USERS_BUTTON = [{
    id: 'closeModal',
    content: 'modal_users_cancel',
    value: '',
},
{
    id: 'sendMessage',
    content: 'modal_users_confirm',
    value: '',
    }];
interface IBurronJoinToGame {
    id: string;
    name: string;
    content: string;
}
export const BUTTON_JOIN_TO_GAME: Array<IBurronJoinToGame>  = [{
    id: 'join',
    name: 'join_to_game',
    content: 'join_to_game',
},
{
    id: 'play_with_bot',
    name: 'join_to_game_with_bot',
    content: 'join_to_game_with_bot',
}];

export const MODAL_CREATE_GAME = [{
    id: 'createGame',
    content: 'modal_users_confirm',
    value: '',
},
    {
    id: 'closeModal',
    content: 'modal_users_cancel',
    value: '',
}];

export const BOT_NAME = 'Bot';
export const DRAW = 'draw';
export const CHECKERS = 'Checkers';
export const BOT_TIC = 'Not your turn Bot';
export const BOT_CHECKERS = 'NOT YOU TURN Bot';

export const CHECKER_FIELD_INIT = [
  null,
  {
    checker: { blackChecker: false, queen: false },
    index: 1,
    blackSquare: true,
  },
  {
    checker: null,
    index: 2,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 3,
    blackSquare: true,
  },
  {
    checker: null, index: 4, blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 5,
    blackSquare: true,
  },
  {
    checker: null,
    index: 6,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 7,
    blackSquare: true,
  },
  { checker: null, index: 8, blackSquare: false },
  { checker: null, index: 9, blackSquare: false },
  {
    checker: { blackChecker: false, queen: false },
    index: 10,
    blackSquare: true,
  },
  {
    checker: null,
    index: 11,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 12,
    blackSquare: true,
  },
  {
    checker: null,
    index: 13,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 14,
    blackSquare: true,
  },
  {
    checker: null,
    index: 15,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 16,
    blackSquare: true,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 17,
    blackSquare: true,
  },
  {
    checker: null,
    index: 18,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 19,
    blackSquare: true,
  }, {
    checker: null,
    index: 20,
    blackSquare: false,
  },
  {
    checker: { blackChecker: false, queen: false },
    index: 21,
    blackSquare: true,
  },
  {
    checker: null,
    index: 22,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: false,
      queen: false,
    },
    index: 23,
    blackSquare: true,
  },
  {
    checker: null,
    index: 24,
    blackSquare: false,
  },
  {
    checker: null,
    index: 25,
    blackSquare: false,
  },
  {
    checker: null,
    index: 26,
    blackSquare: true,
  },
  {
    checker: null,
    index: 27,
    blackSquare: false,
  },
  {
    checker: null,
    index: 28,
    blackSquare: true,
  },
  {
    checker: null,
    index: 29,
    blackSquare: false,
  },
  {
    checker: null,
    index: 30,
    blackSquare: true,
  },
  {
    checker: null,
    index: 31,
    blackSquare: false,
  },
  {
    checker: null,
    index: 32,
    blackSquare: true,
  },
  {
    checker: null,
    index: 33,
    blackSquare: true,
  },
  {
    checker: null,
    index: 34,
    blackSquare: false,
  },
  {
    checker: null,
    index: 35,
    blackSquare: true,
  },
  {
    checker: null,
    index: 36,
    blackSquare: false,
  },
  {
    checker: null,
    index: 37,
    blackSquare: true,
  },
  {
    checker: null,
    index: 38,
    blackSquare: false,
  },
  {
    checker: null,
    index: 39,
    blackSquare: true,
  },
  {
    checker: null,
    index: 40,
    blackSquare: false,
  },
  {
    checker: null,
    index: 41,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 42,
    blackSquare: true,
  },
  {
    checker: null,
    index: 43,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 44,
    blackSquare: true,
  },
  {
    checker: null,
    index: 45,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 46,
    blackSquare: true,
  },
  {
    checker: null,
    index: 47,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 48,
    blackSquare: true,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 49,
    blackSquare: true,
  },
  {
    checker: null,
    index: 50,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 51,
    blackSquare: true,
  },
  {
    checker: null,
    index: 52,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 53,
    blackSquare: true,
  },
  {
    checker: null,
    index: 54,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 55,
    blackSquare: true,
  },
  {
    checker: null,
    index: 56,
    blackSquare: false,
  },
  {
    checker: null,
    index: 57,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 58,
    blackSquare: true,
  },
  {
    checker: null,
    index: 59,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 60,
    blackSquare: true,
  },
  {
    checker: null,
    index: 61,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 62,
    blackSquare: true,
  },
  {
    checker: null,
    index: 63,
    blackSquare: false,
  },
  {
    checker: {
      blackChecker: true,
      queen: false,
    },
    index: 64,
    blackSquare: true,
  },
];

export const LINKS = [{
    id: 'main-page',
    rout: '/main',
    content: 'main_page',
    goToPage() {
        history.push('/main');
    },
},
{
    id: 'statistics',
    rout: '/statistics',
    content: 'statistics',
    goToPage() {
        history.push('/statistics');
    },
}];
