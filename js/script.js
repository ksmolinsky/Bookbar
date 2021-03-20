$(function() {
    $(".carousel").carousel( { interval: 3000} );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function() {
    $('#onlineBookstore').mouseover(function() {
        $('#onlineBookstore').css("background-color", "white");
        $('#onlineBookstore').css("color", "black");
    });
    $("#onlineBookstore").mouseout(function() {
        $('#onlineBookstore').css("background-color", "black");
        $("#onlineBookstore").css("color", "white");
    });
});

$(function() {
    $("#AllDayButton").click(function(){
      $("#BrunchMenu").hide("#BrunchMenu");
      $("#AllDayMenu").collapse("show");
      $("#HappyHourMenu").collapse("hide");
    });
   });

$(function() {
    $("#brunchButton").click(function() {
        $("#BrunchMenu").show("#BrunchMenu");
        $("#AllDayMenu").collapse("hide");
        $("#HappyHourMenu").collapse("hide");
    });
});

$(function() {
    $("#HappyHourButton").click(function() {
        $("#HappyHourMenu").collapse("show");
        $("#AllDayMenu").collapse("hide");
        $("#BrunchMenu").hide("#BrunchMenu");
    });
});

$(function() {
    $("#ReservationButton").click(function(){
        $("#ReservationModal").modal("show")
    });
});