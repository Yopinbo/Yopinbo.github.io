
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 250,
            header = document.querySelector("#header");
        if (distanceY > shrinkOn) {
            $("#header").addClass("smaller");
        } else {
            if ($("#header").hasClass("smaller")) {
                $("#header").removeClass("smaller");
            }
        }
    });
}
window.onload = init();

