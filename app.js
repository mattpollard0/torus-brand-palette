let torusColors = [{
    name: "Torus Plum",
    hex: "#44273A",
    rgb: "rgb(68, 39, 58)"
}, {
    name: "Torus Magenta",
    hex: "#B01657",
    rgb: "rgb(176, 22, 87)"
}, {
    name: "Torus Yellow",
    hex: "#FFC700",
    rgb: "rgb(255, 199, 0)"
}, {
    name: "Torus Red",
    hex: "#F42534",
    rgb: "rgb(244, 37, 52)"
}, {
    name: "Torus Purple",
    hex: "#612365",
    rgb: "rgb(97, 35, 101)",
    {
    name: "Torus Blue",
    hex: "#3BB0C9",
    rgb: "rgb(59, 176, 201)"
}, {
    name: "Torus Pink",
    hex: "#E72176",
    rgb: "rgb(231, 115, 118)"
}, {
    name: "Torus Green",
    hex: "#49B8A9",
    rgb: "rgb(73, 184, 169)"
}, {
    name: "Torus Orange",
    hex: "#EA7305",
    rgb: "rgb(234, 115, 5)"
}];
function generatePalette() {
    let app = document.querySelector('#app');
    let output = '';
    for (var i = 0; i < torusColors.length; i++) {
        output += '<div class="color-card"><div class="color" style="background:' + torusColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + torusColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + torusColors[i].hex + '">' + torusColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + torusColors[i].rgb + '">' + torusColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    app.innerHTML = output;
    var colorCards = document.getElementsByClassName("color-hex");
    var rgbCodes = document.getElementsByClassName("color-rgb");
    for (var i = 0; i < colorCards.length; i++) {
        colorCards[i].addEventListener('click', copyAttr, false);
        rgbCodes[i].addEventListener('click', copyAttr, false);
    }
    tippy('[title]', {
        placement: 'right',
        animation: 'scale',
        arrow: true
    });
}
function copyAttr() {
    var attribute = this.getAttribute("data-clipboard-text");
    var textarea = document.createElement("textarea");
    textarea.textContent = attribute;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        swal(attribute, 'Copied to clipboard!', 'success');
        // alert(attribute + ' copied to clipboard');
        return document.execCommand("copy");
    } catch (ex) {
        alert("Copy to clipboard failed.", ex);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}
;
generatePalette();
