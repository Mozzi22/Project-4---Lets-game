import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/UI/Button';
import { CreateRoomsWrapper, StControlPanel } from './styled';
import { MODAL_CREATE_GAME } from 'src/constants/componentsСonsts';
import Select from 'src/components/UI/Select';
import { GameOptions } from 'src/constants/ui';
import { TModalData } from 'src/Store/modals/types';

interface ICreateRoomsView {
    createNewGame: () => void;
    changeModalVisibility: (arg: TModalData) => void;
}
const CreateRoomsView: React.FC<ICreateRoomsView> = ({ createNewGame, changeModalVisibility }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({ newGameName: '' });
    const handleChangeTypeGame = ({ value }) => {
        setState({ ...state, newGameName: value });
    };
    const handleCloseModal = () => changeModalVisibility({ modalType: 'createGame', data: {}, isOpen: false });
    const handleCreateNewGame = () => {
        createNewGame(state.newGameName);
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
                value={state.value}
                content={GameOptions.content}
                width='200px'
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
                        />
                    );
                })}
            </StControlPanel>
        </CreateRoomsWrapper>
    );
};

export default CreateRoomsView;
