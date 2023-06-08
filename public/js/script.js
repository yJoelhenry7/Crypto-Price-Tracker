// ---------------------------------------------------Dark mode toggle Button---------------------------------------------
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

//---------------------------------------------------- Drag down Menu Buttons-------------------------------
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// -------------------------------------------------------------------Timer code------------------------------------
function startTimer(duration) {
  let timer = duration;
  const countdown = document.querySelector('.countdown');

  const countdownInterval = setInterval(() => {
    countdown.textContent = timer;

    // Update progress bar
    const circle = document.querySelector('.progress-ring-circle');
    const circumference = parseFloat(circle.getAttribute('r')) * 2 * Math.PI;
    const offset = circumference - (timer / duration) * circumference;
    circle.style.strokeDashoffset = offset;

    if (timer <= 0) {
      // Reset timer to 60
      timer = duration;
    }

    timer--;
  }, 1000);
}

// Start the timer with an initial duration of 60 seconds
startTimer(60);




