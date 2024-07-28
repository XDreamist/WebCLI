export default class CTerimal extends HTMLElement {
    constructor(parent) {
        super();
        parent.appendChild(this);

        addResponse('<', "WELCOME TO WARP SYSTEMS CONTROL");
        terminalQueue.push({ symbol: '<', response: "TYPE 'HELP' FOR MORE COMMANDS" });
        terminalQueue.push({ symbol: '>'});
    }
    
    processNext() {
        if (terminalQueue.length > 0) {
            const nextElement = terminalQueue.shift();
            if (nextElement.symbol == '>') {
                addCommandLine();
            }
            else {
            addResponse(nextElement.symbol, nextElement.response);
            }
        }
    }
}