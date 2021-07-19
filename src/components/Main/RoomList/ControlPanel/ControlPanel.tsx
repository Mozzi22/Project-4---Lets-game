import React from 'react';
import Button from 'src/components/UI/Button';
import Input from 'src/components/UI/Input';
import { useTranslation } from 'react-i18next';
import { StControlPanel, StCreateRoom } from './styled';
import { IControlPanel } from './types';

const ControlPanel: React.FC<IControlPanel> = ({ setValue, filterByRoomName, changeModalVisibility }) => {
    const { t } = useTranslation();
    const handleCreateRoom = () => changeModalVisibility({
        isOpen: true, data: {}, modalType: 'createChat',
    }); 
    return ( 
        <StControlPanel>
            <Input
                id='nameOfYourId'
                height="60px"
                key='nameOfYourId'
                name="filterByRoomName"
                inputHeight="60px"
                borderRadius="0px"
                value={filterByRoomName}
                onChange={setValue}
                placeholder='placeholder_search_input'
                margin="0 auto" 
                color="white"
                bgColor="transparent"
                fontSizeInp="20px"
                borderColor="transparent"
                padding="17px"
            />
            <StCreateRoom>
                <Button
                    id='create_room'
                    name='create_room'
                    onClick={handleCreateRoom}
                    content={t('create_room')}
                    width="200px"
                    margin="15px 0"
                />
            </StCreateRoom>
        </StControlPanel> 
    );
};

export default ControlPanel;