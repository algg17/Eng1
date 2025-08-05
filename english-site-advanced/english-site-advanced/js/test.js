const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

fetch('data/test.json')
  .then(res => res.json())
  .then(data => {
    let html = '';
    data.forEach((q, i) => {
      html += `<p><strong>${i + 1}. ${q.question}</strong></p>`;
      q.options.forEach(opt => {
        html += `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`;
      });
    });
    quizDiv.innerHTML = html;

    window.correctAnswers = data.map(q => q.answer);
  });

function checkAnswers() {
  if (!window.correctAnswers) return alert("Answers not loaded.");
  let score = 0;
  window.correctAnswers.forEach((ans, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === ans) score++;
  });
  const total = window.correctAnswers.length;
  const message = `Your score: ${score} / ${total}`;
  resultDiv.innerHTML = `<h3>${message}</h3>`;
  localStorage.setItem("lastScore", message);
}
