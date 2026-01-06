var lmn_a, lmn_b, lmnoa, lmnob, rspns, crrct, answr, a, b;
var timerElement, currentProblemDiv;
var timerInterval = null;
var startTime = null;
var elapsedTime = 0;
var isPaused = false;
var AUTO_ADVANCE_TIME = 60000; // 60 seconds in milliseconds

function set_pair() {
    a = Math.floor(Math.random() * (100 - 11) + 11);
    b = Math.floor(Math.random() * (100 - 11) + 11);
    lmn_a.innerHTML = a;
    lmn_b.innerHTML = b;
}

function updateTimerDisplay() {
    var totalSeconds = Math.floor(elapsedTime / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10); // Show centiseconds (2 digits)
    timerElement.innerHTML = 
        totalSeconds + "." + 
        (milliseconds < 10 ? "0" : "") + milliseconds;
    
    // Auto-advance if over 60 seconds
    if (elapsedTime >= AUTO_ADVANCE_TIME) {
        autoAdvance();
    }
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTime = Date.now();
    elapsedTime = 0;
    timerInterval = setInterval(function() {
        if (!isPaused) {
            elapsedTime = Date.now() - startTime;
            updateTimerDisplay();
        }
    }, 50); // Update every 50ms for smooth millisecond display
}

function resetTimer() {
    startTime = Date.now();
    elapsedTime = 0;
    updateTimerDisplay();
}

function autoAdvance() {
    // Mark current answer as skipped
    lmnoa.innerHTML = a;
    lmnob.innerHTML = b;
    crrct.innerHTML = a * b;
    rspns.innerHTML = "(skipped)";
    
    // Generate new problem
    set_pair();
    answr.value = "";
    
    // Reset timer for new problem
    resetTimer();
}

function commence() {
    // Show the problem if it was hidden
    currentProblemDiv.classList.remove("hidden");
    isPaused = false;
    
    // Show the timer
    timerElement.style.visibility = "visible";
    
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
    
    // Hide the timer
    timerElement.style.visibility = "hidden";
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
            // Reset timer when solved correctly
            resetTimer();
        }
        set_pair();
        answr.value = "";
    }
}