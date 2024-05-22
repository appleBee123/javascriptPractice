// Variables
const tabs = document.querySelectorAll('.tabs .tab');
const input = document.querySelector('.primary');
const myRegExInput = document.querySelector('.my-reg-ex');
const myRegExContainer = document.querySelector('.my-reg-ex-container');

// Regular Expressions

// digits only
let regex = /\d/;
// any character
let myRegEx = /./;

// Functions
// 1. Set active tab
const setActiveTab = (event) => {
    // sliding tabs functionality
    document.querySelector('.tab.active').classList.remove('active');
    event.currentTarget.classList.add('active');
    //
  
    // clear input
    input.value = '';

    if (event.currentTarget.classList.contains('digits')) {
        // allow digits only
        regex = /\d/;
        // hide custom regex input
        myRegExContainer.classList.remove('active');
      } else if (event.currentTarget.classList.contains('letters')) {
        // allow uppercase and lowercase letters only
        regex = /[A-Za-z]/;
        // hide custom regex input
        myRegExContainer.classList.remove('active');
      } else {
        // allow allow any character
        regex = myRegEx;
        // show custom regex input
        myRegExContainer.classList.add('active');
      }
    };

    // 2. Input filter
const inputFilter = (event, regEx) => {
    // catch pressed key's code
    // and convert it to an actual character
    let symbol = String.fromCharCode(event.keyCode);
  
    // if character doesn't belong to regEx set
    // then prevent it from being typed
    if (!regEx.test(symbol)) {
      event.preventDefault();
    }
  
  // The test() method executes a search for a match between a regular expression and a specified string.
  // Returns true if there is a match; false otherwise.
  };

  // 3. Input event
const inputEvent = (event) => {
    inputFilter(event, regex);
  };
  
  // 4. Setting user's input filter
  const inputUserChoice = (event) => {
    // create and assign user's input to regEx
    myRegEx = new RegExp(`[${event.currentTarget.value}]`);
    regex = myRegEx;
  };

  // 5. Emptiness validation
const ifEmpty = (event) => {
    // custom regEx is empty
    // then allow any character
    if (
      !event.currentTarget.value.trim().length ||
      event.currentTarget.value === ''
    ) {
      regex = /./;
    }
  };

  // Event Listeners
// sliding tabs event
tabs.forEach((tab) => {
    tab.addEventListener('click', setActiveTab);
  });
  // input event
  input.addEventListener('keypress', inputEvent);
  // user's regEx
  myRegExInput.addEventListener('input', inputUserChoice);
  // check whether empty on blur
  myRegExInput.addEventListener('blur', ifEmpty);