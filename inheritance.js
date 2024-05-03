var items = {
    tv: 60000,
    piano: 10000000,
    skates: 7000,
    laptop: 80000,
    stereo: 50000
  }

  var items2 = {
    tv: 60000,
    piano: 10000000,
    skates: 7000,
    laptop: 80000,
    stereo: 50000
  }

  items.__proto__ = items2
  
  console.log(items.__proto__)
 