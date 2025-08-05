console.log("JS загружен");

const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

if (!quizDiv) {
  console.error("Не найден элемент с id='quiz'");
} else {
  fetch('data/test1.json')
    .then(res => {
      if (!res.ok) {
        throw new Error("Ошибка загрузки JSON: " + res.status);
      }
      return res.json();
    })
    .then(data => {
      console.log("Тесты получены:", data);
      if (!Array.isArray(data) || data.length === 0) {
        quizDiv.innerHTML = "<p>Нет доступных вопросов.</p>";
        return;
      }

      let html = '';
      data.forEach((q, i) => {
        html += `<p><strong>${i + 1}. ${q.question}</strong></p>`;
        q.options.forEach(opt => {
          html += `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`;
        });
      });
      quizDiv.innerHTML = html;

      window.correctAnswers = data.map(q => q.answer);
    })
    .catch(err => {
      console.error("Ошибка при загрузке теста:", err);
      quizDiv.innerHTML = "<p>Ошибка загрузки теста. Проверь консоль.</p>";
    });
}

function checkAnswers() {
  if (!window.correctAnswers) {
    alert("Ответы ещё не загружены.");
    return;
  }

  let score = 0;
  window.correctAnswers.forEach((ans, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === ans) score++;
  });
  resultDiv.innerHTML = `<h3>Your score: ${score} / ${window.correctAnswers.length}</h3>`;
}
