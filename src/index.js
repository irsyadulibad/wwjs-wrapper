const Hapi = require('@hapi/hapi');
const wwjs = require('./wwjs');
const authRoute = require('./partials/auth');
const chatRoute = require('./partials/chat');

const init = async () => {
    const server = Hapi.server({
        port: 3030,
        host: '0.0.0.0',
    });

    authRoute(server, wwjs);
    chatRoute(server, wwjs);

    await server.start();
    console.log('Server running on http://0.0.0.0:3030');
}

init();
