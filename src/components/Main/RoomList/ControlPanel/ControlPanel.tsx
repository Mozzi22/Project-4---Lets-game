import React from 'react';
import Button from 'src/components/UI/Button';
import Input from 'src/components/UI/Input';
import { useTranslation } from 'react-i18next';
import { StControlPanel } from './styled';
import { IControlPanel } from './types';

const ControlPanel: React.FC<IControlPanel> = ({ setValue, filterByRoomName, changeModalVisibility }) => {
    const { t } = useTranslation();
    const handleCreateRoom = () => changeModalVisibility({
        isOpen: true, data: {}, modalType: 'createGame',
    });
    return (
        <StControlPanel>
            <Input
                id='nameOfYourId'
                width='250px'
                height="40px"
                key='nameOfYourId'
                name="filterByRoomName"
                inputHeight="45px"
                borderRadius="0px"
                value={filterByRoomName}
                onChange={setValue}
                placeholder='placeholder_search_input'
                margin="0 auto"
                color="white"
                fontSizeInp="16px"
                borderColor="transparent"
                padding="15px"
            />
                <Button
                    id='create_room'
                    name='create_room'
                    onClick={handleCreateRoom}
                    content={t('create_room')}
                    width="100px"
                    height="45px"
                    bgColor="#b16fdd"
                />
        </StControlPanel>
    );
};

export default ControlPanel;
