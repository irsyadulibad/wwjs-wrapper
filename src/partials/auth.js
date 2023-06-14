const fs = require('fs');

module.exports = (server, wwjs) => {
    server.route({
        method: 'GET',
        path: '/checkauth',
        handler: (request, h) => {
            return wwjs.getState()
                .then((data) => {
                    return h.response({ auth: (!data) ? false : true });
                })
                .catch((err) => {
                    return h.response({ auth: false });
                });
        }
    });

    server.route({
        method: 'GET',
        path: '/qrcode',
        handler: (request, h) => {
            if(fs.existsSync('./data.qr')) return h.response({
                success: true,
                qr: require('./data.qr'),
            });

            return h.response({
                success: false,
                message: 'authenticated',
            });
        }
    })
}
