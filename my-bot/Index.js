const Discord = require("discord.js")
const bot = new Discord.Client()
const guessGame = guessnumber(bot);
const guessGameHard = guessnumberHard(bot);
const ppc = PPC(bot);
var jeu = "Les jeux disponible pour le moment sont :\n !GuessNumber \n !GuessNumberHard\n !PPC  (akka chiffoumi) \nrien d'autre"


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
    msg.reply("Vive l'Empereur !")
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
  if (msg.content === "Ptn" || msg.content === "Putain" || msg.content === "Merde") {msg.reply("t'es pas poli ! :triumph:")}
  if (msg.content === "ALED") {msg.reply("Besoin d'une ampoule LED ?")}
  if ((msg.content.includes("morgane")||msg.content.includes("Morgane"))&&msg.content.includes("loup")){msg.reply("Oh, ca c'est sûr !")}
  if ((msg.content.includes("Hey")||msg.content.includes("Slt")||msg.content.includes("Salut")||msg.content.includes("Bonjour"))&&(msg.content.includes("bot")||msg.content.includes("Bot"))){msg.reply("Bonjour, je suis enchanté de te voir ici, comment vas tu ?")}
  if (msg.content === "Mamaaa"){msg.channel.send(":open_mouth: Houhouhouhouuuuuuu\n:open_mouth: Houhouhouhouuuuuuu\n:open_mouth: Houhouhouhouuuuuuu\n:open_mouth: Houhouhouhouuuuuuu\n")}
  if (msg.content.includes("Krylove")){msg.reply("LOVE :raised_hands:")}
  if (msg.content.includes("discuter")){msg.reply("cuter :raised_hands:")}
  if (msg.content.includes("diverge")){msg.reply("verge :raised_hands:")}
  if (msg.content.includes("Hugo")){msg.reply("c'est un loup ! :wolf:")}
  if (msg.content === "!Blague"){
    r = Math.floor(Math.random() * 16) + 1;
    console.log(r);
    if(r == 1){
    msg.reply("C'est l'histoire d'un nain...\n elle est courte mais elle est bonne :eggplant:")}
    if(r == 2){
    msg.reply("C'est l'histoire du ptit dej, tu la connais ?\n Pas de bol !")}
    if(r == 3){
    msg.reply("C'est l'histoire d'une blague vaseuse\n Mets tes bottes.")}
    if(r == 4){
    msg.reply("C'est l'histoire de l'eunuque décapité\nUne histoire sans queue ni tête. Passion humour noir.")}
    if(r == 5){
    msg.reply("C'est l'histoire d'un pingouin qui respire par les fesses\nUn jour il s’assoit et il meurt")}
    if(r == 6){
    msg.reply("C'est l'histoire d'un zoophile qui rentre dans un bar.")}
    if(r == 7){
    msg.reply("Pourquoi les Belges viennent-ils à la messe avec du savon ?\nPour l’Ave Maria.")}
    if(r == 8){
    msg.reply("Comment s'appelle le cul de la Schtroumpfette ?\nLe blu-ray.")}
    if(r == 9){
    msg.reply("Comment reconnaît-on une lettre envoyée par un lépreux ?\nLa langue est collée au timbre")}
    if(r == 10){
    msg.reply("Pourquoi on ne peut pas la faire à un bébé avorté ?\nParce qu’il n’est pas né d’hier")}
    if(r == 11){
    msg.reply("Peut-on prendre un bain quand on a la diarrhée ?\nOui si vous en avez assez")}
    if(r == 12){
    msg.reply("Quel est le point commun entre un enfant africain et une fleur ?\nIls sont besoin d’eau pendant une semaine et après ils meurent")}
    if(r == 13){
    msg.reply("Combien de tour fait un bébé dans un micro-onde avant d'exploser ?\nJe sais pas, j’ai du mal à compter quand je me masturbe.")}
    if(r == 14){
    msg.reply(" Qu'est-ce qui a 5 bras, 3 jambes et 2 pieds ?\nLa ligne d’arrivée au marathon de Boston")}
    if(r == 15){
    msg.reply(" Ca fais quel bruit un petit poussin ?\nPIOU PIOU PIOU")}
    if(r == 16){
    msg.reply("un nain court et rigole pk?\npcq l'herbe lui chatouille les couilles")}
  }






// ------------ partie jeu---------------------------
  if (msg.content === "!jeu"){
    msg.channel.send(jeu)
  }

})
bot.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc")


// Partie pour les fonctions

function guessnumber(bot){
    var i = 0;
    var randomNumber;
    var playing = false;
    bot.on("message", msg => {
      if(msg.content === "!GuessNumber" && playing == false)
      {
        msg.reply("Ok, alors jouons!\n Voici les règles : j'ai choisi un chiffres entre 1 et 100 et tu vas devoir le deviner , à chaque fois je te dirai si tu est trop haut ou trop bas ;) \n Pour plus de facilité , tu devras formuler ton message comme ceci : xx \n Bon jeu ");
        playing = true;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("GuessNumber started, " + randomNumber.toString());
      }
      else if(msg.content === "!GuessNumber" && playing == true)
      {
        msg.reply("Une partie est déjà en cours!");
      }
      if(playing == true)
      {
        if(parseInt(msg.content)==randomNumber)
        {
          msg.reply("Bravo c'est gagné !");
          playing = false;
        }
        else if(parseInt(msg.content) < randomNumber)
        {
          msg.reply("T'es un peu trop faible mon gars !");
        }
        else if(parseInt(msg.content) > randomNumber)
        {
          msg.reply("T'es un peu trop haut mon gars !");
        }
      }

  })
}


function guessnumberHard(bot){
    var i = 0;
    var randomNumber;
    var playing = false;
    var inc;
    bot.on("message", msg => {
      if(msg.content === "!GuessNumberHard" && playing == false)
      {
        msg.reply("Ok, alors jouons!\n Voici les règles : j'ai choisi un chiffres entre 1 et 100 et tu vas devoir le deviner , à chaque fois je te dirai si tu es trop haut ou trop bas ;) \n Par contre, à chaque essai que tu feras, le nombre aura une certaine chance de légèrement changer de valeur! \n Pour plus de facilité , tu devras formuler ton message comme ceci : xx \n Bon jeu ");
        playing = true;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("GuessNumber started, " + randomNumber.toString());
      }
      else if(msg.content === "!GuessNumberHard" && playing == true)
      {
        msg.reply("Une partie est déjà en cours!");
      }
      if(playing == true && !isNaN(msg.content))
      {
        if(parseInt(msg.content)==randomNumber)
        {
          msg.reply("Bravo c'est gagné !");
          playing = false;
        }
        else
        {
          if(parseInt(msg.content) < randomNumber)
          {
            msg.reply("T'es un peu trop faible mon gars !");
          }
          else if(parseInt(msg.content) > randomNumber)
          {
            msg.reply("T'es un peu trop haut mon gars !");
          }
          inc = Math.random();
          if(inc < 0.3)
          {
            if(randomNumber != 100){randomNumber += 1;}
            else{randomNumber = 1;}
          }
          else if(inc < 0.6)
          {
            if(randomNumber != 1){randomNumber -= 1;}
            else{randomNumber = 100;}
          }
          else if(inc <0.75)
          {
            if(randomNumber < 99){randomNumber += 2;}
            else if(randomNumber == 99){randomNumber = 1;}
            else{randomNumber = 2;}
          }
          else if(inc <0.9)
          {
            if(randomNumber > 2){randomNumber -= 2;}
            else if(randomNumber == 2){randomNumber = 100;}
            else{randomNumber = 99;}
          }

          // for debug purposes only
          console.log("GuessNumberHard updated to " + randomNumber.toString());

        }
      }

  })
}


function PPC(){// pierre papier ciseau
  var randomNumber
  bot.on("message", msg => {
    if(msg.content.includes("!PPC")){
      randomNumber = Math.floor(Math.random() * 3) + 1;
      // papier == 1; pierre == 2 ; ciseau ==3
      if(msg.content.includes("papier")||msg.content.includes("Papier")){
        if(randomNumber==1){msg.reply("Bot a lancé un papier :roll_of_paper:, c'est égalité !")}
        if(randomNumber==2){msg.reply("Bot a lancé un pierre :woozy_face:, c'est gagné !")}
        if(randomNumber==3){msg.reply("Bot a lancé un ciseaux :scissors:, c'est perdu !")}
      }
      else if(msg.content.includes("pierre")||msg.content.includes("Pierre")){
        if(randomNumber==1){msg.reply("Bot a lancé un papier :roll_of_paper:, c'est perdu !")}
        if(randomNumber==2){msg.reply("Bot a lancé un pierre :woozy_face:, c'est égalité !")}
        if(randomNumber==3){msg.reply("Bot a lancé un ciseaux :scissors:, c'est gagné !")}
      }
      else if(msg.content.includes("ciseaux")||msg.content.includes("Ciseaux")){
        if(randomNumber==1){msg.reply("Bot a lancé un papier :roll_of_paper:, c'est gagné !")}
        if(randomNumber==2){msg.reply("Bot a lancé un pierre :woozy_face:, c'est perdu !")}
        if(randomNumber==3){msg.reply("Bot a lancé un ciseaux :scissors:, c'est égalité !")}
      }
      else if(msg.content == jeu ){ }
      else {msg.reply("N'oublie pas de rajouter pierre, papier ou ciseaux après !PPC ;)")}
    }
  })
}


function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc"));
}
