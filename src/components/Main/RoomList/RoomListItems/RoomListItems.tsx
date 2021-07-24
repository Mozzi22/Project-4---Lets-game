import React, { useEffect, useState } from 'react';
import { bgColorDefault } from 'src/components/UI/baseLayout';
import Button from 'src/components/UI/Button';
import { useTranslation } from 'react-i18next';
import { StRoomListItems, StRoom } from './styled';
import { IRoomListItems } from './types';
import { BUTTON_JOIN_TO_GAME } from 'src/constants/componentsСonsts';

const RoomListItems: React.FC<IRoomListItems> = ({
    id,
    color,
    login,
    setValue,
    gameType,
    currentRoomName,
    userLogin,
    creatorLogin
}) => {

    useEffect(() => {
        if (currentRoomName === login) {
          return setState({ ...state, selected: true });
        }
        setState({ ...state, selected: false });
    }, [currentRoomName]);
      const [state, setState] = useState({
        error: false,
        selected: false,
    });
    const { t } = useTranslation();
    const handleJoinToGame = () => {
    };
    const handleJoinToGameWithBot = () => {
    };
    const handleClick = () => {
      setValue({ name: 'currentRoom', value: { room_id: id, room_name: login } });
    };
    const onError = () => setState({ ...state, error: true });
    const getFunctionForButtons = (el) => {
          switch (el.id) {
              case 'join_to_game': return handleJoinToGame;
              default: return handleJoinToGameWithBot;
          }
    };

    return (
      <StRoomListItems color={state.selected ? bgColorDefault : color} onClick={handleClick}>
        <StRoom>
          <p>{gameType}<div>{userLogin}</div></p>
        </StRoom>
        {BUTTON_JOIN_TO_GAME.map((el) => {
            if (userLogin === creatorLogin && el.id === "join_to_game") return null;
            if (userLogin !== creatorLogin &&  el.id === "join_to_game_with_bot") return null;
                  return (
                      <Button
                          id={el.id}
                          key={el.id}
                          name={el.id}
                          content={t(el.id)}
                          width="200px"
                          height="50px"
                          margin="15px 0"
                          onClick={getFunctionForButtons(el)}
                          bgColor='#5669ba'
                      />
                  );
        })}
      </StRoomListItems>
    );
};

export default RoomListItems;
