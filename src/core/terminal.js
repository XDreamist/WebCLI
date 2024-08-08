import Bot from "./bot.js";
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
        row-gap: 5px;
        overflow: clip;`;

        this.commandDatabase = commandDatabase;

        this.bot = new Bot();

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
                this.open(command);
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

    async checkInput(command) {
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
        else if (command === "download cv") {
            this.download();
        }
        else {
            if (command in this.commandDatabase) {
                new CCommand(this, "open", this.commandDatabase[command]);
            } else {
                // const botInput = document.getElementsByClassName("bpComposerInput");
                // console.log(botInput);
                // new CCommand(this, "invalid", command);
                const response = await this.bot.sendMessage(command);
                new CCommand(this, "response", response.toUpperCase());
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

    open(data) {
        window.open(data, "_blank");
        new CCommand(this, "input", "");
    }

    help() {
        const helpText = `
        AVAILABLE COMMANDS:<br>
        • SEARCH &lt;QUERY&gt;<br>
        • SHOW CV<br>
        • DOWNLOAD CV<br>
        • SHOW REPO<br>
        • CLEAR<br>
        • HELP<br>
        <br>
        FOR MORE INFORMATION, CONSULT THE RELEVANT DOCUMENTATION.
        `;
        
        new CCommand(this, "response", helpText);
    }

    download() {
        const cvUrl = this.commandDatabase["download cv"][0];
        const a = document.createElement('a');
        a.href = cvUrl;
        a.download = 'Umesh P.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        new CCommand(this, "input", "");
    }
}