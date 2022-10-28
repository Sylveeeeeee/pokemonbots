const Discord = require("discord.js")
exports.run = (clientsylveon, message, args) => {
  message.delete(1000);
  const member = message.mentions.members.first();
  if (!member) return message.channel.send("Please mention a valid user")

  const hug_gifs = [
    "https://c.tenor.com/7zb6sgeEKIEAAAAM/snap.gif",
    "https://c.tenor.com/ggKei4ayfIAAAAAM/anime-hug.gif",
    "https://c.tenor.com/a1t9P8zYHRoAAAAM/sad-eyes.gif",
    "https://c.tenor.com/2lr9uM5JmPQAAAAM/hug-anime-hug.gif",
    "https://c.tenor.com/-0nQoPY5sZ0AAAAM/anime-hug-hug.gif",
    "https://c.tenor.com/qF7mO4nnL0sAAAAM/abra%C3%A7o-hug.gif",
    "https://c.tenor.com/n0qIE_8B0JcAAAAM/gif-abrazo.gif",
    "https://c.tenor.com/0vl21YIsGvgAAAAM/hug-anime.gif",
    "https://c.tenor.com/Ct4bdr2ZGeAAAAAM/teria-wang-kishuku-gakkou-no-juliet.gif",
    "https://c.tenor.com/O3qIam1dAQQAAAAM/hug-cuddle.gif",
    "https://c.tenor.com/9e1aE_xBLCsAAAAM/anime-hug.gif",
    "https://c.tenor.com/rQ2QQQ9Wu_MAAAAM/anime-cute.gif",
    "https://c.tenor.com/gDPZRj3pA54AAAAM/hibike-euphonium-sound-euphonium.gif",
    "https://c.tenor.com/NZ11nPHd_FoAAAAM/anime-hibike-euphonium.gif",
    "https://c.tenor.com/YFEpJqQBCWAAAAAM/ouran-high-school-host-club-anime.gif",
    "https://c.tenor.com/mBmkxNFl5acAAAAM/anime-happy.gif"
  ];

  const hug_gifs_link = hug_gifs[Math.floor(Math.random() * hug_gifs.length)];
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
      name: `${message.author.username} gives ${member.user.username} a hug!`,
      iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`,
      url: `${hug_gifs_link}`
    })
    .setImage(hug_gifs_link);
  return message.channel.send({embeds: [embed]});
}

exports.name = "hug"