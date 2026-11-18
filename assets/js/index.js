// index.html - progress bar 0 -> 100, then continue to loading.html
(function () {
    var FAST_DURATION = 2400;
    var HALT_DURATION = 5000;
    var FINISH_DURATION = 1000;
    var SLOW_FROM = 90;
    var HOLD_AT_FULL = 1000;
    var TICK_INTERVAL = 30;
    var NEXT_PAGE = "./loading.html";

    var stage = document.getElementById("stage");
    var percentLabel = document.getElementById("progressPercent");
    var segments = document.querySelectorAll("#progressBar .progress-segment");
    var startTime = Date.now();

    function render(percent) {
        var filled = Math.floor(percent / 10);
        segments.forEach(function (segment, index) {
            segment.classList.toggle("is-filled", index < filled);
        });
        percentLabel.textContent = percent + "%";
    }

    var timer = window.setInterval(function () {
        var elapsed = Date.now() - startTime;
        var percent;
        if (elapsed < FAST_DURATION) {
            percent = Math.floor((elapsed / FAST_DURATION) * SLOW_FROM);
        } else if (elapsed < FAST_DURATION + HALT_DURATION) {
            percent = SLOW_FROM;
        } else {
            var finishElapsed = elapsed - FAST_DURATION - HALT_DURATION;
            percent = Math.min(100, SLOW_FROM + 1 + Math.floor((finishElapsed / FINISH_DURATION) * (100 - SLOW_FROM)));
        }
        render(percent);

        if (percent < 100) {
            return;
        }

        window.clearInterval(timer);
        stage.classList.add("is-complete");
        window.setTimeout(function () {
            window.location.href = NEXT_PAGE;
        }, HOLD_AT_FULL);
    }, TICK_INTERVAL);

    render(0);
})();
