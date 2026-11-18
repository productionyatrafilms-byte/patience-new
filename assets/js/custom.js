
// language change js
let currentLang = sessionStorage.getItem("lang");
if (!currentLang) {
    val("English");
} else {
    val(currentLang);
}

function val(selectedLang) {
    sessionStorage.setItem("lang", selectedLang);

    let English = document.getElementById("en");
    let Hindi = document.getElementById("hi");
    let Gujrati = document.getElementById("gu");

    if (selectedLang === "English") {

        document.getElementById("body");
        $(".english").show();
        $(".hindi, .gujrati").hide();

        English.checked = true;
        Hindi.checked = false;
        Gujrati.checked = false;
    }

    if (selectedLang === "Hindi") {
        document.getElementById("body");
        $(".hindi").show();
        $(".english, .gujrati").hide();
        English.checked = false;
        Hindi.checked = true;
        Gujrati.checked = false;
    }

    if (selectedLang === "Gujrati") {
        document.getElementById("body");
        $(".gujrati").show();
        $(".english, .hindi").hide();
        English.checked = false;
        Hindi.checked = false;
        Gujrati.checked = true;
    }
}
// ---------- Sounds ----------
// One Audio object per sound, restarted on every play.
function playSound(audio) {
    try {
        audio.currentTime = 0;
        var p = audio.play();
        if (p !== undefined) {
            p.catch(function () {});
        }
    } catch (e) {}
}

// Leaving the page on the click kills the sound before it starts,
// so navigation waits a moment.
function playSoundThenNavigate(audio, href, delayMs) {
    playSound(audio);
    setTimeout(function () {
        window.location.href = href;
    }, delayMs || 150);
}

var topicAudio = new Audio("./assets/audio/topic.mp3");
var popAudio = new Audio("./assets/audio/pop.mp3");

// Slider sound
var swiperAudio = new Audio("./assets/audio/swiper.mp3");

// Language toggle: only on a real click of E / H / G
var langAudio = {
    English: new Audio("./assets/audio/Eng.mpeg"),
    Hindi: new Audio("./assets/audio/Hin.mpeg"),
    Gujrati: new Audio("./assets/audio/Guj.mpeg"),
};
document.querySelectorAll('#language input[type="radio"]').forEach(function (input) {
    input.addEventListener("click", function () {
        playSound(langAudio[input.value]);
    });
});

// Back and home buttons: pop, then follow the link
document.querySelectorAll(".back-btn, .home-btn, .home-pill").forEach(function (el) {
    el.addEventListener("click", function (event) {
        var href = el.getAttribute("href");
        if (href && !(event.ctrlKey || event.metaKey || event.shiftKey)) {
            event.preventDefault();
            playSoundThenNavigate(popAudio, href);
        } else {
            playSound(popAudio);
        }
    });
});
