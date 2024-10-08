const io = require('socket.io')(5000)
console.log('server.js waiting for socket connection request....');

io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)
  console.log('running on port 5000');
  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})