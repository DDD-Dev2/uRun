/// execute_script.js
document.addEventListener("keyup", function (event) {
  if (event.ctrlKey && (event.key === "`" || event.keyCode === 192)) {
    let choice = prompt("Choose a script:\n1 - Alert\n2 - Log URL\n3 - Red BG\n4 - Custom");

    if (!choice) return;

    if (choice === "1") {
      eval(`alert("Hello World!");`);
    } else if (choice === "2") {
      eval(`console.log(window.location.href);`);
    } else if (choice === "3") {
      eval(`document.body.style.background = "red";`);
    } else if (choice === "4") {
      let custom = prompt("Enter JavaScript:");
      if (custom && custom.startsWith("javascript:")) {
        custom = custom.substring(11);
      }
      if (custom) eval(custom);
    } else {
      alert("Invalid choice.");
    }
  }
});
