console.log((function () {
    var bankBalance = 1000;
  
    function withdraw(n) {
      bankBalance -= n;
      return bankBalance;
    }
  
    function deposit(d) {
      bankBalance += d;
      return bankBalance;
    }
  
    return { withdraw, deposit };
  })().deposit(200))