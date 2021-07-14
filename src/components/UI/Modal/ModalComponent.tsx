import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import { StModalHeader, customStyles, StTextHeader } from './styled';

interface IModalComponent {
    isOpen: boolean;
    changeModalVisibility: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headerTextKey: string;
    modalType: string;
    fontSize: string;
    children: React.ReactNode;
}

const ModalComponent: React.FC<IModalComponent> = ({
    isOpen,
    changeModalVisibility,
    headerTextKey,
    modalType,
    fontSize,
    children,
}) => {
    const { t } = useTranslation();
    const handleCloseModal = () => changeModalVisibility({ modalType, data: {}, isOpen: false });
    return (
            <Modal  
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
                <StModalHeader 
                fontSize={fontSize}
                >
                    <StTextHeader>{t(headerTextKey)}</StTextHeader>
                    <Button 
                    height="50px"
                    width="50px"
                    content="×"
                    fontSize="45px"
                    borderRadius="0px"
                    margin="0px"
                    padding="0"
                    id="closeModal"
                    onClick={handleCloseModal}
                    bgColor="transparent"
                    />
                </StModalHeader>
                {children}
            </Modal>
    );
};
 
export default ModalComponent;
