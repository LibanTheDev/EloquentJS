//chapter 3 recursion

var isEven = function (number) {

    if(number==0) {
      return true;
    }
    else if(number==1) {
      return false;
    }
    else if(isNegative(number)){
        isEven(-(number));
    }
    else {
    isEven(number-2);
  }

}

var isNegative = function(n) {

  if(n<0) {
      return true;
  }

};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
