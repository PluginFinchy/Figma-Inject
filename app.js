const fetch = require('node-fetch')
const WebSocket = require('ws');
const fs = require('fs')




fetch('http://localhost:7575/json')
    .then(res => res.json())
    .then(json => {
        files = json.filter(n => n.url.includes('/file/'))
        //console.log(files)
        let url = files[0].webSocketDebuggerUrl
        const ws = new WebSocket(url)

        ws.on('open', function open() {
            ws.send(JSON.stringify(payload));
          });

    });

    const payload = {
        'id': 1337,
        'method': 'Runtime.evaluate',
        'params': {'expression': fs.readFileSync('./plugin.js', 'utf8')}
    }

    