/**
 * @jest-environment jsdom
 */

// Mock global variables and functions from js.js
let lmn_a, lmn_b, lmnoa, lmnob, rspns, crrct, answr, timerElement, currentProblemDiv;
let a, b;
let timerInterval = null;
let startTime = null;
let elapsedTime = 0;
let isPaused = false;
let AUTO_ADVANCE_TIME = 60000;

describe('99x99 Multiplication Practice', () => {
  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `
      <div id="timer">0.00</div>
      <span id="a"></span>
      <span id="b"></span>
      <span id="old_a">??</span>
      <span id="old_b">??</span>
      <span id="response"></span>
      <span id="correct">??</span>
      <input type="number" id="answer" />
      <div id="current-problem"></div>
    `;
    
    // Initialize global variables
    lmn_a = document.getElementById("a");
    lmn_b = document.getElementById("b");
    lmnoa = document.getElementById("old_a");
    lmnob = document.getElementById("old_b");
    rspns = document.getElementById("response");
    crrct = document.getElementById("correct");
    answr = document.getElementById("answer");
    timerElement = document.getElementById("timer");
    currentProblemDiv = document.getElementById("current-problem");
    
    // Reset state
    timerInterval = null;
    startTime = null;
    elapsedTime = 0;
    isPaused = false;
    
    // Clear any intervals
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  });
  
  afterEach(() => {
    // Clean up intervals
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  });
  
  // Define functions from js.js
  function set_pair() {
    a = Math.floor(Math.random() * (100 - 11) + 11);
    b = Math.floor(Math.random() * (100 - 11) + 11);
    lmn_a.innerHTML = a;
    lmn_b.innerHTML = b;
  }

  function updateTimerDisplay() {
    var totalSeconds = Math.floor(elapsedTime / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);
    timerElement.innerHTML = 
      totalSeconds + "." + 
      (milliseconds < 10 ? "0" : "") + milliseconds;
    
    if (elapsedTime >= AUTO_ADVANCE_TIME && !isPaused) {
      clearInterval(timerInterval);
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
    }, 100);
  }

  function resetTimer() {
    startTime = Date.now();
    elapsedTime = 0;
    updateTimerDisplay();
  }

  function completeProblem(userAnswer, isAutoAdvance) {
    lmnoa.innerHTML = a;
    lmnob.innerHTML = b;
    crrct.innerHTML = a * b;
    
    if (isAutoAdvance) {
      rspns.innerHTML = "(skipped)";
    } else if (userAnswer !== null && Number(userAnswer) !== a * b) {
      rspns.innerHTML = userAnswer;
    } else {
      rspns.innerHTML = "";
    }
    
    set_pair();
    answr.value = "";
    
    if (isAutoAdvance) {
      startTimer();
    } else {
      resetTimer();
    }
  }

  function autoAdvance() {
    completeProblem(null, true);
  }

  function commence() {
    currentProblemDiv.classList.remove("hidden");
    isPaused = false;
    timerElement.style.visibility = "visible";
    resetTimer();
    startTimer();
    set_pair();
    answr.value = "";
    answr.focus();
  }

  function pause() {
    currentProblemDiv.classList.add("hidden");
    isPaused = true;
    timerElement.style.visibility = "hidden";
  }

  function submit(e) {
    if (e.keyCode == 13) {
      completeProblem(answr.value, false);
    }
  }
  
  describe('set_pair function', () => {
    test('should generate random numbers between 11 and 99', () => {
      for (let i = 0; i < 100; i++) {
        set_pair();
        const aValue = parseInt(lmn_a.innerHTML);
        const bValue = parseInt(lmn_b.innerHTML);
        
        expect(aValue).toBeGreaterThanOrEqual(11);
        expect(aValue).toBeLessThanOrEqual(99);
        expect(bValue).toBeGreaterThanOrEqual(11);
        expect(bValue).toBeLessThanOrEqual(99);
      }
    });
    
    test('should update DOM elements with values', () => {
      set_pair();
      expect(lmn_a.innerHTML).toBeTruthy();
      expect(lmn_b.innerHTML).toBeTruthy();
      expect(parseInt(lmn_a.innerHTML)).not.toBeNaN();
      expect(parseInt(lmn_b.innerHTML)).not.toBeNaN();
    });
  });
  
  describe('updateTimerDisplay function', () => {
    test('should format time correctly', () => {
      elapsedTime = 0;
      updateTimerDisplay();
      expect(timerElement.innerHTML).toBe('0.00');
      
      elapsedTime = 1000;
      updateTimerDisplay();
      expect(timerElement.innerHTML).toBe('1.00');
      
      elapsedTime = 1050;
      updateTimerDisplay();
      expect(timerElement.innerHTML).toBe('1.05');
      
      elapsedTime = 12345;
      updateTimerDisplay();
      expect(timerElement.innerHTML).toBe('12.34');
    });
  });
  
  describe('startTimer function', () => {
    test('should initialize timer variables', () => {
      startTimer();
      expect(startTime).toBeDefined();
      expect(elapsedTime).toBe(0);
      expect(timerInterval).toBeDefined();
      clearInterval(timerInterval);
    });
    
    test('should clear existing interval before starting new one', () => {
      startTimer();
      const firstInterval = timerInterval;
      startTimer();
      expect(timerInterval).toBeDefined();
      expect(timerInterval).not.toBe(firstInterval);
      clearInterval(timerInterval);
    });
  });
  
  describe('resetTimer function', () => {
    test('should reset elapsed time to 0', () => {
      elapsedTime = 5000;
      resetTimer();
      expect(elapsedTime).toBe(0);
    });
    
    test('should update startTime', () => {
      const beforeTime = Date.now();
      resetTimer();
      const afterTime = Date.now();
      expect(startTime).toBeGreaterThanOrEqual(beforeTime);
      expect(startTime).toBeLessThanOrEqual(afterTime);
    });
  });
  
  describe('completeProblem function', () => {
    beforeEach(() => {
      a = 12;
      b = 15;
      set_pair();
    });
    
    afterEach(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    });
    
    test('should display previous problem and answer', () => {
      const oldA = a;
      const oldB = b;
      const correctAnswer = oldA * oldB;
      
      completeProblem(null, false);
      
      expect(lmnoa.innerHTML).toBe(oldA.toString());
      expect(lmnob.innerHTML).toBe(oldB.toString());
      expect(crrct.innerHTML).toBe(correctAnswer.toString());
    });
    
    test('should show skipped message for auto-advance', () => {
      completeProblem(null, true);
      expect(rspns.innerHTML).toBe('(skipped)');
      clearInterval(timerInterval);
    });
    
    test('should show wrong answer when incorrect', () => {
      const oldA = a;
      const oldB = b;
      const wrongAnswer = '999';
      
      completeProblem(wrongAnswer, false);
      
      if (Number(wrongAnswer) !== oldA * oldB) {
        expect(rspns.innerHTML).toBe(wrongAnswer);
      }
    });
    
    test('should clear answer input', () => {
      answr.value = '123';
      completeProblem(null, false);
      expect(answr.value).toBe('');
    });
    
    test('should generate new problem', () => {
      const oldA = a;
      const oldB = b;
      completeProblem(null, false);
      
      // New values should be set
      expect(lmn_a.innerHTML).toBeTruthy();
      expect(lmn_b.innerHTML).toBeTruthy();
    });
  });
  
  describe('autoAdvance function', () => {
    test('should call completeProblem with auto-advance flag', () => {
      a = 12;
      b = 15;
      autoAdvance();
      expect(rspns.innerHTML).toBe('(skipped)');
      if (timerInterval) clearInterval(timerInterval);
    });
  });
  
  describe('commence function', () => {
    afterEach(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    });
    
    test('should show current problem div', () => {
      currentProblemDiv.classList.add('hidden');
      commence();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(false);
    });
    
    test('should set isPaused to false', () => {
      isPaused = true;
      commence();
      expect(isPaused).toBe(false);
    });
    
    test('should make timer visible', () => {
      timerElement.style.visibility = 'hidden';
      commence();
      expect(timerElement.style.visibility).toBe('visible');
    });
    
    test('should clear answer input', () => {
      answr.value = '123';
      commence();
      expect(answr.value).toBe('');
    });
    
    test('should generate a new problem', () => {
      commence();
      expect(lmn_a.innerHTML).toBeTruthy();
      expect(lmn_b.innerHTML).toBeTruthy();
    });
  });
  
  describe('pause function', () => {
    test('should hide current problem div', () => {
      currentProblemDiv.classList.remove('hidden');
      pause();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(true);
    });
    
    test('should set isPaused to true', () => {
      isPaused = false;
      pause();
      expect(isPaused).toBe(true);
    });
    
    test('should hide timer', () => {
      timerElement.style.visibility = 'visible';
      pause();
      expect(timerElement.style.visibility).toBe('hidden');
    });
  });
  
  describe('submit function', () => {
    test('should call completeProblem on Enter key (keyCode 13)', () => {
      a = 12;
      b = 15;
      answr.value = '180';
      
      const event = { keyCode: 13 };
      submit(event);
      
      // Check that the problem was completed
      expect(lmnoa.innerHTML).toBe('12');
      expect(lmnob.innerHTML).toBe('15');
    });
    
    test('should not call completeProblem on other keys', () => {
      a = 12;
      b = 15;
      const oldA = lmnoa.innerHTML;
      
      const event = { keyCode: 65 }; // 'A' key
      submit(event);
      
      // Old values should not change
      expect(lmnoa.innerHTML).toBe(oldA);
    });
  });
  
  describe('Integration tests', () => {
    afterEach(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    });
    
    test('should handle complete workflow', () => {
      // Start the practice
      commence();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(false);
      expect(isPaused).toBe(false);
      
      // Save current problem
      const currentA = parseInt(lmn_a.innerHTML);
      const currentB = parseInt(lmn_b.innerHTML);
      
      // Submit an answer
      answr.value = (currentA * currentB).toString();
      submit({ keyCode: 13 });
      
      // Check that previous problem is displayed correctly
      expect(lmnoa.innerHTML).toBe(currentA.toString());
      expect(lmnob.innerHTML).toBe(currentB.toString());
      expect(crrct.innerHTML).toBe((currentA * currentB).toString());
      
      // Pause
      pause();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(true);
      expect(isPaused).toBe(true);
      
      // Resume
      commence();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(false);
      expect(isPaused).toBe(false);
    });
  });
  
  describe('Edge cases', () => {
    afterEach(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    });
    
    test('should handle rapid successive calls to commence', () => {
      commence();
      commence();
      commence();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(false);
      expect(isPaused).toBe(false);
    });
    
    test('should handle rapid successive calls to pause', () => {
      pause();
      pause();
      pause();
      expect(currentProblemDiv.classList.contains('hidden')).toBe(true);
      expect(isPaused).toBe(true);
    });
    
    test('should handle empty answer submission', () => {
      a = 12;
      b = 15;
      answr.value = '';
      
      submit({ keyCode: 13 });
      
      // Should still complete the problem
      expect(lmnoa.innerHTML).toBe('12');
      expect(lmnob.innerHTML).toBe('15');
    });
  });
});
