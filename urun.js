/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.key === "`") { // Ctrl + `
    const choice = prompt(
      "Choose an action:\n" +
      "1 = Alert 'Hello World'\n" +
      "2 = Log current URL\n" +
      "3 = Change background to red\n" +
      "4 = Enter custom JavaScript"
    );

    switch (choice) {
      case "1":
        alert("Hello World!");
        break;
      case "2":
        console.log(window.location.href);
        break;
      case "3":
        document.body.style.background = "red";
        break;
      case "4":
        let code = prompt("Enter JavaScript:");
        if (code && code.startsWith("javascript:")) {
          code = code.substring(11);
        }
        if (code) eval(code);
        break;
      default:
        alert("Invalid choice.");
    }
  }
});
