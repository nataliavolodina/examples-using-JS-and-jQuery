
function compareNum(){
    var a=parseFloat($('#a').val());
    
    var b=parseFloat($('#b').val());

    if (a > b){
        $('#comparison').html('>');
        updatePage();
    
    } else if (a < b) {
        $('#comparison').html('<');
        updatePage();
    } else {
        $('#comparison').html('=');
        updatePage();
    }
}
  $('#submit').click(compareNum);  
