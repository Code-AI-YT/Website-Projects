const questions = [
    {
      text: "Do you like me as a friend? 🥺",
      options: ["Yes 💕", "No 😔"]
    },
    {
      text: "Would you call me your favorite person? 🌟",
      options: ["Absolutely ✨", "Hmm... not sure 🤔"]
    },
    {
      text: "Do you like surprises? 🎁",
      options: ["Yess!! 💝", "Depends 🤷‍♀️"]
    },
    {
      text: "Wanna go on a little coffee date with me? ☕💫",
      options: ["Sure! ☕💓", "Maybe... 😅"]
    }
  ];
  
 let current =0;
 let yesCount=0;
  
  function nextQuestion(choice = null) {
    if (choice && (choice.includes("Yes") || choice.includes("Sure") || choice.includes("Absolutely") || choice.includes("Yess"))) {
      yesCount++;
    }
  
    if (current < questions.length) {
      const q = questions[current];
      document.getElementById("screen").innerHTML = `
        <h2 class="fade-in">${q.text}</h2>
        ${q.options
          .map(
            (opt) =>
              `<button class="cute-button fade-in" onclick="nextQuestion('${opt}')">${opt}</button>`
          )
          .join("")}
      `;
      current++;
    } else {
      showResult();
    }

  }
  
  function showResult() {
    const screen = document.getElementById("screen");
    if (yesCount >= 3) {
      screen.innerHTML = `
        <h2 class="fade-in">Okay... I like you too 🙈💖</h2>
        <p class="fade-in">Now that we’re both on the same page…</p>
        <p class="fade-in">Wanna go out sometime? 🥹💌</p>

      `;
      emojiConfetti(["💖", "❤️", "🌸", "✨"]);
    } else {
      screen.innerHTML = `
        <h2 class="fade-in">Haha okay bestie 😄</h2>
        <p class="fade-in">I’ll still make websites for you tho 💻💞</p>
      `;
    }
  }
  
  function emojiConfetti(emojis) {
    const confettiContainer = document.getElementById("emoji-confetti");
    const count = 40;
  
    for (let i = 0; i < count; i++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.animationDuration = 2 + Math.random() * 2 + "s";
      confettiContainer.appendChild(emoji);
      setTimeout(() => emoji.remove(), 4000);
    }
  }
  
  window.nextQuestion = nextQuestion;
  
