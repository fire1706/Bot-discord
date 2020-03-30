const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
client.on("message", msg => {
  if (msg.content === "Hey") {
    msg.reply("Slt slt mon petit")
  }
client.on("message", msg => {
  if (msg.content === "Thomas est le meilleur !") {
    msg.reply("C'est tout à fait vrai.")
  }
})
client.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc")
