export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8082',
    game_menu: '/game-menu',
    ws: {
        rooms: '/topic/rooms',
        game: '/topic/game/',
        bot_steps: '/topic/bot/',
        errors: '/user/topic/errors',
        create_room: '/radioactive/create-room',
        update_room: '/radioactive/update-room',
        delete_room: '/radioactive/deleteRoom',
        possible_steps: '/user/topic/game/',
        get_possible_steps: '/radioactive/get-possible-steps',
        do_step: '/radioactive/do-step',
        get_bot_step: '/radioactive/get-bot-step',
        get_step_order: '/radioactive/get-step-order'
    }
};
