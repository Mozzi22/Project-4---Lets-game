import * as React from 'react';
import ModalComponent from '../../Modal';
import CreateRoomsView from './CreateRoomsView';

const ModalCreateRoom = () => {
    const modalType = 'createGame';
    return (
        <ModalComponent
            headerTextKey='create_game'
            modalType={modalType}
        >
            <CreateRoomsView modalType={modalType} />
        </ModalComponent>
    );
};

export default ModalCreateRoom;
