// home.html - clicking a subpoint card plays the exit animation, then opens its page
(function () {
    var EXIT_DURATION = 900;
    var stage = document.querySelector(".stage");
    var cards = document.querySelectorAll("a.question-card");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    cards.forEach(function (card) {
        card.addEventListener("click", function (event) {
            playSound(topicAudio);
            if (event.ctrlKey || event.metaKey || event.shiftKey || reducedMotion || stage.classList.contains("is-leaving")) {
                return;
            }
            event.preventDefault();
            stage.classList.add("is-leaving");
            window.setTimeout(function () {
                window.location.href = card.href;
            }, EXIT_DURATION);
        });
    });
})();
