class Games {
    constructor() {
        this.init();
    }
    init() {
        let a = document.createElement(`div`);
        a.innerText = `hello word`;
        document.body.appendChild(a);
    }
}
window.onload = () => {
    let game = new Games();
}
