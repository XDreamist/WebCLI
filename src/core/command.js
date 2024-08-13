export default class CCommand {
    constructor(parent, type, data) {
        this.parent = parent;
        this.type = type;

        if (type === "open" || type === "response") this.data = data;
        else this.data = data.toUpperCase();

        this.line = document.createElement("p");
        this.line.id = "command-line";

        this.content = null;
        this.addContent();
    }

    setSymbol(symbol) {
        const space = document.createElement("span");
        space.id = "command-symbol";
        space.textContent = symbol;
    
        this.line.appendChild(space);
    }

    createTypingEffect(contentElement, text, callback) {
        let index = 0;
        const typingEffect = setInterval(() => {
            contentElement.textContent += text[index];
            index++;
            if (index >= text.length) {
                clearInterval(typingEffect);
                if (callback) callback();
            }
        }, 15);
    }

    addContent() {
        switch(this.type) {
            case "input": {
                this.setSymbol("> ");

                this.content = document.createElement("input");
                this.content.type = "text";
                this.content.id = "terminal-input";
            
                this.content.addEventListener("keypress", (event) => {
                    if (event.key === "Enter") {
                        const command = this.content.value;
                        if (command) {
                            this.content.disabled = true;
                            this.parent.processCommand("input", command);

                            this.content.remove();

                            this.content = document.createElement("p");
                            this.content.id = "command-response";
                            this.content.textContent = command;

                            this.line.appendChild(this.content);
                        }
                    }
                });
            
                this.content.addEventListener("input", () => {
                    this.content.value = this.content.value.toUpperCase();
                });
            
                setTimeout(() => this.content.focus(), 10);

                break;
            }
            case "response": {
                this.setSymbol("< ");

                const response = `${ this.data }`;
                let buffer = "";

                this.content = document.createElement("p");
                this.content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    buffer += response[index];
                    this.content.innerHTML = buffer;
                    index++;
            
                    if (index >= response.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("response", "complete");
                    }
                }, 15);

                break;
            }
            case "invalid": {
                this.setSymbol("! ");

                const output = `INVALID COMMAND '${ this.data }'`;

                this.content = document.createElement("p");
                this.content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    this.content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("invalid", "complete");
                    }
                }, 15);

                break;
            }
            case "idle": {
                this.setSymbol("v ");
                break;
            }
            case "search": {
                this.setSymbol("< ");

                const output = `SEARCHING '${ this.data }'....`;

                this.content = document.createElement("p");
                this.content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    this.content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("search", this.data);
                    }
                }, 15);

                break;
            }
            case "open": {
                this.setSymbol("< ");

                const output = `${ this.data[1] }`;

                this.content = document.createElement("p");
                this.content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    this.content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("open", this.data[0]);
                    }
                }, 15);

                break;
            }
            default: {
                this.setSymbol(": ");

                const output = `Uhh!!!'`;

                this.content = document.createElement("p");
                this.content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    this.content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("confused", "complete");
                    }
                }, 15);

                break;
            }
        }

        this.line.appendChild(this.content);
        this.parent.appendChild(this.line);
    }
}