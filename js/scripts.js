function play1(){
  var die1 = document.getElementById('dies1');
  var die2 = document.getElementById("dies2");
  var playerone = document.getElementById('playerone');
  var dis1 = Math.floor(Math.random() * 6) + 1;
  var dis2 = Math.floor(Math.random() * 6) + 1;
  var all = dis1 + dis2;
  die1.innerHTML = dis1;
  die2.innerHTML = dis2;
  playerone.innerHTML = "you rolled "+  all +".";
  if(dis1 == dis2){
      playerone.innerHTML +="you won another round DOUBLES";
  }

}
