let torusColors = [{
    name: "Torus Plum",
    hex: "#45283b",
    rgb: "rgb(69, 40, 59)"
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
    rgb: "rgb(97, 35, 101)"
}, {
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

let hmsColors = [{
    name: "HMS Primary",
    hex: "#0E3B5E",
    rgb: "rgb(00, 58, 99)"
}, {
    name: "HMS Secondary",
    hex: "#5FC2D0",
    rgb: "rgb(99, 255, 201)"
}, {
    name: "HMS Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)"
}];

let foundationColors = [{
    name: "Torus Foundation Purple",
    hex: "#5F4D98",
    rgb: "rgb(95, 77, 155"
}, {
    name: "Torus Foundation Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)"
}, {
    name: "Torus Foundation Pink",
    hex: "#D50952",
    rgb: "rgb(213, 9, 82)"
}, {
    name: "Torus Foundation Orange",
    hex: "#F9B233",
    rgb: "rgb(249, 178, 51)"
}, {
    name: "Torus Foundation Blue",
    hex: "#55BDBA",
    rgb: "rgb(85, 189, 186)"
}];

let devsColors = [{
    name: "Torus Developments Primary",
    hex: "#61c2d0",
    rgb: "rgb(97, 194, 208)"
}, {
    name: "Torus Developments Secondary",
    hex: "#103a5d",
    rgb: "rgb(16, 58, 93)"
}, {
    name: "Torus Developments Tertiary",
    hex: "#434944",
    rgb: "rgb(67, 73, 68)"
}];

function generateTorus() {
    let appTorus = document.querySelector('#torus');
    let outputTorus = '';
    for (var i = 0; i < torusColors.length; i++) {
        outputTorus += '<div class="color-card"><div class="color" style="background:' + torusColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + torusColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + torusColors[i].hex + '">' + torusColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + torusColors[i].rgb + '">' + torusColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appTorus.innerHTML = outputTorus;
    // var colorCards = document.getElementsByClassName("color-hex");
    // var rgbCodes = document.getElementsByClassName("color-rgb");
    // for (var i = 0; i < colorCards.length; i++) {
    //     colorCards[i].addEventListener('click', copyAttr, false);
    //     rgbCodes[i].addEventListener('click', copyAttr, false);
    // }
};

function generateHMS() {
    let appHMS = document.querySelector('#hms');
    let outputHMS = '';
    for (var i = 0; i < hmsColors.length; i++) {
        outputHMS += '<div class="color-card"><div class="color" style="background:' + hmsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + hmsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + hmsColors[i].hex + '">' + hmsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + hmsColors[i].rgb + '">' + hmsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appHMS.innerHTML = outputHMS;
};

function generateFoundation() {
    let appFoundation = document.querySelector('#foundation');
    let outputFoundation = '';
    for (var i = 0; i < foundationColors.length; i++) {
        outputFoundation += '<div class="color-card"><div class="color" style="background:' + foundationColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + foundationColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + foundationColors[i].hex + '">' + foundationColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + foundationColors[i].rgb + '">' + foundationColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appFoundation.innerHTML = outputFoundation;
};

function generateDevelopments() {
    let appDevelopments = document.querySelector('#developments');
    let outputDevelopments = '';
    for (var i = 0; i < devsColors.length; i++) {
        outputDevelopments += '<div class="color-card"><div class="color" style="background:' + devsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + devsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + devsColors[i].hex + '">' + devsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + devsColors[i].rgb + '">' + devsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appDevelopments.innerHTML = outputDevelopments;
};

// function copyAttr(text) {
//     try {
//         await navigator.clipboard.writeText(text);
//         /* Text copied */
//     } catch (e) {
//         /* Failed to copy */
//     }
// }
//function copyAttr() {
//    var attribute = this.getAttribute("data-clipboard-text");
//    var textarea = document.createElement("textarea");
//    textarea.textContent = attribute;
//    textarea.style.position = "fixed";
//    document.body.appendChild(textarea);
//    textarea.select();
//    try {
//        swal(attribute, 'Copied to clipboard!', 'success');
//        // alert(attribute + ' copied to clipboard');
//        return document.execCommand("copy");
//    } catch (ex) {
//        alert("Copy to clipboard failed.", ex);
//        return false;
//    } finally {
//        document.body.removeChild(textarea);
//    }
//}
//;

generateTorus();
generateHMS();
generateFoundation();
generateDevelopments();
