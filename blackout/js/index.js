var isLightOn = true;

function lightSwitch(){
        if(isLightOn == true){
            //turn light off
            $('body').addClass('dark');
            isLightOn = false; 
        } else {
            //turn light on
            $('body').removeClass('dark');
            isLightOn = true; 
        }
}
$('#light_switch').click(lightSwitch);