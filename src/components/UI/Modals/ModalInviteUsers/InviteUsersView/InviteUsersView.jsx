import React, { useState } from 'react';
import UsersItem from 'src/components/UI/UserItem';
import Button from 'src/components/UI/Button';
import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import { MODAL_USERS_BUTTON } from 'src/constants/componentsСonsts';
import { StContentModalUsers, StControlPanel, StUsersItem } from './styled';

const InviteUsersView = ({ users, changeModalVisibility, setUserInRoom }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({ user_ids: [] });
    const handleToggleUsers = (e) => {
        setState({
            ...state,
            user_ids: state.user_ids.includes(e.name)
            ? state.user_ids.filter(id => id !== e.name)
            : [...state.user_ids, Number(e.name)],
        });
    };
    const handleCloseModal = () => changeModalVisibility({ modalType: 'usersInChat', data: {}, isOpen: false });
    const handleSetNewUsersClick = () => {
        if (state.user_ids.length < 1) {
            return NotificationManager.error(t('empty_users_list'), t('input_error'), 2000);
        }
        setUserInRoom(state.user_ids);
        handleCloseModal();
    };
    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'sendMessage': return handleSetNewUsersClick;
            default: return handleCloseModal;
        }
    };
    return (
        <StContentModalUsers>
            <StUsersItem>
            {users?.length > 0 ? users.map((user) => {
                return (
                    <UsersItem
                    id={user.id}
                    login={user.login}
                    key={user.id}
                    onChange={handleToggleUsers}
                    isSelected={state.user_ids.includes(user.id)}
                    />
                );
            }) : null}
            </StUsersItem>
            <StControlPanel>
                {MODAL_USERS_BUTTON.map((el) => {
                    return (
                        <Button
                            key={el.id}
                            content={el.content}
                            id={el.id}
                            onClick={getFunctionForButtons(el)}
                        />
                    );
                })}
            </StControlPanel>
        </StContentModalUsers>
    );
};

export default InviteUsersView;
