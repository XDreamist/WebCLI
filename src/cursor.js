export default class CCursor extends HTMLElement {
    constructor() {
        super();
        
        this.position = {
            x: 0,
            y: 0
        }

        this.style.cssText = `
        position: absolute;
        width: 10px;
        height: 20px;
        background-color: #326c20;
        pointer-events: none;
        z-index: 2;`;

        document.body.appendChild(this);
        
        document.addEventListener("mousemove", (event) => this.mouseMove(event));
    }

    mouseMove(event) {
        this.position.x = event.clientX;
        this.position.y = event.clientY;

        this.style.left = `${this.position.x - (this.clientWidth / 2)}px`;
        this.style.top = `${this.position.y - (this.clientHeight / 2 )}px`;
    }

    applyStyles() {

    }
}