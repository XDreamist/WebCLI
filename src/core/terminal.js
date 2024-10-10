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
        overflow: auto;
        scrollbar-width: none`;

        this.commandDatabase = commandDatabase;
        this.commandHistory = [];
        this.currentUserInput = null;

        this.bot = new Bot();

        new CCommand(this, "response", "WELCOME! TYPE 'HELP' FOR COMMANDS");

        this.historyIndex = 0;
        this.historyUpdater = 0;
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                if (this.historyUpdater < this.commandHistory.length) this.historyUpdater++;
                this.historyIndex = this.commandHistory.length - this.historyUpdater;
                if (this.commandHistory[this.historyIndex]) this.currentUserInput.content.value = this.commandHistory[this.historyIndex];
            }
            if (event.key === "ArrowDown") {
                if (this.historyUpdater > 0) this.historyUpdater--;
                this.historyIndex = this.commandHistory.length - this.historyUpdater;
                if (this.commandHistory[this.historyIndex]) this.currentUserInput.content.value = this.commandHistory[this.historyIndex];
            }
        });
    }

    setBlankInput() {
        this.currentUserInput = new CCommand(this, "input", "");
    }
    
    processCommand(type, command) {
        const lCommand = command.toLowerCase().trim();

        switch (type) {
            case "input":
                this.commandHistory.push(command);
                this.historyUpdater = 0;
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
                    this.setBlankInput();
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
                const response = await this.bot.sendMessage(command);
                if (response !== null) {
                    new CCommand(this, "bot-response", response.toUpperCase());
                }
                else {
                    new CCommand(this, "response", "UHH!! I'M TRYING TO PROCESS THAT.");
                }
            }
        }
    }

    clear() {
        this.innerHTML = '';
        this.setBlankInput();
    }

    search(command) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
        this.setBlankInput();
    }

    open(data) {
        window.open(data, "_blank");
        this.setBlankInput();
    }

    help() {
        const helpText = `
        AVAILABLE COMMANDS:<br>
        • SEARCH &lt;QUERY&gt;<br>
        • SHOW CV<br>
        • DOWNLOAD CV<br>
        • SHOW GITHUB<br>
        • PLAY PGOU<br>
        • PLAY SCOUTRUN<br>
        • PLAY SANDSURFERS<br>
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

        this.setBlankInput();
    }

    
}
