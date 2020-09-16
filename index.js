// add solution here

function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts (facts) {
  var exclArr = [];
  
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i]; 
    exclArr.push(fact +'!!!');
    
    i++;
  }
  
  return exclArr;
}

function iLoveTheBeats(num) {
  var arr= [];
  var beatlesStr = "I love the Beatles!";
  
  do {
    i = 0;
    arr.push(beatlesStr);
  } while (i < 15);
  
  do {
}