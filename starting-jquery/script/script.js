$(document).ready(function(){
    $("#btntwo").click(function(){
        $("#four").hide();
        $("#special").hide();
    });
});

$(document).ready(function(){
    $("#btnone").click(function(){
        $("#three").hide();
        $("#two").hide();
    });
});

$(document).ready(function(){
    $("#one").click(function(){
        $("#one").hide();
    });
});