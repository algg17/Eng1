const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "ТВОЙ_PROJECT_ID.firebaseapp.com",
  projectId: "ТВОЙ_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const userStatus = document.getElementById("user-status");

auth.onAuthStateChanged(user => {
  if (user) {
    userStatus.textContent = `Вы вошли как ${user.displayName}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    userStatus.textContent = "Вы не вошли";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }
});

loginBtn.onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

logoutBtn.onclick = () => {
  auth.signOut();
};


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
