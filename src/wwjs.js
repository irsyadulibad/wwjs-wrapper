const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true },
});

client.on('qr', (qr) => {
    console.log('Received qr: ', qr);
    fs.writeFileSync('./data.qr', qr);
});

client.on('authenticated', () => {
    console.log('Authenticated!');

    try {
        fs.unlinkSync('./data.qr');
    } catch(err) { console.log(err); }
});

client.on('ready', () => console.log('Client Readyy!'));

client.initialize();

module.exports = client;
