const express = require("express");
const app = express();
const fs = require("fs");
app.listen(3000, () =>{
  console.log("Project is running!");
})
app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require('discord.js');
const prefix = "p!"

//eevee
const clienteevee = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
clienteevee.eeveecommands = new Discord.Collection();
const eeveecommands = fs.readdirSync("./eeveeCommands").filter(file => file.endsWith(".js"))
for(file of eeveecommands) {
  const eeveecommandName = file.split(".")[0]
  const eeveecommand = require (`./eeveeCommands/${eeveecommandName}`)
  clienteevee.eeveecommands.set(eeveecommandName, eeveecommand)
}
clienteevee.on("messageCreate", message => {
if(message.content.startsWith(prefix)){
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const eeveecommandName = args.shift()
  const eeveecommand = clienteevee.eeveecommands.get(eeveecommandName)
  eeveecommand.run(clienteevee, message, args)
}
})

//vaporeon
const clientvaporeon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//jolteon
const clientjolteon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
})

//flareon
const clientflareon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//espeon
const clientespeon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//umbreon
const clientumbreon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//leafeon
const clientleafeon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//glaceon
const clientglaceon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//sylveon
const clientsylveon = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
clientsylveon.sylveoncommands = new Discord.Collection();
const sylveoncommands = fs.readdirSync("./sylveonCommands").filter(file => file.endsWith(".js"))
for(file of sylveoncommands) {
  const sylveoncommandName = file.split(".")[0]
  const sylveoncommand = require (`./sylveonCommands/${sylveoncommandName}`)
  clientsylveon.sylveoncommands.set(sylveoncommandName, sylveoncommand)
}
clientsylveon.on("messageCreate", message => {
if(message.content.startsWith(prefix)){
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const sylveoncommandName = args.shift()
  const sylveoncommand = clientsylveon.sylveoncommands.get(sylveoncommandName)
  sylveoncommand.run(clientsylveon, message, args)
}
})

//pikachu
const clientpikachu = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//mimikyu
const clientmimikyu = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//absol
const clientabsol = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//missingno
const clientmissingno = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//unown
const clientunown = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

//ready
clienteevee.once('ready', () => {
    console.log('eevee ready.');
});
clientvaporeon.once('ready', () => {
    console.log('vaporeon ready.');
});
clientjolteon.once('ready', () => {
    console.log('jolteon ready.');
});
clientflareon.once('ready', () => {
    console.log('flareon ready.');
});
clientespeon.once('ready', () => {
    console.log('espeon ready.');
});
clientumbreon.once('ready', () => {
    console.log('umbreon ready.');
});
clientleafeon.once('ready', () => {
    console.log('leafeon ready.');
});
clientglaceon.once('ready', () => {
    console.log('glaceon ready.');
});
clientsylveon.once('ready', () => {
    console.log('sylveon ready.');
});
clientpikachu.once('ready', () => {
    console.log('pikachu ready.');
});
clientmimikyu.once('ready', () => {
    console.log('mimikyu ready.');
});
clientabsol.once('ready', () => {
    console.log('absol ready.');
});
clientmissingno.once('ready', () => {
    console.log('missingno ready.');
});
clientunown.once('ready', () => {
    console.log('unown ready.');
});

//logins
clienteevee.login(process.env.eeveetoken);
clientvaporeon.login(process.env.vaporeontoken);
clientjolteon.login(process.env.jolteontoken);
clientflareon.login(process.env.flareontoken);
clientespeon.login(process.env.espeontoken);
clientumbreon.login(process.env.umbreontoken);
clientleafeon.login(process.env.leafeontoken);
clientglaceon.login(process.env.glaceontoken);
clientsylveon.login(process.env.sylveontoken);
clientpikachu.login(process.env.pikachutoken);
clientmimikyu.login(process.env.mimikyutoken);
clientabsol.login(process.env.absoltoken);
clientmissingno.login(process.env.missingnotoken);
clientunown.login(process.env.unowntoken);