$(function() {

  // ボタンがクリックされた場合
  $('#change-color').on('click', function(){
    
    $('#target').css('color', 'red');
    
  });

  $('#change-text').on('click', function(){

    $('#target').text('あいうえお');

  });

  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
  
    $('#target').fadeIn();
  });

});
