//Ch 3 Minimum function

var min = function(a,b) {
  //checks to see if a<b
    if(a<b) {
      return a;
    }
    //checks to see if b<a
    else if(a>b){
      return b;
    }
  else{ //if they are equal
    return undefined;
  }
};

console.log(min(1,100));
console.log(min(200,400));
console.log(min(300000,2));
