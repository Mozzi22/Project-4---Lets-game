export const ROUTS_WITHOUT_MY_ACCOUNT = ['/', '/registration'];

export const options = [
    { id: 1, label: 'en', value: 'en' },
    { id: 2, label: 'ru', value: 'ru' },
];

export const GameOptions = [
    { id: 1, label: 'TicTacToe', value: 'TicTacToe' },
    { id: 2, label: 'Checkers', value: 'Checkers' },
];

export const ITEMS_FOR_TIC_TAC_TOE = [{
    position: 8,
    isChecked: false,
    figure: null,
},
{
    position: 7,
    isChecked: false,
    figure: null,
},
{
    position: 6,
    isChecked: false,
    figure: null,
},
{
    position: 5,
    isChecked: false,
    figure: null,
},
{
    position: 4,
    isChecked: false,
    figure: null,
},
{
    position: 3,
    isChecked: false,
    figure: null,
},
{
    position: 2,
    isChecked: false,
    figure: null,
},
{
    position: 1,
    isChecked: false,
    figure: null,
},
{
    position: 0,
    isChecked: false,
    figure: null,
}];

export const TIC_TAC_ITEM = {
    X: 'X',
    O: 'O',
};

export const INITIAL_STATE_FOR_CHECKER = Array.from({length: 64}, (_, i) => 64 - i)
