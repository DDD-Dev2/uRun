/// urun.js
document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
        var t = window.open("", "_blank", "width=300,height=900");
        var e = t.document.createElement("iframe");
        (e.src = "//stunning-buttercream-ac72d8.netlify.app/popup.html"),
            (e.style.cssText = "width:100%; height:100%; border:none;"),
            t.document.body.appendChild(e),
            t.document.body.style.background = "black";
            t.document.title = "uRun",
            t.addEventListener("message", function (e) {
                e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
            });
    }
});
