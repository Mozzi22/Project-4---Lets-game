export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8089/game-menu',
    websocket: {
        rooms: '/topic/rooms',
        errors: '/user/topic/errors',
        possible_steps: '/user/topic/game/',
        game: '/topic/game/${uuid}',
        bot_steps: '/topic/bot/${uuid}',
        create_room: '/radioactive/create-room',
        update_room: '/radioactive/update-room',
        delete_room: '/radioactive/deleteRoom',
        get_possible_steps: '/radioactive/get-possible-steps',
        do_step: '/radioactive/do-step',
        get_bot_step: '/radioactive/get-bot-step',
        get_step_order: '/radioactive/get-step-order'
    }
};
