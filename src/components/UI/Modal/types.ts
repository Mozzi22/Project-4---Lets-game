import React from 'react';
import { TModalType } from 'src/Store/modals/types';

export interface IModalComponent {
    isOpen: boolean;
    changeModalVisibility: (e : React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headerTextKey: string;
    modalType: TModalType;
    fontSize: string;
    children: React.ReactNode;
}
