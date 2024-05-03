var items = {
    tv: 60000,         // not present in items2
    piano: 10000000,
    skates: 7000,
    laptop: 80000,
    stereo: 50000
  }

  var items2 = {
    shampoo: 200,      // not present in items1
    piano: 10000000,
    skates: 7000,
    laptop: 80000,
    stereo: 50000
  }

items.__proto__ = items2          // single inheritance

console.log(items.__proto__)
 

