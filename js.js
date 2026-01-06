var lmn_a, lmn_b, lmnoa, lmnob, rspns, crrct, answr, a, b;
var timerElement, currentProblemDiv;
var timerInterval = null;
var elapsedSeconds = 0;
var isPaused = false;

function set_pair() {
    a = Math.floor(Math.random() * (100 - 11) + 11);
    b = Math.floor(Math.random() * (100 - 11) + 11);
    lmn_a.innerHTML = a;
    lmn_b.innerHTML = b;
}

function updateTimerDisplay() {
    var minutes = Math.floor(elapsedSeconds / 60);
    var seconds = elapsedSeconds % 60;
    timerElement.innerHTML = 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(function() {
        if (!isPaused) {
            elapsedSeconds++;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer() {
    elapsedSeconds = 0;
    updateTimerDisplay();
}

function commence() {
    // Show the problem if it was hidden
    currentProblemDiv.classList.remove("hidden");
    isPaused = false;
    
    // Reset and start the timer
    resetTimer();
    startTimer();
    
    // Display a new problem
    set_pair();
    
    // Clear the answer input and focus it
    answr.value = "";
    answr.focus();
}

function pause() {
    // Hide the current problem
    currentProblemDiv.classList.add("hidden");
    
    // Pause the timer
    isPaused = true;
}

window.onload = function () {
    lmn_a = document.getElementById("a");
    lmn_b = document.getElementById("b");
    lmnoa = document.getElementById("old_a");
    lmnob = document.getElementById("old_b");
    rspns = document.getElementById("response");
    crrct = document.getElementById("correct");
    answr = document.getElementById("answer");
    timerElement = document.getElementById("timer");
    currentProblemDiv = document.getElementById("current-problem");
    
    // Don't set initial pair - wait for commence button
    // Initialize timer display
    updateTimerDisplay();
}

function submit(e) {
    if (e.keyCode == 13) {
        lmnoa.innerHTML = a;
        lmnob.innerHTML = b;
        crrct.innerHTML = a * b;
        if (answr.value != a * b) {
            rspns.innerHTML = answr.value;
        }
        else {
            rspns.innerHTML = "";
        }
        set_pair();
        answr.value = "";
    }
}