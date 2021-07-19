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
        placeholder: 'placeholder_shearch_input',
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

export const LINKS = [
{
    id: 'main-page',
    content: 'main_page',
    goToPage() {
        history.push('/main');
    },
},
{
    id: 'statistics',
    content: 'statistics',
    goToPage() {
        history.push('/statistics');
    },
}];
