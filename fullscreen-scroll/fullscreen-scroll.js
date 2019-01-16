const helper = {
    getDelta(event) {
        if(event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail;
        }
    },
}
class ScrollPages {
    constructor(currentPageNumber, totalPageNumber, pages){
        this.currentPageNumber = currentPageNumber;
        this.totalPageNumber = totalPageNumber;
        this.pages = pages;
        this.viewHeight = document.documentElement.clientHeight;
    }

    mouseScroll(event) {
        console.log(this);
        console.log(event);
        let delta = helper.getDelta(event);
        if (delta < 0) {
            this.scrollDown();
        } else {
            this.scrollUp();
        }
    }
    scrollDown() {
        if (this.currentPageNumber !== this.totalPageNumber){
            this.pages.style.top = (-this.viewHeight * this.currentPageNumber) + 'px';
            console.log(this.pages.style.top);
            this.currentPageNumber++;
        }
    }
    scrollUp() {
        if (this.currentPageNumber !== 1) {
            this.pages.style.top = (-this.viewHeight * (this.currentPageNumber - 2)) + 'px';
            console.log(this.pages.style.top);
            this.currentPageNumber--;
        }
    }
    init() {
        this.pages.style.height = this.viewHeight + 'px';
        if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('wheel', this.mouseScroll.bind(this));
        } else {
            document.addEventListener('DOMMouseScroll', this.mouseScroll.bind(this));
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var s = new ScrollPages(1,3,document.getElementById('all-pages'));
    s.init();
})
