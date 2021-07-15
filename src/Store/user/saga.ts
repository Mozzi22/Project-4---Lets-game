import { takeEvery, call, select, put } from 'redux-saga/effects';
import { putRequest } from 'src/helpers/requests';
import { routes } from 'src/constants/routes';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { support } from 'src/helpers/support';
import { validation } from 'src/helpers/validation';
import { actionTypes } from './actionTypes';
import { changeUser, userLogin } from './selectors';

export function* setNewUserDataSaga() {
    try {
        const newUserInfo = yield select(changeUser);
        const { message: validateMessage, isValid } = yield call(
            [validation, validation.inputMyAccountValidation], newUserInfo);
        if (!isValid) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(validateMessage), i18next.t('input_error'), 2000);
        }
        if (validation.numberValidation(newUserInfo.age)) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t('number_error'), i18next.t('input_error'), 2000);
        }
        const answer = yield call(putRequest, routes.account.update, newUserInfo);
        if (answer.message) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(answer.message), i18next.t('server_error'), 2000);
        }
        const login = yield select(userLogin);
        yield call([support, support.setSessionStorageItem], 'userInfo', { ...answer, login });
        yield put(setValue({ name: 'userInfo', value: { ...answer, login } }));
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherNewUserData() {
    yield takeEvery(actionTypes.SET_NEW_USER_DATA, setNewUserDataSaga);
}