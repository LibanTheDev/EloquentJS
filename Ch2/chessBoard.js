// chapter 2 chessboard
var size = 8;
var chessBoard = ""; //the board

for (var i=0; i<size;i++) { //covers rows
  for(var j=0;j<size;j++) { //covers the characters in each row
    if((i+j)%2==0) { // if the sum of the two counters is even,
      chessBoard+=" ";    //leave a space
    }
    else{ //if not even
      chessBoard+="#";  //add #
    }

  }
  chessBoard+="\n"; //new line

}
console.log(chessBoard);
