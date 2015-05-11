var total=0;   //global var is set to 0, b/c we start w/0 val and it will always reset to 0
$('#entry').submit(enter);  //this is coming from id="entry"

function enter(){
    var entry = $('#newEntry').val();
    var entryFloat = parseFloat(entry);
    var currency = formatFloat(entryFloat);
    $('#entries').append('<tr><td><td>'+currency+'</td></td></tr>');
    total += entryFloat;
    $('#total').html(formatFloat (total));
    $('#newEntry').val(''); 
}

function formatFloat (someNum){
    var currency = parseFloat(someNum);
    currency = currency.toFixed(2);
    currency = '$'+ currency; 
    return currency;
}