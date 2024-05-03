(function ()
{
    var bankBalance = 1000

    var methods = {

        withdraw: function (n)
    {
        bankBalance -= n
        console.log(bankBalance)
    },

    deposit: function (d)
    {
        bankBalance += d
        console.log(bankBalance)
    }
    }

    methods.withdraw(100)
    methods.deposit(500)
})()