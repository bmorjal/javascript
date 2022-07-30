$(document).ready(function(){
    $("#left").click(function(){
        $("#img1").animate({
            marginLeft: "-=10px"
        });
    });
    $("#right").click(function(){
        $("#img1").animate({
            marginLeft: "+=10px"
        });
    });
    $("#up").click(function(){
        $("#img1").animate({
            marginTop: "-=10px"
        });
    });
    $("#down").click(function(){
        $("#img1").animate({
            marginTop: "+=10px"
        });
    });

});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#bottom").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#bottom").stop();
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
      $("#callback").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
});

$(document).ready(function(){
    $("#clickme").click(function(){
      $("#chain").css("color", "red").css("font-size", "100px").slideUp(2000).slideDown(2000);
    });
});