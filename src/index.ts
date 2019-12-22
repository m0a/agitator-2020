console.log('hello ts');

const el = document.querySelector("#app");
if (el) {
    const anchr = document.createElement("a");
    anchr.text = "hello typescript";
    anchr.href = "https://www.typescriptlang.org/play/";
    el.appendChild(anchr)
}