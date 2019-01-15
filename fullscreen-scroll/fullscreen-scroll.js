const helper = {
    getDelta(event) {
        if(event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail;
        }
    },
}
function ScrollPages(currentPageNumber, totalPageNumber, pages) {
    this.currentPageNumber = currentPageNumber;
    this.totalPageNumber = totalPageNumber;
    this.pages = pages;
    this.viewHeight = document.documentElement.clientHeight;

    this.mouseScroll = function(event) {
        console.log(this);
        let delta = helper.getDelta(event);
        if (delta < 0) {
            this.scrollDown();
        } else {
            this.scrollUp();
        }
    }
    this.scrollDown = function() {
        if (this.currentPageNumber !== this.totalPageNumber){
            this.pages.style.top = (-this.viewHeight * this.currentPageNumber) + 'px';
            console.log(this.pages.style.top);
            this.currentPageNumber++;
        }
    }
    this.scrollUp = function() {
        if (this.currentPageNumber !== 1) {
            this.pages.style.top = (-this.viewHeight * (this.currentPageNumber - 2)) + 'px';
            console.log(this.pages.style.top);
            this.currentPageNumber--;
        }
    }

    this.scrollTo = function() {
    }

    this.init = function() {
        this.pages.style.height = this.viewHeight + 'px';
        if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('wheel', this.mouseScroll.bind(this));
            // document.addEventListener.apply(this, ['wheel', this.mouseScroll])
        } else {
            document.addEventListener('DOMMouseScroll', this.mouseScroll.bind(this));
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var s = new ScrollPages(1,3,document.getElementById('all-pages'));
    s.init();
})
