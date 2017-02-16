var names = ["simon", "daniel", "anders", "majs"];


function findName(name) {

  for (var i = 0; i < names.length; i++) {
    if (names[i] === name) {
      return names[i];
    }
  }
}

// findName("daniel");
findName:for (var i = 0; i < names.length; i++) {
  if (names[i] === "daniel") {
    console.log(names[i]);
    break findName;
  }
}
