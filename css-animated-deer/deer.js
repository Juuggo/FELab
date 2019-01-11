function addClass(e, a) {
    cls = a + '_' + e;
    document.getElementById(e).classList.add(cls);
}
function rmvClass(e, a) {
    cls = a + '_' + e;
    document.getElementById(e).classList.remove(cls);
}
function startWalk() {
    for(e in walkNodes) {
        addClass(walkNodes[e], 'walk');
    }
    rmvClass('arrsdown', 'hover');
}
function stopWalk() {
    if(document.getElementById('rhand').classList.contains('walk_rhand')){
        for(e in walkNodes) {
            rmvClass(walkNodes[e], 'walk');
        }
        addClass('arrsdown', 'hover');
    }
}
function startPress(direct) {
    for(e in pressNodes) {
        addClass(pressNodes[e], 'press'+direct);
    }
}
function stopPress(direct) {
    if(document.getElementById('deer').classList.contains('press'+direct+'_deer')){
        for(e in pressNodes) {
            rmvClass(pressNodes[e], 'press'+direct);
        }
    }
}
function clearTimeoutID() {
    if(typeof timeoutID == "number") {
        window.clearTimeout(timeoutID);
        delete timeoutID;
    }
}
document.addEventListener('DOMContentLoaded', function(event) {
    walkNodes=new Array('lhand', 'rhand', 'lfoot', 'rfoot','arrdown1', 'arrdown2');
    pressNodes=new Array('deer','rhand','lhand','lfoot','rfoot','arrleft1','arrleft2','arrright1','arrright2');
    document.getElementById('walkbtn').onclick = function() {
        stopPress('left');
        stopPress('right');
        clearTimeoutID();
        startWalk();
        timeoutID = setTimeout(function() {stopWalk()}, 2000);
    }
    document.getElementById('leftbtn').onclick = function() {
        stopPress('right');
        stopWalk();
        clearTimeoutID();
        stopPress('left');
        setTimeout(function() {startPress('left')}, 20);
    }
    document.getElementById('rightbtn').onclick = function() {
        stopPress('left');
        stopWalk();
        clearTimeoutID();
        stopPress('right');
        setTimeout(function() {startPress('right')}, 20);
    }
});
