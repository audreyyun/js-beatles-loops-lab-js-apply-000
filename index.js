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
  }
  i++;
  
  return exclArr;
}