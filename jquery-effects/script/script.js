$(document).ready(function(){
    $("#hidebtn").click(function(){
        $("#showhide").hide();
    });
    $("#showbtn").click(function(){
        $("#showhide").show();
    });
});

$(document).ready(function(){
    $("#fadeout").click(function(){
      $("#fade").fadeOut("slow", "linear");
    });
    $("#fadein").click(function(){
      $("#fade").fadeIn("slow", "linear");
    });
  });

$(document).ready(function(){
    $("#slideup").click(function(){
      $("#slide").slideUp();
    });
    $("#slidedown").click(function(){
      $("#slide").slideDown();
    });
  });

$(document).ready(function(){
    $("#hideimg").click(function(){
        $("#img1").hide();
    });
    $("#showimg").click(function(){
        $("#img1").show();
    });
});