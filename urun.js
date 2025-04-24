/// execute_script.js
document.addEventListener("keyup", function (event) {
  if (event.ctrlKey && (event.key === "`" || event.keyCode === 192)) {
    let code = prompt("Enter custom JavaScript:");
    if (code && code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    if (code) eval(code);
  }
});
