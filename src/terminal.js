import CCommand from "./command.js";

export default class CTerminal extends HTMLElement {
    constructor() {
        super();

        this.style.cssText = `
        height: 100%;
        width: 100%;
        border: 5px solid #326c20;
        border-radius: 10px;
        padding: 10px;`;

        new CCommand(this, "response", "WELCOME TO WARP SYSTEMS CONTROL")
    }
    
    processCommand(type, command) {
        if (command === "done") {
            new CCommand(this, "input", "");
        }
        if (type === "input") {
            this.checkInput(command);
        }
    }

    checkInput() {
        console.log('afaf')
    }
}