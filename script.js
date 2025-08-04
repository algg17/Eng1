function checkAnswers() {
  const answers = {
    q1: "goes",
    q2: "drink",
    q3: "play"
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
  result.textContent = `You got ${score} out of 3 correct.`;
}
