
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
    "": "",

};
var terminalQueue = [];
var audio = new Audio("ref/Retro Text.mp3");
audio.loop = true;

document.addEventListener("DOMContentLoaded", function () {
    const rectangleCursor = document.getElementById("rectCursor");

    document.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        
        rectangleCursor.style.left = x - (rectangleCursor.clientWidth / 2) + "px";
        rectangleCursor.style.top = y - (rectangleCursor.clientHeight / 2 ) + "px";
    });
});

function addCommandLine() {
    var line = document.createElement("p");
    line.id = "command-line";
    setSymbol("> ", line);

    var commandLine = document.createElement("input");
    commandLine.type = "text";
    commandLine.id = "terminal-input";

    commandLine.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            if (command = commandLine.value.toLowerCase().trim()) {
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

/*document.addEventListener('DOMContentLoaded', function () {
    // Get the source div and target canvas elements
    var sourceDiv = document.getElementById('comp');
    var targetCanvas = document.getElementById('bg');
    var context = targetCanvas.getContext('2d');

    // Set canvas dimensions to match the source div
    targetCanvas.width = sourceDiv.clientWidth;
    targetCanvas.height = sourceDiv.clientHeight;

    // Draw the content of the source div onto the canvas
    context.drawWindow(window, sourceDiv.offsetLeft, sourceDiv.offsetTop, sourceDiv.clientWidth, sourceDiv.clientHeight, 'rgba(255,255,255,0)');

    // Get pixel data from the canvas
    var imageData = context.getImageData(0, 0, targetCanvas.width, targetCanvas.height);

    // Use the pixel data as needed
    console.log(imageData);
});

var bg = document.getElementById('cop'),
    c = document.getElementById('c'),
    ctx = c.getContext('2d');
    //src = "https://i.kinja-img.com/gawker-media/image/upload/t_original/fwf4rfhsob5wnkwlrwzl.jpg";
    src = "https://lumiere-a.akamaihd.net/v1/images/r_thorragnarok_header_nowplaying_47d36193.jpeg?region=0,0,2048,680";

var img = new Image();
img.crossOrigin = "Anonymous";
img.onload = function() {
    var w = this.width,
        h = this.height;
    
    bg.width = w;
    bg.height = h;
    bg.style.marginLeft = -w/2 + 'px';  
    bg.style.marginTop = -h/2 + 'px';

    bg.getContext('2d').drawImage(img, 0, 0, w, h);
    
    window.addEventListener("mousemove", distortion);
    window.addEventListener("touchmove", distortion);

}
img.src = src;

function distortion(e) {
    var cx = (e.touches ? e.touches[0].clientX : e.clientX),
        cy = (e.touches ? e.touches[0].clientY : e.clientY),
        size = 200,
        zoom = 1;
    
    c.width = size;
    c.height = size;
    c.style.left = cx - size / 2 + 'px';
    c.style.top = cy - size / 2 + 'px';
   
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(
        bg, 
        cx - bg.offsetLeft - .5 * size / zoom, 
        cy - bg.offsetTop - .5 * size / zoom,
        size / zoom,
        size / zoom, 
        0,
        0,
        size,
        size
    );
    
    var imgData = ctx.getImageData(0, 0, size, size);
        pixels = imgData.data,
        pixelsCopy = [], index = 0, h = size, w = size;
    
    for (var i = 0; i <= pixels.length; i+=4) {
        pixelsCopy[index] = [pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]];
        index++;
    }
    
    var result = fisheye(pixelsCopy, w, h);
    
    for(var i = 0; i < result.length; i++) {
        index = 4*i;
        if (result[i] != undefined) {
            pixels[index + 0] = result[i][0];
            pixels[index + 1] = result[i][1];
            pixels[index + 2] = result[i][2]; 
            pixels[index + 3] = result[i][3];
        }
    }
    
    ctx.putImageData(imgData, 0, 0);
}

function fisheye(srcpixels, w, h) {

    var dstpixels = srcpixels.slice();            
   
    for (var y = 0; y < h; y++) {                                

        var ny = ((2*y)/h)-1;                        
        var ny2 = ny*ny;                                

        for (var x = 0; x < w; x++) {                            

            var nx = ((2*x)/w)-1;                    
            var nx2 = nx*nx;
            var r = Math.sqrt(nx2+ny2);                

            if (0.0 <= r && r <= 1.0) {                            
                var nr = Math.sqrt(1.0-r*r);            
                nr = (r + (1.0-nr)) / 2.0;

                if (nr <= 1.0) {
                    
                    var theta = Math.atan2(ny,nx);         
                    var nxn = nr*Math.cos(theta);        
                    var nyn = nr*Math.sin(theta);        
                    var x2 = parseInt(((nxn+1)*w)/2);        
                    var y2 = parseInt(((nyn+1)*h)/2);        
                    var srcpos = parseInt(y2*w+x2);            
                    if (srcpos >= 0 & srcpos < w*h) {
                        dstpixels[parseInt(y*w+x)] = srcpixels[srcpos];    
                    }
                }
            }
        }
    }
    return dstpixels;
} 




function distortion2() {
    var cx = (c.offsetLeft),
        cy = (c.offsetTop),
        size = c.offsetWidth,
        zoom = 1;
    
    c.width = size;
    c.height = size;
    //c.style.left = cx - size / 2 + 'px';
    //c.style.top = cy - size / 2 + 'px';
   
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(
        bg, 
        // cx - bg.offsetLeft - .5 * size / zoom, 
        // cy - bg.offsetTop - .5 * size / zoom,  
        cx - bg.offsetLeft - .5 * size/8 / zoom, 
        cy - bg.offsetTop - .5 * size/8 / zoom,
        size / zoom,
        size / zoom, 
        0,
        0,
        size,
        size
    );

    
    var imgData = ctx.getImageData(0, 0, size, size);
        pixels = imgData.data,
        pixelsCopy = [], index = 0, h = size, w = size;
    
    for (var i = 0; i <= pixels.length; i+=4) {
        pixelsCopy[index] = [pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]];
        index++;
    }
    
    var result = fisheye(pixelsCopy, w, h);
    
    for(var i = 0; i < result.length; i++) {
        index = 4*i;
        if (result[i] != undefined) {
            pixels[index + 0] = result[i][0];
            pixels[index + 1] = result[i][1];
            pixels[index + 2] = result[i][2]; 
            pixels[index + 3] = result[i][3];
        }
    }
    
    ctx.putImageData(imgData, 0, 0);
}*/
