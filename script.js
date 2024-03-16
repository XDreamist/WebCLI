
document.addEventListener("DOMContentLoaded", function () {
    const rectangleCursor = document.getElementById("rectCursor");

    document.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        
        rectangleCursor.style.left = x - (rectangleCursor.clientWidth / 2) + "px";
        rectangleCursor.style.top = y - (rectangleCursor.clientHeight / 2 ) + "px";
    });
});

    var commandDatabase = {
        "youtube": "https://www.youtube.com",
        "discord": "https://discord.com/channels/@me",
        "github": "https://github.com/",

      };
  
      document.getElementById("terminal-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          var command = event.target.value.toLowerCase().trim();
          
          if (command.startsWith("google ")) {
            var keyword = command.substring(7);
            
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(keyword);
          } else {
            if (commandDatabase.hasOwnProperty(command)) {
              window.location.href = commandDatabase[command];
            } else {
              alert("Command not recognized.");
            }
          }
        }
      });

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
