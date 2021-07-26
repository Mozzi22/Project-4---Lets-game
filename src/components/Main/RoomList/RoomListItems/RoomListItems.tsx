import React, { useEffect, useState } from 'react';
import { bgColorDefault } from 'src/components/UI/baseLayout';
import Button from 'src/components/UI/Button';
import { useTranslation } from 'react-i18next';
import { StRoomListItems, StRoom } from './styled';
import { IRoomListItems } from './types';
import { BUTTON_JOIN_TO_GAME } from 'src/constants/componentsСonsts';

const RoomListItems: React.FC<IRoomListItems> = ({
  creatorLogin, gameType, userLogin, id, joinRoom, playWithBot, subscribeRoom
}) => {
  //   const { t } = useTranslation();

  // const roomOwner: string = creatorLogin === userLogin ? t('your_room') : creatorLogin;
  //   // useEffect(() => {
  //   //     if (currentRoomName === login) {
  //   //       return setState({ ...state, selected: true });
  //   //     }
  //   //     setState({ ...state, selected: false });
  //   // }, [currentRoomName]);

  //   const [state, setState] = useState({
  //       error: false,
  //       selected: false,
  //   });

  // const handleJoinToGame = (e) => {
  //    joinRoom(e.target.id);
  //                   subscribeRoom(e.target.id);
  // }

  // const handleJoinToGameWithBot = (e) => playWithBot(e.target.id);
  //   const handleClick = () => {
  //     // setCurrentRoom({ name: 'currentRoom', value: { room_id: id, room_name: gameType }});
  //   };
  //   const onError = () => setState({ ...state, error: true });
  //   const getFunctionForButtons = (el) => {
  //         switch (el.id) {
  //             case 'join_to_game': return handleJoinToGame;
  //             default: return handleJoinToGameWithBot;
  //         }
  //   };

  //   return (
  //     <StRoomListItems
  //       onClick={handleClick}
  //     >
  //       <StRoom>
  //         <div><h2>{gameType}</h2><h3>{creatorLogin}</h3></div>
  //       </StRoom>
  //       {BUTTON_JOIN_TO_GAME.map((el) => {
  //           if (userLogin === creatorLogin && el.id === "join") return null;
  //           if (userLogin !== creatorLogin &&  el.id === "play_with_bot") return null;
  //                 return (
  //                     <Button
  //                         id={el.id}
  //                         key={el.id}
  //                         name={el.id}
  //                         content={t(el.id)}
  //                         width="200px"
  //                         height="50px"
  //                         margin="15px 0"
  //                         onClick={getFunctionForButtons(el)}
  //                     />
  //                 );
  //       })}
  //     </StRoomListItems>
  //   );
      const { t } = useTranslation();
    const roomOwner: string = creatorLogin === userLogin ? t('your_room') : creatorLogin;
    const onClickDistributor = (creatorLogin: string, userLogin: string) : TDistResult => {
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
    const { content, onClickFunc } = onClickDistributor(creatorLogin, userLogin);

    return (
        <StRoomListItems>
            <p>{roomOwner}</p>
            <p>{t(gameType)}</p>
            <Button content={content} width="150px" onClick={onClickFunc} id={id}/>
        </StRoomListItems>
    );

};

export default RoomListItems;
