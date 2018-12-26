// add solution here

var result = [];

function theBeatlesPlay(musicians, instruments){
  
  for (let i = 0; i < musicians.length; i++) {
  
  result.push(`${musicians[i]} plays ${instruments[i]}`)
}

return result
}





function johnLennonFacts(noFact){
  var number = 0
  var newFact = []
  while (number < noFact.length) {
  newFact.push(noFact[number] + "!!!")
  number = number + 1
  }
  return newFact
}


function iLoveTheBeatles(number){
  var whatsThis = []
  
  do {
  whatsThis.push("I love the Beatles!")
  number = number + 1
  
} while (number.length < 15);
  
  return whatsThis
}



var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  
  do {
  array.shift();
  incrementVariable();
  
} while (array.length > 0 && incrementVariable());
  return array
}
