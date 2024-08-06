export default class CCommand {
    constructor(parent, type, data) {
        this.parent = parent;
        this.type = type;
        this.data = data;

        this.line = document.createElement("p");
        this.line.id = "command-line";

        this.addContent();
    }

    setSymbol(symbol) {
        const space = document.createElement("a");
        space.id = "command-symbol";
        space.textContent = symbol;
    
        this.line.appendChild(space);
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
                        const command = content.value.toLowerCase().trim();
                        if (command) {
                            content.disabled = true;
                            this.parent.processCommand("input", command);
                        }
                    }
                });
            
                content.addEventListener("input", () => {
                    content.value = content.value.toUpperCase();
                });
            
                setTimeout(() => {
                    content.focus();
                }, 10);

                break;
            }
            case "response": {
                this.setSymbol("< ");

                const response = `${ this.data }`;

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += response[index];
                    index++;
            
                    if (index >= response.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("response", "done");
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
                        this.parent.processCommand("invalid", "done");
                    }
                }, 15);

                break;
            }
            case "idle": {
                this.setSymbol("v ");
                break;
            }
            case "search": {
                this.setSymbol("Q ");

                const output = `SEARCHING '${ this.data }....'`;

                content = document.createElement("p");
                content.id = "command-response";
            
                let index = 0;
                const typingEffect = setInterval(() => {
                    content.textContent += output[index];
                    index++;
            
                    if (index >= output.length) {
                        clearInterval(typingEffect);
                        this.parent.processCommand("invalid", "done");
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
                        this.parent.processCommand("confused", "done");
                    }
                }, 15);

                break;
            }
        }

        this.line.appendChild(content);
        this.parent.appendChild(this.line);
    }

    addCommandLine() {
        this.setSymbol("> ", line);
    
        const commandLine = document.createElement("input");
        commandLine.type = "text";
        commandLine.id = "terminal-input";
    
        commandLine.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const command = commandLine.value.toLowerCase().trim();
                if (command) {
                    commandLine.disabled = true;
                    this.checkCommand(command);
                }
            }
        });
    
        commandLine.addEventListener("input", function() {
            this.value = this.value.toUpperCase();
        });
    
        line.appendChild(commandLine);
        this.parent.appendChild(line);
    
        setTimeout(function() {
            commandLine.focus();
        }, 10);
    }
      
    checkCommand(command) {
        if (command.startsWith("search ")) {
    
            const keyword = command.substring(7);
            window.open("https://www.google.com/search?q=" + encodeURIComponent(keyword), "_blank");
    
            showResponse(keyword, "search");
            terminalQueue.push({ symbol: '>'});
        } else {
            if (commandDatabase.hasOwnProperty(command)) {
                window.open(commandDatabase[command], "_blank");
                showResponse(command, "open");
                terminalQueue.push({ symbol: '>'});
            } else {
                showResponse(command, "invalid");
                terminalQueue.push({ symbol: '>'});
            }
        }
    }
    
    showResponse(keyword, response_type) {
        keyword = keyword.toUpperCase();
        switch (response_type) {
            case "search":
                addResponse("< ", "SEARCHING " + keyword + "....");
                break;
            case "open":
                addResponse("< ", "OPENING " + keyword + "....");
                break;
            case "invalid":
                addResponse("! ", "INVALID COMMAND '" + keyword + "'");
                break;
            default:
                addResponse(": ", "Uh!!!");
                break;
        }
    }
    
    addResponse(response) {
        const command = document.createElement("p");
        command.id = "command-response";
    
        line.appendChild(command);
        terminal.appendChild(line);
    
        const index = 0;
        audio.play();
        const typingEffect = setInterval(function() {
            command.textContent += response[index];
            index++;
    
            if (index >= response.length) {
                clearInterval(typingEffect);
                processNext();
                audio.pause();
            }
        }, 15);
    }
}