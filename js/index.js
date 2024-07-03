let now;
let diffrence;
let days;
let hours;
let minutes;
let seconds;
let length;
let href;
let place;
let count = 100;

// validation
let nameValidation = /^[a-zA-Z ]{2,25}$/;
let emailValidation = /^[a-zA-Z][a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]{3,5}$/;
let messageValidation = /^[a-zA-Z0-9]{3}/

// show details
$("#details h1").click(function(eInfo){
    $("#details p").not($(eInfo.target).next()).slideUp(500);
    $(eInfo.target).next().slideToggle(500);
})

// count down timer
let countDown  = new Date("Jun 21, 2025 0:0:0").getTime();
let x = setInterval(function(){
    now = new Date().getTime();
    diffrence = countDown - now ;
    if(diffrence<0)
    {
        clearInterval(x);
        alert("Let's Go");
    }
    days= Math.floor(diffrence / (1000*60*60*24));
    hours = Math.floor(diffrence % (1000*60*60*24)/(1000*60*60));
    minutes = Math.floor(diffrence % (1000*60*60)/(1000*60));
    seconds = Math.floor(diffrence % (1000*60)/(1000));

    $("#duration .row").html(`
                    <div class="col-lg-3">
                        <div class="border py-3">
                            <h1>${days} d</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border py-3">
                            <h1>${hours} h</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border py-3">
                            <h1>${minutes} m</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border py-3">
                            <h1>${seconds} s</h1>
                        </div>
                    </div>`);
})

// message validation and know length of character
$("textarea").keyup(function (){

    
    if(messageValidation.test($("textarea").val()))
    {
        $("textarea").removeClass("is-invalid");
        $("textarea").addClass("is-valid");
    }
    else
    {
        $("textarea").addClass("is-invalid");
    }

    length = $("textarea").val().length;
    console.log(length)
    if(count-length <= 0)
    {
        $("#contact .count").html(`<p class="py-3 text-danger">Your Avaliable Character Finished</p>`)
    }
    else
    {
        $("#contact .count").html(`<p class="py-3">${count-length} Character Reamining</p>`)
    }

})

// check name validation
$("#name").keyup(function(){
    if(nameValidation.test($("#name").val()))
    {
        $("#name").removeClass("is-invalid");
        $("#name").addClass("is-valid");
    }
    else
    {
        $("#name").addClass("is-invalid");
    }
})

// check email validation
$("#email").keyup(function(){
    if(emailValidation.test($("#email").val()))
    {
        $("#email").removeClass("is-invalid");
        $("#email").addClass("is-valid");
    }
    else
    {
        $("#email").addClass("is-invalid");
    }
})

// clear inputs
$(".btn-purple").click(function(){
    if($("textarea").hasClass("is-invalid") || $("#name").hasClass("is-invalid") || $("#email").hasClass("is-invalid"))
    {
        alert("Please Enter All Requiered Data");
    }
    else if($("textarea").val()=="" || $("#name").val()=="" || $("#email").val()=="")
    {
        alert("Please Enter All Requiered Data");
    }
    else
    {
        $("textarea").val("");
        $("#name").val("");
        $("#email").val("");
        $("textarea").removeClass("is-valid");
        $("#name").removeClass("is-valid");
        $("#email").removeClass("is-valid");
        $("#contact .count").html(`<p class="py-3">${count} Character Reamining</p>`)
    }
})

// close navigation bar
let width = $("nav").outerWidth(true);
$("nav").css({left:-width});
$(".fa-xmark").click(function(){
    $("nav").animate({left:-width},500);
    $(".open").animate({left:"1%"},500);
})

// open and close navigation bar
$(".open").click(function(){
    if($("nav").css("left")=="0px")
    {
        $("nav").animate({left:-width},500);
        $(".open").animate({left:"1%"},500);
    }
    else
    {
        $("nav").animate({left:0},500);
        $(".open").animate({left:width+10},500);
    }
})

// smooth scroll
$("nav a").click(function (eInfo){ 
    href = $(eInfo.target).attr("href");
    place = $(href).offset().top;
    $("html , body").animate({scrollTop:place},80);
});

// make sure website is ready
$(document).ready(function(){
    $(".loading").fadeOut(1000);
    $("body").css("overflow","auto");
})