// 変数を宣言

let firstDigit = 0;
let secondDigit = 0;
let thirdDigit = 0;
let fourthDigit = 0;
let display = document.getElementById("counter")
let timer;



// 関数を定義

function countUp() {
  fourthDigit++
  if (fourthDigit / 10 == 1) {
    thirdDigit++;
    fourthDigit = 0;
    if (thirdDigit / 10 == 1) {
      secondDigit++;
      thirdDigit = 0;
      if (secondDigit / 10 == 1) {
        firstDigit++;
        secondDigit = 0;
      }
    }
  }
  display.textContent = firstDigit + ":" + secondDigit + ":" + thirdDigit + ":" + fourthDigit;
}

function resetCount() {
  firstDigit = 0;
  secondDigit = 0;
  thirdDigit = 0;
  fourthDigit = 0;
  display.textContent = firstDigit + ":" + secondDigit + ":" + thirdDigit + ":" + fourthDigit;
}




// JQueryでDOMを操作

$(document).ready(function(){
  
  //スタートボタンを押すと...
  $("#start-btn").click(function(){
    timer = setInterval(countUp, 100);
  });
  
  //ストップボタンを押すと...
  $("#stop-btn").click(function(){
    clearInterval(timer);
  });
  
  //リセットボタンを押すと...
  $("#reset-btn").click(function(){
    clearInterval(timer);
    resetCount();
  });

});