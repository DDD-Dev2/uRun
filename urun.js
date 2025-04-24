// uBlock-compatible single script
(function () {
  // Popup: Ctrl + ~
  document.addEventListener("keydown", function (e) {
    if (e.key === "~" && e.ctrlKey) {
      var t = window.open("", "_blank", "width=500,height=300");
      var iframe = t.document.createElement("iframe");
      iframe.src = "//stunning-buttercream-ac72d8.netlify.app/popup.html";
      iframe.style.cssText = "width:100%; height:100%; border:none;";
      t.document.body.appendChild(iframe);
      t.document.title = "uRun";

      t.addEventListener("message", function (msg) {
        var data = msg.data.toString();
        if (data.startsWith("execute:")) {
          eval(data.replace("execute:", ""));
          t.close();
        }
      });
    }
  });

  // Prompt: Ctrl + Alt + E
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "e") {
      var code = prompt("Eval:");
      if (code && code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      if (code) eval(code);
    }
  });
})();
