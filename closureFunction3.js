function bank() {
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
}

var firstBankAccount = bank()
console.log(firstBankAccount.withdraw(200))
console.log(firstBankAccount.deposit(50))

var secondBankAccount = bank()
console.log(secondBankAccount.withdraw(300))
console.log(secondBankAccount.deposit(10))
