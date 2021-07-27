export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        login: 'authorization/auth',
    },
    statistics: {
        search_user_name: 'statistic/search-by-username',
    },
    baseWebSocketUrl: 'ws://35.176.167.155:8082/',
    game_menu: 'game-menu',
    ws: {
        rooms: '/topic/rooms',
        errors: '/user/topic/errors',
        user_game: '/user/topic/game/',
        game: '/topic/game/',
        bot_steps: '/topic/bot/',
        update_room: '/radioactive/update-room',
        create_room: '/radioactive/create-room',
        join_room: '/radioactive/join-room',
        deleteRoom: '/radioactive/delete-room',
        get_step_order: '/radioactive/get-step-order',
        do_step: '/radioactive/do-step',
        get_bot_step: '/radioactive/get-bot-step',
        get_possible_steps: '/radioactive/get-possible-steps',
    },
};
