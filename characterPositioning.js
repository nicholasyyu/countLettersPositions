function countLettersPositions(string){

  var string = string.toLowerCase().split("");
  //console.log(string);
  var obj = {};

  for(var i = 0; i < string.length; i++){
    var temp = string[i];
    //obj[temp] = (isNaN(obj[temp]) ? 1 : obj[temp] + 1);
    typeof obj[temp] === 'undefined' ? obj[temp] = [i] : obj[temp].push(i);

  }
  delete obj[" "];
  return obj;
}

console.log(countLettersPositions("lighthouse in the house LL") );