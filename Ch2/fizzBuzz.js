//chapter 2 fizzBuzz

for(var i=1; i<=100;i++) {

    if(i%3==0 && i%5!==0) { //if i is divisible by 3 and NOT by 5
      console.log("Fizz");
    }
    else if(i%5==0 && i%3!==0){ //if i is divisible by 5 and NOT by 3
      console.log("Buzz");
    }
    else if(i%5===0 && i%3===0) { //if i is divisible by 5 AND 3
      console.log("FizzBuzz");
    }
  else{
    console.log(i);
  }
}
