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
    src: img,
    defaultImg: './public/assets/images/defaultChats.png',
    selected: false,
  });
  const onError = () => setState({ ...state, error: true, src: state.defaultImg });
  return (
    <StRoomListItems color={state.selected ? bgColorDefault : color} onClick={handleClick}>
      <StPhoto>
        <img src={img ? state.src : state.defaultImg} onError={onError} />
      </StPhoto>
      <StRoom>
        <p>{content}</p>
      </StRoom>
      <Button
            id='create_room'
            name='create_room'
            onClick={handleJoinToGame}
            content={t('create_room')}
            width="200px"
            margin="15px 0"
      />
    </StRoomListItems>
  );
};

export default RoomListItems;
