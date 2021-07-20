import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const getModalState = (state: AplicationState) => state.modals;
export const getModalVisibilityByType = createSelector(
    getModalState,
    (state, props) => props.modalType,
    (modals, modalType) => modals[modalType],
);
export const getModalDataByType = createSelector(
    getModalVisibilityByType,
    modalsByType => modalsByType?.data,
);
export const getModalVisibilityIsOpen = createSelector(
    getModalVisibilityByType,
    (modalsByType = {}) => modalsByType?.isOpen,
);
