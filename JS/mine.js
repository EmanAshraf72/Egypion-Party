// =============================nav in section Home=======================


// elwidth of ul
let widthUl=$('.iconFixed ul').innerWidth();
// console.log(widthUl)

// when i click about ion
$('.iconFixed .fa-bars').click(function () {
    // console.log('hiii')
    let leftVal=$(".iconFixed").css("left");

if(leftVal== "0px")
{
    $(".iconFixed").animate({left:`-${widthUl}`},500)
}
else{
    $(".iconFixed").animate({left:'0px'},500)

}

})


// =============CLOSE=============
// when i click about icon close
$('.test').click(function () {
        // console.log('hiii')
    $(".iconFixed ul").css("display","none")


})


// ===============================display p in section 2================
$('#item h3').click(function(){

$('#item p').slideUp(300);
$(this).next().slideDown(300);

})








// ====================contact====================
// when i enter value in text Area
$(function () {
    let max = 100;
    $("textarea").keyup(function () {

        // btrag3 Ana dakhalt kam number of charcter who entrt in textarea
        let length = $(this).val().length;
        // console.log(length)


        // bshwof  El3dd eldakhlto wasel lkam 100-(length =>ana dakhalt kam charcter)
        let char = max - length;
        // console.log(char)



        if (char <= 0) {
        // btrag3 message bra100
            $("#char").text("your available char finished");
        } else {
         // btrag3 Elbaky mn 100 kol madakhal number benkus mn 100
            $("#char").text(char);
        }
    });
});








// ===================count in sec3==============================
function countdown() {
    var myDate = new Date();
    var myEvent = new Date(2022, 11, 23);

    var currentTiime = myDate.getTime();
    // console.log(currentTiime);
    
    var eventTime = myEvent.getTime();
    // console.log(eventTime);

    var remTime = myEvent - currentTiime;
    //  console.log(remTime)

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;


$('#days').html( d +"D");
$('#hours').html( h +"h");
$('#minutes').html( m +"m");
$('#seconds').html( s +"s");

    setTimeout(countdown, 1000);

}

countdown();


