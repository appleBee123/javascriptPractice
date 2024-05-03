console.log(
  (function () {
    var bankBalance = 1000

    var methods = {
      withdraw: function (n) {
        bankBalance -= n
        return bankBalance
      },

      deposit: function (d) {
        bankBalance += d
        return bankBalance
      }
    }

    var result1 = methods.withdraw(100)
    var result2 = methods.deposit(500)

    return {result1,result2}

  })()
)
