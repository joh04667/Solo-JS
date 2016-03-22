//vars

var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

var str = "Months listed are ";

// step 1
for(var i = 0; i<stringList.length; i++) {
  if(i<stringList.length-1) {
  str += stringList[i] + ", ";
} else {
  str+= stringList[i]+ ".";
}
}
console.log(str);

//step 2
console.log(numList[numList.length - 1]);

//step 3
var numString = "";
for(var i = 0; i<numList.length; i++) {
  numString += numList[i].toString();
}
console.log(numString);

//step 4
console.log(numList.reduce((a, b) => a + b));
//please let me know if this isn't what you wanted. i figured .reduce() iterates anyway and fat arrows are too handy to ignore


//step 5
if(boolList[1]) {
  console.log(numList[0]+numList[2]);
} else {
  console.log(numList[1] * numList[1]);
}

//step 6
for(var i = 0; i<boolList.length; i++) {
  if(boolList[i]) {console.log(numList[i]);}
}
