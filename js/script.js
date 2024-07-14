const btn = document.querySelector(".btn-open"); // selected buttons with only the btn-open class
const form = document.querySelector(".fact-form"); // selected forms with only the fact-form class

btn.addEventListener("click", function () {
  // the eventlistener looks for the 'click interaction' with the button(btn-open).
  if (form.classList.contains("hidden")) {
    // if the form contains .fact-form class it is default 'hidden'
    form.classList.remove("hidden");
    btn.textContent = "Close";
    // then remove the 'hidden'-class from this class, so the form becomes visible on the page
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
    // else add the 'hidden'-class to the .fact-form class, so it becomes hidden again.
  }
});

let votesInteresting = 25;
let votesMindBlowing = 23;

if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally intersting and mindblowing");
} else if (votesInteresting < votesMindBlowing) {
  console.log("Interesting fact");
} else if (votesInteresting > votesMindBlowing) {
  console.log("votesInteresting Wins again");
}

//falsy values: 0, '', NULL, UNDEFINED
if (votesMindBlowing) {
  console.log("Just a Mindblowing fact!");
} else votesMindBlowing < votesInteresting;
{
  console.log("Yep That's all Folks1");
}


function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible year";
}

console.log(calcFactAge(1985));