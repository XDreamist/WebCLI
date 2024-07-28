export default class CCursor extends HTMLElement {
    constructor() {
        super();
        
        this.position = {
            x: 0,
            y: 0
        }

        this.id = "rectCursor";
        this.applyStyles();

        document.body.appendChild(this);
        
        document.addEventListener("mousemove", (event) => this.mouseMove(event));
    }

    mouseMove(event) {
        this.position.x = event.clientX;
        this.position.y = event.clientY;

        this.style.left = this.position.x - (this.clientWidth / 2) + "px";
        this.style.top = this.position.y - (this.clientHeight / 2 ) + "px";
    }

    applyStyles() {
        this.style.position = "absolute";
        this.style.width = "10px";
        this.style.height = "20px";
        this.style.backgroundColor = "#326c20";
        this.style.pointerEvents = "none";
        this.style.zIndex = 2;
    }
}