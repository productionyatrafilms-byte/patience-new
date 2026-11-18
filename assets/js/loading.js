// loading.html - lights the 8 squares in turn, then continues to home.html
(function () {
    var STEP_INTERVAL = 150;
    var TOTAL_DURATION = 3000;
    var NEXT_PAGE = "./home.html";

    var blocks = document.querySelectorAll("#loaderBlocks .loader-block");
    var lit = 0;

    window.setInterval(function () {
        blocks[lit].classList.remove("is-lit");
        lit = (lit + 1) % blocks.length;
        blocks[lit].classList.add("is-lit");
    }, STEP_INTERVAL);

    window.setTimeout(function () {
        window.location.href = NEXT_PAGE;
    }, TOTAL_DURATION);
})();
