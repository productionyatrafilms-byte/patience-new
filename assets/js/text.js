// Fills page text from data.js: [data-text="common.<key>"] and [data-card="<topic id>"].
(function () {
    var data = window.PATIENCE_DATA;

    function fill(element, texts) {
        element.textContent = "";
        [["english", "en"], ["hindi", "hi"], ["gujrati", "gj"]].forEach(function (pair) {
            var span = document.createElement("span");
            span.className = pair[0];
            texts[pair[1]].split("\n").forEach(function (line, index) {
                if (index > 0) {
                    span.appendChild(document.createElement("br"));
                }
                span.appendChild(document.createTextNode(line));
            });
            element.appendChild(span);
        });
    }

    document.querySelectorAll("[data-text]").forEach(function (element) {
        fill(element, data.common[element.getAttribute("data-text")]);
    });

    document.querySelectorAll("[data-card]").forEach(function (element) {
        var id = parseInt(element.getAttribute("data-card"), 10);
        var topic = data.topics.filter(function (item) {
            return item.id === id;
        })[0];
        fill(element, topic.card);
    });

    val(sessionStorage.getItem("lang") || "English");
})();
