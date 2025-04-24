/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    const options = [
      { label: "1. Alert Hello World", code: `alert("Hello World!");` },
      { label: "2. Log current URL", code: `console.log(window.location.href);` },
      { label: "3. Change background to red", code: `document.body.style.background = "red";` },
      { label: "4. Enter custom JavaScript", code: "CUSTOM" }
    ];

    const choice = prompt(
      "Choose a script to run:\n" +
      options.map(o => o.label).join("\n")
    );

    const selected = options.find(o => o.label.startsWith(choice));
    if (selected) {
      if (selected.code === "CUSTOM") {
        let customCode = prompt("Enter your custom JavaScript:");
        if (customCode.startsWith("javascript:")) {
          customCode = customCode.substring(11);
        }
        eval(customCode);
      } else {
        eval(selected.code);
      }
    } else {
      alert("Invalid selection.");
    }
  }
});
