document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('walk').onclick = function walkanime(){
        if(typeof timeoutID == "number") {
            window.clearTimeout(timeoutID);
            delete timeoutID;
            console.log("deleted timeout");
        }
        console.log('clicked');
        var hands = document.getElementById('hands');
        var foots = document.getElementById('foots');
        timeoutID = setTimeout(function() {
            if(hands.childNodes[0].classList.contains('walk_lh')) {
                hands.childNodes[0].classList.remove('walk_lh');
                hands.childNodes[1].classList.remove('walk_rh');
                foots.childNodes[0].classList.remove('walk_lf');
                foots.childNodes[1].classList.remove('walk_rf');
                console.log("removed classes.");
            }
        },2000);
        hands.childNodes[0].classList.add('walk_lh');
        hands.childNodes[1].classList.add('walk_rh');
        console.log('added classes.');
        foots.childNodes[0].classList.add('walk_lf');
        foots.childNodes[1].classList.add('walk_rf');
    }
});
