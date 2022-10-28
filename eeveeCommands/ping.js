exports.run = (clienteevee, message, args) => {
  message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(clienteevee.ws.ping)}ms`);
  };

exports.name = "ping"