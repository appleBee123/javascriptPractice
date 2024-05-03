var items = {
  tv: 60000,
  piano: 10000000,
  skates: 7000,
  laptop: 80000,
  stereo: 50000
}

var price = 0

var itemName

for (i in items) 
{
  if (items[i] > price) 
  {
    price = items[i]                      // stores value eg 60000
    itemName = i                          // eg tv
  }
  else {
    items[itemName] = items[i]            // swapping
    items[i] = price
  }
}

console.log(`${itemName}  ${price}`)                  //item with highest price is at the end, so is the last stored value