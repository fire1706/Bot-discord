const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})
bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
  if (msg.content === "slt") {
    msg.reply("Hey Bonjour!")
  }
  if (msg.content === "tic") {
    msg.reply("Tac")
  }
  if (msg.content === "Régnauld") {
    msg.reply("Tu veux parler de Dany plutôt !?")
  }
  if (msg.content === "Regnauld") {
    msg.reply("Tu veux parler de Cathy plutôt !?")
  }
  if (msg.content === "Max") {
    msg.reply("essaie en criant bières!")
  }
  if (msg.content === "Maxime") {
    msg.reply("Tu veux plutôt dire Max !")
  }
  if (msg.content === "Morgane") {
    msg.reply("Je suis une licorne , ouiiiiiiiii")
  }
  if (msg.content === "Boris") {
    msg.reply("mmmmm, oui, boh")
  }
  if (msg.content === "Mathilde") {
    msg.reply("Cours forest , Cours")
  }
  if (msg.content === "Sébastien") {
    msg.reply("Blague nul en approche !")
  }
  if (msg.content === "Bastien") {
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
  if (msg.content === "Guillaume") {
    msg.reply("... that men is a meme !")
  }
  if (msg.content === "Ulys") {
    msg.reply("Vive l'empereur !")
  }
  if (msg.content === "Baptiste") {msg.reply("il est con")}
  if (msg.content ==="la fanfare d'Acoz"){msg.reply("le meilleure du royaume")}
  if (msg.content ==="Mitch Mitch"){msg.reply("futur prix Nobel!")}
  if (msg.content ==="Polo's Band"){msg.reply("Your mission,\nshould you choose to accept it,\n is to find Lindsey and bring her home.\nI''ve already assembled a team.\n I have them standing by,\n awaiting your word.\n This message, let's call it \n my excellent engagement gift to you, \n will self-destruct in five seconds. \n Good luck, Ethan, and thanks again.")}
  if (msg.content ==="Pauline"){msg.reply("Cul de poule")}
  if (msg.content === "Les Basse") {     msg.reply("Sous Coté!!!")   }
if (msg.content === "Qu'est ce qu'on veut?"){msg.reply("plus de solos!!!") }
  if (msg.content === "!GuessNumber"){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = command.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
  }

})
bot.login("NjkyMzkzMzc5NzQwMjU0MjIw.XoJjBw.v-mZ3ifd5l9HPSTWqLrG2gI7Shc")
