/// execute_script.js
document.addEventListener("keyup", function (event) {
  if (event.ctrlKey && event.key === "`") {
    var choice = prompt("1 = Alert\n2 = Log URL\n3 = Red BG\n4 = Custom");

    if (choice === "1") {
      alert("Hello World!");
    } else if (choice === "2") {
      console.log(window.location.href);
    } else if (choice === "3") {
      document.body.style.background = "red";
    } else if (choice === "4") {
      var code = prompt("Enter JavaScript:");
      if (code && code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      if (code) eval(code);
    }
  }
});
