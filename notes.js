const WebSocket = require('ws')
const term = require('terminal-kit').terminal

const server = new WebSocket.Server({port: 7775})

server.on('connection', ws => {
  ws.on('message', message => {
    console.log('\x1Bc', message)
  })

  term.grabInput()

  term.on('key', KEY => {
    const key = KEY.toLowerCase()

    if (key === 'left') {
      ws.send('back')
    }

    if (key === 'right') {
      ws.send('forward')
    }

    if (key === 'ctrl_c') {
      process.exit()
    }
  })
})
