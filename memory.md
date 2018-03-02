is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.

#Installation
First you should download jQuery. **jQuery** is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. Links that I used:
*https://code.jquery.com/jquery-2.1.4.min.js
*https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js
*https://code.jquery.com/jquery-1.10.2.js

In my **Memory game** in _HTML_ file first I created a table with pictures. Put some background color for page. In _CSS_ I put width and height of images and border between cards. Then in _memory.js_ I created some variables, cards. Found a shuffle algorithm (here is some information about algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). 
Then I created a function that flipped a card. And then check them if they matched or not:

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

I put some function for stars. When user clicks on 'table' 34 times one 'star' diappear. 
When the user clicks on 'table'(cards) 46 times second 'star' disappear. 
And when user clicks on 'table' 60 times then last third 'star' disappear. I used **remove()** to make stars disappear completely(with 'span').

Also I put a timer function. First I thought to write a countdown function because it seemed to me much easier, but then I found this function, it helped me a lot:

function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
  $("#seconds").html(pad(++sec%60));
  $("#minutes").html(pad(parseInt(sec/60,10)));
}, 1000);

And finally, for 'Restart' button I created function that reload whole page.

#License
MIT License

Copyright (c) [2017] [Zhanar Kaliyeva]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.