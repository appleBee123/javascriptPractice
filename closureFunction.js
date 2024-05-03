function bank()
{
    var bankBalance = 1000
     function withdraw(n)
    {
    bankBalance -= n

    return bankBalance

    }
    return withdraw
}

console.log(bank()(200))