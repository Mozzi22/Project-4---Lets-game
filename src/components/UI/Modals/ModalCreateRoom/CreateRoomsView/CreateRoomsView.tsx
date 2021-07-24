import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import { CreateRoomsWrapper, StControlPanel } from './styled';
import { MODAL_CREATE_GAME } from 'src/constants/componentsСonsts';
import Select from 'src/components/UI/Select';
import { GameOptions } from 'src/constants/ui';
import { TModalData } from 'src/Store/modals/types';

interface ICreateRoomsView {
    createRoom: () => void;
    changeModalVisibility: (arg: TModalData) => void;
}
const CreateRoomsView: React.FC<ICreateRoomsView> = ({ createRoom, changeModalVisibility }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({ gameType: 'Tic-tac-toe' });
    const handleChangeTypeGame = (e) => {
        setState({ ...state, gameType: e.target.value });
    };
    const handleCloseModal = () => changeModalVisibility({ modalType: 'createGame', data: {}, isOpen: false });
    const handleCreateNewGame = () => {
        createRoom(state.gameType);
        handleCloseModal();

    };
     const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'createGame': return handleCreateNewGame;
            default: return handleCloseModal;
        }
    };

    return (
        <CreateRoomsWrapper>
            <Select
                id={GameOptions.id}
                options={GameOptions}
                onChange={handleChangeTypeGame}
                value={state.gameType}
                content={GameOptions.content}
                width='250px'
                bgColor='#b16fdd'
            />
            <StControlPanel>
                {MODAL_CREATE_GAME.map((el) => {
                    return (
                        <Button
                            key={el.id}
                            content={el.content}
                            id={el.id}
                            onClick={getFunctionForButtons(el)}
                            backgroundSize='0'
                            bgColor="#e155c6"
                        />
                    );
                })}
            </StControlPanel>
        </CreateRoomsWrapper>
    );
};

export default CreateRoomsView;
