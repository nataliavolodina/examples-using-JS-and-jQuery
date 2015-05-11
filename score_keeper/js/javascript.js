var total=0;

function updatePage(){
    $("#result").html(total); 
}
function addZero(){
    total+=0;
    updatePage();
}
function addFive(){
    total+=5;
    updatePage();
}
function addTen(){
    total+=10;
    updatePage();
}

function subOne(){
    total-=1;
    updatePage();
}
function resetValue(){
    total=0;
    updatePage();
}

$("#zero").click(addZero);
$("#add5").click(addFive);
$("#add10").click(addTen);
$("#sub1").click(subOne);
$("#reset").click(resetValue);