$(document).ready(function(){
    $("#submit").click(function(){
        event.preventDefault();

        line = $("#fname").val();
        line = line + " " + $("#lname").val() + "<br>";
        line = line + " " + $("#age").val() + "<br>";
        line = line + " " + $("#fsport").val() + "<br>";
        line = line + " " + $("#fhobby").val() + "<br>" + "<br>";
        $("#output").append(line)
        $("#fname").val("");
        $("#lname").val("");
        $("#age").val("");
        $("#fsport").val("");
        $("#fhobby").val("");
    });

    $("#dark").click(function(){
        $("h1, label, p").css({"color":"red"});
        $("main").css({"background-color": "black"})
    });

    $("#light").click(function(){
        $("h1, label, p").css({"color":"black"});
        $("main").css({"background-color": "white"})
    });

    $("#increase").click(function(){
        var currentFontSize = parseInt($("h2").css('font-size'));
        currentFontSize += 3;
        setFont = currentFontSize + "px"
        $("h2").css("fontSize", setFont);
    });

    $("#decrease").click(function(){
        var currentFontSize = parseInt($("h2").css('font-size'));
        currentFontSize -= 3;
        setFont = currentFontSize + "px"
        $("h2").css("fontSize", setFont);
    });
});