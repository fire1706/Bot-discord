const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})
bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
  if (msg.content.includes("slt")) {
    msg.reply("Hey Bonjour!")
  }
  if (msg.content.includes("cool")) {
    msg.reply("Tu l'as dis mon bonhomme ! ;)")
  }
  if (msg.content === "tic") {
    msg.reply("Tac")
  }
  if (msg.content.includes("Régnauld")) {
    msg.reply("Tu veux parler de Dany plutôt !?")
  }
  if (msg.content.includes("Regnauld")) {
    msg.reply("Tu veux parler de Cathy plutôt !?")
  }
  if (msg.content.includes("Max")) {
    msg.reply("essaie en criant bières!")
  }
  if (msg.content.includes("Maxime")) {
    msg.reply("Tu veux plutôt dire Max !")
  }
  if (msg.content.includes("Morgane")) {
    msg.reply("Je suis une licorne , ouiiiiiiiii")
  }
  if (msg.content.includes("Boris")) {
    msg.reply("mmmmm, oui, boh")
  }
  if (msg.content.includes("Mathilde")) {
    msg.reply("Cours forest , Cours")
  }
  if (msg.content.includes("Sébastien")) {
    msg.reply("Blague nul en approche !")
  }
  if (msg.content.includes("Bastien")) {
    msg.reply(" !La familleee !")
  }
  if (msg.content === "Thomas") {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber<=50) {
      msg.reply("C'est mon créateur !")
    }
    if (randomNumber>=50) {
      msg.reply("C'est une légende !")
    }
  }
  if (msg.content.includes("Guillaume")) {
    msg.reply("... that men is a meme !")
  }
  if (msg.content === "Ulys") {
    msg.reply("Vive l'empereur !")
  }
  if (msg.content === "Baptiste") {msg.reply("il est con")}
  if (msg.content ==="la fanfare d'Acoz"){msg.reply("les meilleures du royaume")}
  if (msg.content ==="Mitch Mitch"){msg.reply("futur prix Nobel!")}
  if (msg.content ==="Polo's Band"){msg.reply("Your mission,\nshould you choose to accept it,\n is to find Lindsey and bring her home.\nI''ve already assembled a team.\n I have them standing by,\n awaiting your word.\n This message, let's call it \n my excellent engagement gift to you, \n will self-destruct in five seconds. \n Good luck, Ethan, and thanks again.")}
  if (msg.content ==="Pauline"){msg.reply("Cul de poule")}
  if (msg.content === "Les Basse") {     msg.reply("Sous Coté!!!")   }
  if (msg.content === "Qu'est ce qu'on veut?"){msg.reply("plus de solos!!!") }
  if (msg.content ==="Hey le bot ça va?"){msg.reply("Bien et toi ? mon petit!")}
  if (msg.content === "Hey Jude") {msg.reply("Don't let me go!")}
  if (msg.content === "Musique"){msg.channel.send("!play Hymne National de l'URSS")}
  if (msg.content === "Cristalline"){msg.reply("STALINE :raised_hands:")}
  if (msg.content === "J'ai faim"){msg.reply("On va chercher une poutine ? :pleading_face: ")}
  if (msg.content === "Quoi?" || msg.content === "Quoi ?" || msg.content === "Quoi" || msg.content === "quoi" || msg.content === "quoi ?") {msg.reply("Feur ! :rofl:")}
  if (msg.content === "Ptn") {msg.reply("t'es pas poli ! :triumph:")}
  if (msg.content === "ALED") {msg.reply("Besoin d'une ampoule LED ?")}
  if ((msg.content.includes("morgane")||msg.content.includes("Morgane"))&&msg.content.includes("loup")){msg.reply("Oh, ca c'est sûr !")}
  if ((msg.content.includes("Hey")||msg.content.includes("Slt")||msg.content.includes("Salut")||msg.content.includes("Bonjour"))&&(msg.content.includes("bot")||msg.content.includes("Bot"))){msg.reply("Bonjour, je suis enchanté de te voir ici, comment vas tu ?")}
  if (msg.content === "Mamaaa"){msg.channel.send(":open-mouth: Houhouhouhouuuuuuu\n:open-mouth: Houhouhouhouuuuuuu\n:open-mouth: Houhouhouhouuuuuuu\n:open-mouth: Houhouhouhouuuuuuu\n")}



  if (msg.content === "!GuessNumber"){
    msg.reply("Ok, alors jouons!\n Voici les règles : j'ai choisi un chiffres entre 1 et 100 et tu vas devoir le deviner , à chaque fois je te dirai si tu est trop haut ou trop bas ;) \n Pour plus de facilité , tu devras formuler ton message comme ceci : xx \n Bon jeu ");
    var jean = guessnumber(bot);

  }

})
bot.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc")


// Partie pour les fonctions

function guessnumber(bot){
    var i = 0;
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    bot.on("message", msg => {
      if(parseInt(msg.content)==randomNumber){msg.reply("Bravo c'est gagné !")}
      else if(msg.content === "!n_xx"){msg.reply("Tu te crois marrant , p'tit con va !");resetBot(msg.channel); return 1;}
      else if(parseInt(msg.content) < randomNumber){msg.reply("T'es un peu trop faible mon gas !")}
      else if(parseInt(msg.content) > randomNumber){msg.reply("T'es un peu trop haut mon gas !")}
  })
}

function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc"));
}
