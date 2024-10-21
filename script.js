$(document).ready(function() {
    
    $("#fadeButton").click(function() {
        $("#fadeText").fadeOut();
    });

    
    $("#appendButton").click(function() {
        $("#appendText").fadeOut(); 
        $("#appendText1").append("   Hey It is working ");
    });

    
    $("#colorButton").click(function() {
        $("#colorText").css("color", "red");
    });
});
