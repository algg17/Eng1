function checkAnswers() {
  const answers = {
    q1: "goes",
    q2: "drink",
    q3: "play",
    q4: "is reading",
    q5: "are walking",
    q6: "am listening"
  };

  let score = 0;

  for (let q in answers) {
    const radios = document.getElementsByName(q);
    for (let radio of radios) {
      if (radio.checked && radio.value === answers[q]) {
        score++;
      }
    }
  }

  const result = document.getElementById("result");
  result.textContent = `You got ${score} out of 6 correct.`;
}
