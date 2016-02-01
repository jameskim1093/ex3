$(function () {
  console.log('ready');

//HIDE TIPS
    $('#workTip').hide();
    $('#chillTip').hide();
    $('#foodTip').hide();
    $('#classTip').hide();
    
//ANIMATE TIPS  
    $('#work').hover(function() { 
      $('#workTip').show();
      }, function() {
      $('#workTip').hide();
    });
    
    $('#chill').hover(function() { 
      $('#chillTip').show();
      }, function() {
      $('#chillTip').hide();
    });
    
    $('#food').hover(function() { 
      $('#foodTip').show();
      }, function() {
      $('#foodTip').hide();
    });
    
    $('#class').hover(function() { 
      $('#classTip').show();
      }, function() {
      $('#classTip').hide();
    });
    
//WORK
    $('#work').click(function() {
      console.log('click');
      $('section#workText').css('visibility', 'visible');
      return false;
    });
    
    $('nav#close').click(function() {
      console.log('click');
      $('section#workText').css('visibility', 'hidden');
      return false;
    });

//CHILL
    $('#chill').click(function() {
      console.log('click');
      $('section#chillText').css('visibility', 'visible');
      return false;
    });

    $('nav#close').click(function() {
      console.log('click');
      $('section#chillText').css('visibility', 'hidden');
      return false;
    });

//FOOD
    $('#food').click(function() {
      console.log('click');
      $('section#foodText').css('visibility', 'visible');
      return false;
    });

    $('nav#close').click(function() {
      console.log('click');
      $('section#foodText').css('visibility', 'hidden');
      return false;
    });
    
//CLASS
    $('#class').click(function() {
      console.log('click');
      $('section#classText').css('visibility', 'visible');
      return false;
    });

    $('nav#close').click(function() {
      console.log('click');
      $('section#classText').css('visibility', 'hidden');
      return false;
    });

});