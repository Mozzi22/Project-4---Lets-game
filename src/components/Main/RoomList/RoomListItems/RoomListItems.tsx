import React, { useEffect, useState } from 'react';
import { bgColorDefault } from 'src/components/UI/baseLayout';
import Button from 'src/components/UI/Button';
import { useTranslation } from 'react-i18next';
import { StRoomListItems, StPhoto, StRoom } from './styled';
import { IRoomListItems } from './types';

const RoomListItems: React.FC<IRoomListItems> = ({
  id,
  img,
  color,
  content,
  setValue,
  currentRoomName,
}) => {
    const { t } = useTranslation();
    const handleJoinToGame = () => {
    };
  const handleClick = () => {
    setValue({ name: 'currentRoom', value: { room_id: id, room_name: content } });
  };
  useEffect(() => {
    if (currentRoomName === content) {
      return setState({ ...state, selected: true });
    }
    setState({ ...state, selected: false });
  }, [currentRoomName]);
  const [state, setState] = useState({
    error: false,
    selected: false,
  });
  const onError = () => setState({ ...state, error: true });
  return (
    <StRoomListItems color={state.selected ? bgColorDefault : color} onClick={handleClick}>
      <StRoom>
        <p>{content}</p>
      </StRoom>
      <Button
            id='join_to_game'
            name='join_to_game'
            onClick={handleJoinToGame}
            content={t('join_to_game')}
            width="200px"
            margin="15px 0"
      />
    </StRoomListItems>
  );
};

export default RoomListItems;
