window.NavHider = {};
NavHider.LastScrollY = window.scrollY;
addEventListener("scroll", function () {
    let ScrollHeight = window.scrollY - NavHider.LastScrollY;
    //console.log(ScrollHeight)
    if (ScrollHeight > 20) {
        this.document.getElementsByTagName("header")[0].classList.add("TopStick")
    } else if (ScrollHeight < -20) {
        this.document.getElementsByTagName("header")[0].classList.remove("TopStick")
    }
    NavHider.LastScrollY = window.scrollY;
})