module.exports = (server, wwjs) => {
    server.route({
        method: 'POST',
        path: '/message',
        handler: (request, h) => {
            let { phone, message } = request.payload;
            phone = `${phone}@c.us`;

            return wwjs.sendMessage(phone, message)
                .then((res) => {
                    return h.response(res);
                });
        }
    });
}
