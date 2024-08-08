export default class CCommand {
    constructor(parent, type, data) {
        this.parent = parent;
        this.type = type;

        if (type === "open" || type === "response") this.data = data;
        else this.data = data.toUpperCase();

        this.line = document.createElement("p");
        this.line.id = "command-line";

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
        let content;
        switch(this.type) {
            case "input": {
                this.setSymbol("> ");

                content = document.createElement("input");
                content.type = "text";
                content.id = "terminal-input";
            
                content.addEventListener("keypress", (event) => {
                    if (event.key === "Enter") {
                        const command = content.value;
                        if (command) {
                            content.disabled = true;
                            this.parent.processCommand("input", command);

                            content.remove();

                            content = document.createElement("p");
                            content.id = "command-response";
                            content.textContent = command;

                            this.line.appendChild(content);
                        }
                    }
                });
            
                content.addEventListener("input", () => {
                    content.value = content.value.toUpperCase();
                });
            
                setTimeout(() => content.focus(), 10);

                break;
            }
            case "response": {
                this.setSymbol("< ");

                const response = `${ this.data }`;
                let buffer = "";

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    buffer += response[index];
                    content.innerHTML = buffer;
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

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += output[index];
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

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += output[index];
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

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += output[index];
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

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("confused", "complete");
                    }
                }, 15);

                break;
            }
        }

        this.line.appendChild(content);
        this.parent.appendChild(this.line);
    }
}