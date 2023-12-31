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
            try {
                return h.response({
                    success: true,
                    qr: fs.readFileSync('./data.qr').toString(),
                });
            } catch(e) {
                return h.response({
                    success: false,
                    message: 'authenticated',
                });
            }
        }
    })
}
