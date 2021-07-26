// export const routes = {
//     baseUrl: 'http://35.176.167.155:8089/',
//     account: {
//         registration: 'registration/reg',
//         login: 'authorization/auth',
//     },
//     baseWebSocketUrl: 'ws://35.176.167.155:8082',
//     game_menu: '/game-menu',
//     ws: {
//         rooms: '/topic/rooms',
//         game: '/topic/game/',
//         bot_steps: '/topic/bot/',
//         errors: '/user/topic/errors',
//         possible_steps: '/user/topic/game/',
//         create_room: '/radioactive/create-room',
//         update_room: '/radioactive/update-room',
//         delete_room: '/radioactive/delete-room',
//         join_room: '/radioactive/join-room',
//         get_possible_steps: '/radioactive/get-possible-steps',
//         do_step: '/radioactive/do-step',
//         get_bot_step: '/radioactive/get-bot-step',
//         get_step_order: '/radioactive/get-step-order',
//         leave_game: '/radioactive/leave-the-game'
//     }
// };
export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    statistic: {
        byUserName: 'statistic/search-by-username',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8082/',
    ws: {
        game_menu: 'game-menu',
        subs: {
            rooms: '/topic/rooms',
            user_errors: '/user/topic/errors',
            user_game: '/user/topic/game/',
            newGame: '/topic/game/',
            botStep: '/topic/bot/',
        },
        actions: {
            getRooms: '/radioactive/update-room',
            createRoom: '/radioactive/create-room',
            joinRoom: '/radioactive/join-room',
            deleteRoom: '/radioactive/delete-room',
            getStepOrder: '/radioactive/get-step-order',
            doStep: '/radioactive/do-step',
            getBotStep: '/radioactive/get-bot-step',
            getPossibleStep: '/radioactive/get-possible-steps',
        },
    },

};
