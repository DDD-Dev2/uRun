// combined_urun_execute.js
(function () {
  'use strict';

  // === urun.js ===
  document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
      var t = window.open("", "_blank", "width=500,height=300");
      var iframe = t.document.createElement("iframe");
      iframe.src = "//stunning-buttercream-ac72d8.netlify.app/popup.html";
      iframe.style.cssText = "width:100%; height:100%; border:none;";
      t.document.body.appendChild(iframe);
      t.document.title = "uRun";

      t.addEventListener("message", function (e) {
        if (e.data.toString().startsWith("execute:")) {
          eval(e.data.toString().replace("execute:", ""));
          t.close();
        }
      });
    }
  });

  // === execute_script.js ===
  window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
      let code = prompt("Eval:");
      if (code && code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      if (code) eval(code);
    }
  });
})();
