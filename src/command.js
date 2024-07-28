export default class CCommand {
    constructor(parent, type, data) {
        this.parent = parent;
        this.type = type;
        this.data = data;
    }

    addCommandLine() {
        const line = document.createElement("p");
        line.id = "command-line";
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
        terminal.appendChild(line);
    
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
    
    addResponse(symbol, response) {
        const line = document.createElement("p");
        line.id = "command-line";
        setSymbol(symbol, line);
    
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
    
    setSymbol(symbol, parent) {
        const space = document.createElement("a");
        space.id = "command-symbol";
        space.textContent = symbol;
    
        parent.appendChild(space);
    }
}