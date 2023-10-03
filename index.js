// require your server and launch it
const express = require('express');

const server = express();

server.use(express.json())


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.listen(9000, () => {
  console.log('Server listening at http://localhost:9000')
})

module.exports = server;