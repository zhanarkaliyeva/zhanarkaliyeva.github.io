var Click=0;
var first;
var second;
var match=0;

var cards=[];
cards[0]="images/kittens.jpg";
cards[1]="images/dog.jpg";
cards[2]="images/rainbow.jpg";
cards[3]="images/rainbow.jpg";
cards[4]="images/kittens.jpg";
cards[5]="images/dog.jpg";
cards[6]="images/flower.jpg";
cards[7]="images/flower.jpg";
cards[8]="images/heart.jpg";
cards[9]="images/heart.jpg";
cards[10]="images/panda.jpg";
cards[11]="images/panda.jpg";
cards[12]="images/smile.jpg";
cards[13]="images/smile.jpg";
cards[14]="images/umbrella.jpg";
cards[15]="images/umbrella.jpg";


//shuffle algorithm
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array){
  var currentIndex=array.length, temporaryValue,randomIndex;

// While there remain elements to shuffle...
  while (0!==currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
  return array;
}

var s;
s=shuffle(cards);
Counter = 0;



//this function is called when we click a card 
function choose(card, time) {
  if (Click==0) {
    //set the image we click on
    first=card;
    document.images[card].src=cards[card];
    Click=1;
  }
  else if (Click==1){
    Click=2;
    second=card;
    document.images[card].src=cards[card];
    //wait half a second before flip back
    timer=setInterval(check,500);
    //counting the moves
    Counter++;
    $("#moves").html("" + Counter);
  } 
}

//function of star disappearing after few clicks
$(function() {
  var Click = 0;
  
  $('#table').click(function(e) {
    e.preventDefault();
    Click++;
    
    if(Click == 34) {
      $('.rating-first').remove();
    } else if (Click==46) {
      $(".rating-second").remove();
    } else if (Click==60) {
      $(".rating-third").remove();
    }
  });
});


//time counting
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
  $("#seconds").html(pad(++sec%60));
  $("#minutes").html(pad(parseInt(sec/60,10)));
}, 1000);


//check function: do they match?
function check () {
  clearInterval (timer); //stop timer
  Click=0;
  if (cards[second]==cards[first]) {
    //if the 1st card is equal to the 2nd then they match
    match++;
    if (match==8) {
      if (confirm('Congratulations! You found all pictures with ' + Counter + ' clicks, in ' + sec +' seconds and '+ $( "#rating" ).children().length + ' stars. Do you want to play again?')) {  //$( "#rating" ).children().length  is number of stars
        //reload page for a new game
        location.reload(); 
      } else {
        clearInterval(sec);
      }
    }
  } else {
    document.images[first].src="images/back.jpg";
    document.images[second].src="images/back.jpg";
    return;
  }
}


//restart button
function myFunction() {
  location.reload();
}
