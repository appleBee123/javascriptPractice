var bankBalance = 1000;
function withdraw(n) {
  bankBalance -= n;

  return bankBalance;
}

console.log(withdraw(200));
