// Subpoint pages (define, when, rewards, why, how): built from data.js, then wired to Swiper.
// The page picks its topic from <body data-topic="N">.
(function () {
    var data = window.PATIENCE_DATA;
    var topicId = parseInt(document.body.getAttribute("data-topic"), 10);
    var topic = data.topics.filter(function (item) {
        return item.id === topicId;
    })[0];

    function addLanguageSpans(parent, texts) {
        [["english", "en"], ["hindi", "hi"], ["gujrati", "gj"]].forEach(function (pair) {
            var span = document.createElement("span");
            span.className = pair[0];
            span.textContent = texts[pair[1]];
            parent.appendChild(span);
        });
    }

    function buildPage() {
        var imageFolder = "./assets/images/" + topic.folder + "/";

        document.title = "Patience - " + topic.title.en;
        addLanguageSpans(document.getElementById("topicTitle"), topic.title);

        var photoWrapper = document.getElementById("photoSlides");
        var captionWrapper = document.getElementById("captionSlides");

        document.getElementById("photoSpacer").src = imageFolder + topic.slides[0].image;

        topic.slides.forEach(function (slide, index) {
            var photoSlide = document.createElement("div");
            photoSlide.className = "swiper-slide";
            var image = document.createElement("img");
            image.className = "photo-image";
            image.width = 863;
            image.height = 622;
            image.src = imageFolder + slide.image;
            image.alt = slide.alt || "";
            if (index > 0) {
                image.loading = "lazy";
            }
            photoSlide.appendChild(image);
            photoWrapper.appendChild(photoSlide);

            var captionSlide = document.createElement("div");
            captionSlide.className = "swiper-slide caption-slide";
            var captionText = document.createElement("p");
            captionText.className = "caption-text";
            addLanguageSpans(captionText, slide.caption);
            captionSlide.appendChild(captionText);
            captionWrapper.appendChild(captionSlide);
        });

        var arrowLabel = document.getElementById("pranamArrowLabel");
        if (arrowLabel) {
            addLanguageSpans(arrowLabel, data.common.pranamTitle);
        }

        var rail = document.getElementById("topicRail");
        data.topics.forEach(function (item) {
            var link = document.createElement("a");
            link.className = "topic-btn topic-" + item.id + (item.id === topic.id ? " is-active" : "");
            link.href = "./" + item.page;
            if (item.id === topic.id) {
                link.setAttribute("aria-current", "page");
            }

            var pill = document.createElement("span");
            pill.className = "topic-pill";
            var label = document.createElement("span");
            label.className = "topic-label";
            addLanguageSpans(label, item.title);
            pill.appendChild(label);

            var circle = document.createElement("span");
            circle.className = "topic-circle";
            var number = document.createElement("span");
            number.className = "topic-number";
            number.textContent = item.id;
            circle.appendChild(number);

            link.appendChild(pill);
            link.appendChild(circle);
            rail.appendChild(link);
        });
    }

    function startSliders() {
        var captionSlider = new Swiper(".caption-slider", {
            direction: "vertical",
            speed: 600,
            allowTouchMove: false
        });

        var photoSlider = new Swiper(".photo-slider", {
            direction: "vertical",
            speed: 600,
            grabCursor: true,
            resistance: true,
            resistanceRatio: 0.85,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            controller: {
                control: captionSlider
            }
        });

        var upButton = document.querySelector(".nav-up");
        var downButton = document.querySelector(".nav-down");

        var pranamArrow = document.querySelector(".pranam-arrow");
        var isLastTopic = topic.id === data.topics[data.topics.length - 1].id;

        function updateArrows() {
            upButton.classList.toggle("is-disabled", photoSlider.isBeginning);
            downButton.classList.toggle("is-disabled", photoSlider.isEnd);
            if (pranamArrow) {
                pranamArrow.classList.toggle("is-visible", isLastTopic && photoSlider.isEnd);
            }
        }

        upButton.addEventListener("click", function () {
            photoSlider.slidePrev();
        });

        downButton.addEventListener("click", function () {
            photoSlider.slideNext();
        });

        photoSlider.on("slideChange", function () {
            playSound(swiperAudio);
            updateArrows();
        });
        updateArrows();
    }

    // Touch screens have no hover: the first tap opens the pill, the second tap follows the link.
    function startTouchRail() {
        var rail = document.getElementById("topicRail");
        var buttons = rail.querySelectorAll(".topic-btn");

        function closeAll() {
            buttons.forEach(function (button) {
                button.classList.remove("is-open");
            });
        }

        rail.addEventListener("click", function (event) {
            var button = event.target.closest(".topic-btn");
            if (!button) {
                return;
            }
            // Touch screens have no hover: the first tap opens the pill, the second follows the link.
            if (window.matchMedia("(hover: none)").matches && !button.classList.contains("is-open")) {
                event.preventDefault();
                closeAll();
                button.classList.add("is-open");
                return;
            }
            if (!(event.ctrlKey || event.metaKey || event.shiftKey)) {
                event.preventDefault();
                playSoundThenNavigate(topicAudio, button.getAttribute("href"), 250);
            }
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest("#topicRail")) {
                closeAll();
            }
        });
    }

    buildPage();
    startTouchRail();
    startSliders();
    val(sessionStorage.getItem("lang") || "English");
})();
