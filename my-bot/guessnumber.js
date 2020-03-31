function guessnumber(bot){
  bot.on("message", msg => {
    msg.reply("Ok, alors jouons!\n Voici les règles : j'ai choisi un chiffres entre 1 et 100 et tu vas devoir le deviner , à chaque fois je te dirai si tu est trop haut ou trop bas ;) \n Pour plus de facilité , tu devras formuler ton message comme ceci : xx où xx sont les chiffres\n Bon jeu ");

    let randomNumber = Math.floor(Math.random() * 100) + 1;


    if(parseInt(msg.content)==randomNumber){msg.reply("Bravo c'est gagné !")}
    else if(msg.content === "!n_xx"){msg.reply("Tu te crois marrant , p'tit con va !"); return 1}
    else if(parseInt(msg.content) < randomNumber){msg.reply("T'es un peu trop faible mon gas !")}
    else if(parseInt(msg.content) > randomNumber){msg.reply("T'es un peu trop haut mon gas !")}
  })
}
