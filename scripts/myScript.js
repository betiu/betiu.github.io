var number = 1000000;
function rnd(min, max) {
  var a = Math.floor(Math.random() * (max - min) ) + min
  if(a == 7){
    a = a - 1
  }
  return a;
}
function updateMoney() {
        document.getElementById("money").innerHTML = number;
    }
    function playDice(){
  var bruh = parseInt(document.getElementById("frm1").elements[0].value, 10);
  if (isNaN(bruh)){
    document.getElementById("diceResult").innerHTML = "لطفا مقدار پولی که نیخواهید شرط ببندید را وارد کنید"
  }
  else{
    if(bruh < 0){
      document.getElementById("diceResult").innerHTML = "داداش خیلی باهوشی ولی نمیشه";
      return;	
    }
    number = number - bruh;
    var shadmr = rnd(1, 7);
    var player = rnd(1, 7);
    if(player > shadmr){
      shadmr = [player, player = shadmr][0];
    }
    document.getElementById("diceResult").innerHTML = "شادمهر: " + shadmr.toString(10) + "<br>" + "بازیکن: " + player.toString(10);
    updateMoney();
  }
}
