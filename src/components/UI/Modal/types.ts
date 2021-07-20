import React from 'react';

export interface IModalComponent {
    isOpen: boolean;
    changeModalVisibility: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headerTextKey: string;
    modalType: any;
    fontSize: string;
    children: React.ReactNode;
}
