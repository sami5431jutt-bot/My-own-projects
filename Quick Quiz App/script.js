
let scoreValue = 0

const questionEl = document.querySelector(".question");
const ansBtns = document.querySelectorAll(".answer")
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("reset")

async function loadQuiz() {
    const Url = "https://opentdb.com/api.php?amount=1";
    const response = await fetch (Url)
    const data = await response.json()

   const result = data.results[0];
   const question = result.question;
   const correct = result.correct_answer;
   const incorrect = result.incorrect_answers;

   const allAns = [...incorrect, correct].sort(()=>Math.random() -0.5)
   questionEl.innerHTML = question;
   

   ansBtns.forEach((buttons,i)=>{
               buttons.innerHTML = allAns[i];

      buttons.onclick = ()=>{
        if(buttons.innerHTML === correct){
            scoreValue++
            scoreEl.textContent  = scoreValue;
            alert("correct 🎉")
        }
        else{
            alert("wrong 👎")
        }

        loadQuiz();
      }
   })

};
resetBtn.onclick = ()=>{
    scoreValue = 0;
    scoreEl.textContent = scoreValue;
};

loadQuiz();