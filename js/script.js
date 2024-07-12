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


// Fundamentals of Javascript

//
