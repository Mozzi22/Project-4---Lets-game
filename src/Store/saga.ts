import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherGames } from './games/saga';
// import { watcherNewUserData } from './user/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherGames
    // watcherNewUserData,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
