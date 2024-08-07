import CCommand from "./command.js";
import { commandDatabase } from "./data.js";

export default class CTerminal extends HTMLElement {
    constructor() {
        super();

        this.style.cssText = `
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        border: 5px solid #326c20;
        border-radius: 10px;
        padding: 10px;
        row-gap: 5px;`;

        this.commandDatabase = commandDatabase;

        new CCommand(this, "response", "WELCOME TO WARP SYSTEMS CONTROL")
    }
    
    processCommand(type, command) {
        const lCommand = command.toLowerCase().trim();

        switch (type) {
            case "input":
                this.checkInput(lCommand);
                break;
            case "search":
                this.search(lCommand);
                break;
            case "open":
                this.open(lCommand);
                break;
            default:
                if (lCommand === "complete") {
                    new CCommand(this, "input", "");
                }
                else {
                    console.warn(`Unknown command type: ${type}`);
                }
                break;
        }
    }

    checkInput(command) {
        if (command.startsWith("search ")) {
            const keyword = command.slice(7);
            new CCommand(this, "search", keyword);
        }
        else if (command === "clear") {
            this.clear();
        }
        else if (command === "help") {
            this.help();
        }
        else {
            if (command in this.commandDatabase) {
                new CCommand(this, "open", command);
            } else {
                new CCommand(this, "invalid", command);
            }
        }
    }

    clear() {
        this.innerHTML = '';
        new CCommand(this, "input", "");
    }

    search(command) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
        new CCommand(this, "input", "");
    }

    open(command) {
        window.open(this.commandDatabase[command], "_blank");
        new CCommand(this, "input", "");
    }

    help() {
        const helpText = `
        Available Commands:
        - search <query>: Search the web for the specified query.
        - clear: Clear the terminal screen.
        - help: Display this help message.
                
        For more information, consult the relevant documentation.
        `;
        
        new CCommand(this, "response", helpText);
    }
}