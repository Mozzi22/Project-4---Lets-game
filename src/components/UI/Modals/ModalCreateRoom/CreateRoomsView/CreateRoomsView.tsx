import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import Input from 'src/components/UI/Input';
import Button from 'src/components/UI/Button';
import { CreateRoomsWrapper } from './styled';
import { MODAL_CREATE_GAME } from 'src/constants/componentsСonsts';

const CreateRoomsView = ({ createNewGame, changeModalVisibility }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({ newGameName: '' });
    const handleCreateNewRoom = () => {
        if (!state.newGameName) {
            return NotificationManager
                .error(t('without_text_new_room'), t('input_error'), 2000);
        }
        createNewGame(state.newGameName);
        changeModalVisibility({
            isOpen: false, data: {}, modalType: 'createGame',
        });
    };
    const handleOnChange = ({ value }) => {
        setState({ ...state, newGameName: value });
    };
      const handleCloseModal = () => changeModalVisibility({ modalType: 'createGame', data: {}, isOpen: false });
    const handleSetNewUsersClick = () => {
        // if (state.user_ids.length < 1) {
        //     return NotificationManager.error(t('empty_users_list'), t('input_error'), 2000);
        // }
        setUserInRoom(state.user_ids);
        handleCloseModal();
    };
     const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'createGame': return handleSetNewUsersClick;
            default: return handleCloseModal;
        }
    };
    return (
        <CreateRoomsWrapper>
            <Input
                id="create_room_input"
                name="create__room_input"
                onChange={handleOnChange}
                value={state.value}
                placeholder='create_new_room_input_placeholder'
                width="400px"
            />
             {MODAL_CREATE_GAME.map((el) => {
                    return (
                        <Button
                            key={el.id}
                            content={el.content}
                            id={el.id}
                            onClick={getFunctionForButtons(el)}
                        />
                    );
                })}
        </CreateRoomsWrapper>
    );
};

CreateRoomsView.propTypes = {
    createNewRoom: PropTypes.func.isRequired,
    changeModalVisibility: PropTypes.func.isRequired,
};

export default CreateRoomsView;
