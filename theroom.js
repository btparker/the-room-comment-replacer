function randomTheRoom() {
  
    this.theRoomOriginal = $(this).html();
    
    $(this).click(function() {
      $(this).html(this.theRoomOriginal);
    });
    
    // add derped class
    $(this).addClass("roomed");

    var randomIndex = Math.floor((Math.random()*quoteArray.length));
    return '<p>'+quoteArray[randomIndex]+ '</p>';

}


$('.Ct, p.ctx').not('.roomed').html(randomTheRoom);


setInterval(function() {

  $('.Ct, p.ctx').not('.roomed').html(randomTheRoom);
}, 100);

