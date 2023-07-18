let colors = [{
    name: "Torus Plum",
    hex: "#45283B",
    rgb: "rgb(249, 200, 14)"
}, {
    name: "Torus Magenta",
    hex: "#B01657",
    rgb: "rgb(249, 200, 14)"
}, {
    name: "Torus Yellow",
    hex: "#FFC700",
    rgb: "rgb(249, 200, 14)"
}, {
    name: "Torus Red",
    hex: "#F42534",
    rgb: "rgb(249, 200, 14)"
}, {
    name: "Torus Purple",
    hex: "#62225F",
    rgb: "rgb(249, 200, 14)"
}];
function generatePalette() {
    let app = document.querySelector('#app');
    let output = '';
    for (var i = 0; i < colors.length; i++) {
        output += '<div class="color-card"><div class="color" style="background:' + colors[i].hex + '"></div><div class="color-info"><p class="color-name">' + colors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + colors[i].hex + '">' + colors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + colors[i].rgb + '">' + colors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
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