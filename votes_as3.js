var user = {
    upvotes: 0,
    downvotes: 0
}

function getVoteCount(u,d)
{
    this.upvotes = u
    this.downvotes = d
    return this.upvotes - this.downvotes
}

console.log(getVoteCount.call(user,10,5))