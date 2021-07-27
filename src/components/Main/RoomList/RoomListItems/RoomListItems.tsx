import React, { useEffect, useState } from 'react';
import { bgColorDefault } from 'src/components/UI/baseLayout';
import Button from 'src/components/UI/Button';
import { useTranslation } from 'react-i18next';
import { StRoomListItems, StRoom } from './styled';
import { IRoomListItems } from './types';
import { BUTTON_JOIN_TO_GAME } from 'src/constants/componentsСonsts';

const RoomListItems: React.FC<IRoomListItems> = ({ creatorLogin, gameType, userLogin, id,
    joinRoom, playWithBot, subscribeRoom
}) => {
    const { t } = useTranslation();
    const roomOwner: string = creatorLogin === userLogin ? t('your_room') : creatorLogin;
    const { content, onClickFunc } = onClickDistributor(creatorLogin, userLogin);
    const onClickDistributor = (creatorLogin: string, userLogin: string)=> {
        return creatorLogin === userLogin
            ? {
                content: 'play_with_bot',
                onClickFunc: e => playWithBot(e.target.id),
            }
            : {
                content: 'join',
                onClickFunc: (e) => {
                    joinRoom(e.target.id);
                    subscribeRoom(e.target.id);
                },
            };
    };

    return (
        <StRoomListItems>
            <StRoom >
                <div><h2>{gameType}</h2><h3>{roomOwner}</h3></div>
            </StRoom>
            <Button content={t(content)}
                id={id}
                width="200px"
                height="50px"
                margin="15px 0"
                onClick={onClickFunc} />
        </StRoomListItems>
    );
};

export default RoomListItems;
