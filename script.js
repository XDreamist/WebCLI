import CCursor from "./src/cursor.js"
customElements.define('mouse-cursor', CCursor)
new CCursor


// import CTerimal from "./src/terminal.js";
// customElements.define('web-terminal', CTerimal)
// new CTerimal(document.getElementById("content-container"))


var terminal = document.getElementById("terminal");
var commandDatabase = {
    "youtube": "https://www.youtube.com",
    "discord": "https://discord.com/channels/@me",
    "github": "https://github.com/",
    "gpt": "https://chat.openai.com/",
    "pixabay": "https://pixabay.com/",
    "edit self": "https://github.com/XDreamist/XDreamist.gihub.io",
    "notion": "https://www.notion.so",
    "wazir": "https://wazirx.com/funds",
    "tradeview": "https://in.tradingview.com/",
    "show cv": window.location.href + "resume.html",
};
var terminalQueue = [];
var audio = new Audio("public/Retro Text.mp3");
audio.loop = true;


function addCommandLine() {
    var line = document.createElement("p");
    line.id = "command-line";
    setSymbol("> ", line);

    var commandLine = document.createElement("input");
    commandLine.type = "text";
    commandLine.id = "terminal-input";

    commandLine.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const command = commandLine.value.toLowerCase().trim();
            if (command) {
                commandLine.disabled = true;
                checkCommand(command);
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
  
function checkCommand(command) {
    if (command.startsWith("search ")) {

        var keyword = command.substring(7);
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

function showResponse(keyword, response_type) {
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

function addResponse(symbol, response) {
    var line = document.createElement("p");
    line.id = "command-line";
    setSymbol(symbol, line);

    var command = document.createElement("p");
    command.id = "command-response";

    line.appendChild(command);
    terminal.appendChild(line);

    var index = 0;
    audio.play();
    var typingEffect = setInterval(function() {
        command.textContent += response[index];
        index++;

        if (index >= response.length) {
            clearInterval(typingEffect);
            processNext();
            audio.pause();
        }
    }, 15);
}

function setSymbol(symbol, parent) {
    var space = document.createElement("a");
    space.id = "command-symbol";
    space.textContent = symbol;

    parent.appendChild(space);
}

function processNext() {
    if (terminalQueue.length > 0) {
        var nextElement = terminalQueue.shift();
        if (nextElement.symbol == '>') {
            addCommandLine();
        }
        else {
        addResponse(nextElement.symbol, nextElement.response);
        }
    }
}

window.onload = function () {
    var canvas = document.getElementById("curvatureCanvas");
    var ctx = canvas.getContext("2d");

    // Set canvas size to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Curvature parameters
    var curvature = 100;

    // Function to apply curvature effect
    function applyCurvature() {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (var y = 0; y < canvas.height; y++) {
            for (var x = 0; x < canvas.width; x++) {
                var index = (y * canvas.width + x) * 4;

                var dx = x - canvas.width / 2;
                var dy = y - canvas.height / 2;
                var distance = Math.sqrt(dx * dx + dy * dy);

                var amount = distance / curvature;
                var offset = Math.sin(amount) * curvature;

                var newIndex = ((y + offset) * canvas.width + x) * 4;

                if (newIndex >= 0 && newIndex < data.length) {
                    data[index] = data[newIndex]; // Red
                    data[index + 1] = data[newIndex + 1]; // Green
                    data[index + 2] = data[newIndex + 2]; // Blue
                    data[index + 3] = data[newIndex + 3]; // Alpha
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    // Apply curvature effect
    applyCurvature();

    // Reapply curvature effect on window resize
    window.onresize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        applyCurvature();
    };
};

addResponse('<', "WELCOME TO WARP SYSTEMS CONTROL");
terminalQueue.push({ symbol: '<', response: "TYPE 'HELP' FOR MORE COMMANDS" });
terminalQueue.push({ symbol: '>'});
