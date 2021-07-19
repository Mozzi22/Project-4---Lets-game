import React from 'react';
// import { StTurn } from './styled';
import { useTranslation } from 'react-i18next';
import { TTurn } from './types';

const Turn: React.FC<TTurn> = ({ turn, login }) => {
const { t } = useTranslation();
        return turn === login
        ? <p>{t('your_turn')}</p>
        : <p>{t('not_your_turn')}</p>;
};

export default Turn;
