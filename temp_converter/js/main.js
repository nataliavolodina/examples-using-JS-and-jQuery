/* 
when "go1" button is clicked
    convert C to F
    if F is "hot"
        change background color to red
    else
        change background color to blue

when "go2" butotn is clicked
    convert F to C
    if C is "hot"
        change background color to red
    else
        change background color to blue

if you are going to be using the "enter" key then you'll have to use the form tag to create boxes

you will have to convert it to a float

add the final value to the text: so it will appear like so 20C

BONUS: USE AN ARRAY
 (°F - 32) x 5/9
 °C x 9/5 + 32 = °F
*/

var lastTouchedInput = '';

/*
$('#fahrenheit').on('input', function(){
		var fahrenheitValue = $(this).val(); 
		var celsiusValue = convertToCelsius(fahrenheitValue); 
		$('#celsius').val(celsiusValue.toFixed(1));
});

$('#celsius').on('input', function(){
		var celsiusValue = $(this).val();
		var fahrenheitValue = convertToFahrenheit(celsiusValue);
		$('#fahrenheit').val(fahrenheitValue.toFixed(1));
});
*/

$('#tempForm').on('submit', function(event){
	event.preventDefault();
});

$('#fahrenheit').on('input', function(){
		lastTouchedInput = 'fahrenheit';
});

$('#celsius').on('input', function(){
		lastTouchedInput = 'celsius';
});

$('#convert').on('click', function (){
		
		if (lastTouchedInput === 'fahrenheit') {
			var fahrenheitValue = $('#fahrenheit').val();
			var newCelsiusValue = convertToCelsius (fahrenheitValue);
			$('#celsius').val(newCelsiusValue);
				
		} else if(lastTouchedInput === 'celsius') {
			var celsiusValue = $('#celsius').val();
			var newFahrenheitValue = convertToFahrenheit (celsiusValue);
			$('#fahrenheit').val(newFahrenheitValue);
		}
		
});


function convertToCelsius (tempF) {
    var conclusion = (tempF - 32) * 5 / 9;
    return conclusion; 
}

function convertToFahrenheit (tempC) {
    var conclusion = ((tempC * 9) / 5 + 32);
    return conclusion; 
} 
