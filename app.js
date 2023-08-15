let colors = {
    torus: [
        {
            name: "Torus Plum",
            hex: "#45283b",
            rgb: "rgb(69, 40, 59)",
            cmyk: "cmyk(65, 81, 45, 56)",
            pantone: "P 78-16 C"
        }, {
            name: "Torus Magenta",
            hex: "#B01657",
            rgb: "rgb(176, 22, 87)",
            cmyk: "cmyk(22, 99, 36, 14)",
            pantone: "225 C"
        }
    ],
    hms: [
        {
            name: "HMS Primary",
            hex: "#003A60",
            rgb: "rgb(00, 58, 96)",
            pantone: "965u"
        }
    ]
};

let torusColors = [{
    name: "Torus Plum",
    hex: "#45283b",
    rgb: "rgb(69, 40, 59)",
    cmyk: "cmyk(65, 81, 45, 56)",
    pantone: "P 78-16 C"
}, {
    name: "Torus Magenta",
    hex: "#B01657",
    rgb: "rgb(176, 22, 87)",
    cmyk: "cmyk(22, 99, 36, 14)",
    pantone: "225 C"
}, {
    name: "Torus Yellow",
    hex: "#FFC700",
    rgb: "rgb(255, 199, 0)",
    cmyk: "cmyk(0, 24, 93, 0)",
    pantone: "810 C"
}, {
    name: "Torus Red",
    hex: "#F42534",
    rgb: "rgb(244, 37, 52)",
    cmyk: "cmyk(0, 92, 74, 0)",
    pantone: "Red 032 C"
}, {
    name: "Torus Purple",
    hex: "#612365",
    rgb: "rgb(97, 35, 101)",
    cmyk: "cmyk(70, 100, 29, 17)",
    pantone: "260 C"
}, {
    name: "Torus Blue",
    hex: "#3BB0C9",
    rgb: "rgb(59, 176, 201)",
    cmyk: "cmyk(69, 10, 18, 0)",
    pantone: "631 C"
}, {
    name: "Torus Pink",
    hex: "#E72176",
    rgb: "rgb(231, 115, 118)",
    cmyk: "cmyk(3, 97, 24, 0)",
    pantone: "213 C"
}, {
    name: "Torus Green",
    hex: "#49B8A9",
    rgb: "rgb(73, 184, 169)",
    cmyk: "cmyk(67, 4, 41, 0)",
    pantone: "P 130-12 C"
}, {
    name: "Torus Orange",
    hex: "#EA7305",
    rgb: "rgb(234, 115, 5)",
    cmyk: "cmyk(5, 67, 100, 0)",
    pantone: "152 C"
}];

let hmsColors = [{
    name: "HMS Primary",
    hex: "#003A60",
    rgb: "rgb(00, 58, 96)",
    pantone: "965u"
}, {
    name: "HMS Secondary",
    hex: "#5FC2D0",
    rgb: "rgb(99, 255, 201)",
    pantone: "3105 C"
}, {
    name: "HMS Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)",
    pantone: "381 U"
}];

let foundationColors = [{
    name: "Purple",
    hex: "#5F4D98",
    rgb: "rgb(95, 77, 155"
}, {
    name: "Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)"
}, {
    name: "Pink",
    hex: "#D50952",
    rgb: "rgb(213, 9, 82)"
}, {
    name: "Orange",
    hex: "#F9B233",
    rgb: "rgb(249, 178, 51)"
}, {
    name: "Blue",
    hex: "#55BDBA",
    rgb: "rgb(85, 189, 186)"
}];

let devsColors = [{
    name: "Primary",
    hex: "#61c2d0",
    rgb: "rgb(97, 194, 208)"
}, {
    name: "Secondary",
    hex: "#103a5d",
    rgb: "rgb(16, 58, 93)"
}, {
    name: "Tertiary",
    hex: "#434944",
    rgb: "rgb(67, 73, 68)"
}];

let salesColors = [{
    name: "Primary",
    hex: "#371a43",
    rgb: "rgb(55, 26, 67)"
}, {
    name: "Secondary",
    hex: "#794b8d",
    rgb: "rgb(121, 75, 141)"
}, {
    name: "Light Pink",
    hex: "#f1bbd5",
    rgb: "rgb(241, 187, 213)"
}, {
    name: "Dark Pink",
    hex: "#a2275b",
    rgb: "rgb(162, 39, 91)"
}, {
    name: "Blue",
    hex: "#9ba9d4",
    rgb: "rgb(155, 169, 212)"
}, {
    name: "Tan",
    hex: "#c89e67",
    rgb: "rgb(200, 158, 103)"
}];


function generatePalette() {
    let app = document.querySelector('#app');
    let output = '';
    for (let i = 0; i < colors.length; i++) {
        output += '<div class="color-card"><div class="color" style="background:' + colors[i].hex + '"></div><div class="color-info"><p class="color-name">' + colors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + colors[i].hex + '">' + colors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + colors[i].rgb + '">' + colors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + colors[i].cmyk + '">' + colors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + colors[i].pantone + '">' + "Pantone " + colors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    app.innerHTML = output;

    let colorCards = document.getElementsByClassName("color-hex");
    let rgbCodes = document.getElementsByClassName("color-rgb");
    let cmykCodes = document.getElementsByClassName("color-cmyk");
    let pantoneCodes = document.getElementsByClassName("color-pantone");


    for (let i = 0; i < colorCards.length; i++) {
        colorCards[i].addEventListener('click', copyAttr, false);
        rgbCodes[i].addEventListener('click', copyAttr, false);
        cmykCodes[i].addEventListener('click', copyAttr, false);
        pantoneCodes[i].addEventListener('click', copyAttr, false);
    }
};

function copyAttr() {
    var attribute = this.getAttribute("data-clipboard-text");
    var textarea = document.createElement("textarea");
    textarea.textContent = attribute;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        swal(
            attribute,
            'Copied to clipboard!',
            'success');

        // alert(attribute + ' copied to clipboard');
        return document.execCommand("copy");
    } catch (ex) {
        alert("Copy to clipboard failed.", ex);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
};

generatePalette();