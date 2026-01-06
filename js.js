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
    
    // Auto-advance if over 60 seconds (only once)
    if (elapsedTime >= AUTO_ADVANCE_TIME && !isPaused) {
        clearInterval(timerInterval); // Prevent multiple triggers
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
    }, 100); // Update every 100ms for centisecond display
}

function resetTimer() {
    startTime = Date.now();
    elapsedTime = 0;
    updateTimerDisplay();
}

function completeProblem(userAnswer, isAutoAdvance) {
    // Display the previous problem and answer
    lmnoa.innerHTML = a;
    lmnob.innerHTML = b;
    crrct.innerHTML = a * b;
    
    // Show user's answer based on the context
    if (isAutoAdvance) {
        rspns.innerHTML = "(skipped)";
    } else if (userAnswer !== null && Number(userAnswer) !== a * b) {
        rspns.innerHTML = userAnswer;
    } else {
        rspns.innerHTML = "";
    }
    
    // Generate new problem
    set_pair();
    answr.value = "";
    
    // Reset timer for new problem
    if (isAutoAdvance) {
        // For auto-advance, restart the timer completely
        startTimer();
    } else {
        // For user answers, just reset the timer
        resetTimer();
    }
}

function autoAdvance() {
    completeProblem(null, true);
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
};

function submit(e) {
    if (e.keyCode == 13) {
        completeProblem(answr.value, false);
    }
}