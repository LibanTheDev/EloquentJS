//chapter 3 bean counting function



var countChar = function(word, character) {

  var count = 0;
  for(var i=0; i<word.length;i++) {
    if(word.charAt(i)==character){
      count++;
    }
  }
  return count;
};

var countBs = function(word) {
  var numberOfBs = countChar(word,"B");
  return numberOfBs;
};

console.log(countBs('BaBBling BaBBooN is in the Building Boss'));
