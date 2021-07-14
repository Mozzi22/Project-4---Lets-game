import React from 'react';

export interface IModalComponent {
    isOpen: boolean;
    changeModalVisibility: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headerTextKey: string;
    modalType: string;
    fontSize: string;
    children: React.ReactNode;
}
