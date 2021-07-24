import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import { StModalHeader, customStyles, StTextHeader } from './styled';
import { IModalComponent } from './types';

const ModalComponent = ({
    isOpen,
    changeModalVisibility,
    headerTextKey,
    modalType,
    fontSize,
    children,
}: IModalComponent) => {
    const { t } = useTranslation();
    const handleCloseModal = () => changeModalVisibility({ modalType, data: {}, isOpen: false });
    return (
            <Modal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <Button
                    height="40px"
                    width="40px"
                    content="×"
                    fontSize="45px"
                    lineHeight="45px"
                    borderRadius="0px"
                    margin="0 0 0 90%"
                    padding="0"
                    id="closeModal"
                    onClick={handleCloseModal}
                    bgColor="transparent"
                />
                    <StModalHeader fontSize={fontSize} >
                        <StTextHeader>{t(headerTextKey)}</StTextHeader>
                    </StModalHeader>
                        {children}
            </Modal>
    );
};

export default ModalComponent;
