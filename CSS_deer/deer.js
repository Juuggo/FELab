document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('walk').onclick = function(){
        var hands = document.getElementById('hands');
        var foots = document.getElementById('foots');
        hands.childNodes[0].classList.toggle('walk_lh');
        hands.childNodes[1].classList.toggle('walk_rh');
        foots.childNodes[0].classList.toggle('walk_lf');
        foots.childNodes[1].classList.toggle('walk_rf');
    }
});
