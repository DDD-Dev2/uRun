document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "e") {
      let code = prompt("Eval:");
      if (code && code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      if (code) eval(code);
    }
  });
