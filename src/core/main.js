import CCursor from "./cursor.js"
customElements.define('mouse-cursor', CCursor)
new CCursor


import CTerminal from "./terminal.js";
customElements.define('web-terminal', CTerminal)
document.getElementById("content-container").appendChild(new CTerminal())