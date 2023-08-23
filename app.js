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
    cmyk: "cmyk(100, 40, 0, 62)",
    pantone: "965u"
}, {
    name: "HMS Secondary",
    hex: "#5FC2D0",
    rgb: "rgb(95, 194, 208)",
    cmyk: "cmyk(54, 7, 0, 18)",
    pantone: "3105 C"
}, {
    name: "HMS Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)",
    cmyk: "cmyk(15, 0, 65, 20)",
    pantone: "381 U"
}];

let foundationColors = [{
    name: "Purple",
    hex: "#5F4D98",
    rgb: "rgb(95, 77, 155",
    cmyk: "cmyk(75, 76, 0, 0)",
    pantone: "P 96-15 C"
}, {
    name: "Green",
    hex: "#AECC48",
    rgb: "rgb(174, 204, 72)",
    cmyk: "cmyk(40, 0, 84, 0)",
    pantone: "381 U"
}, {
    name: "Pink",
    hex: "#D50952",
    rgb: "rgb(213, 9, 82)",
    cmyk: "cmyk(9, 100, 48, 2)",
    pantone: "P 62-16 C"
}, {
    name: "Orange",
    hex: "#F9B233",
    rgb: "rgb(249, 178, 51)",
    cmyk: "cmyk(0, 35, 85, 0)",
    pantone: "P 14-7 C"
}, {
    name: "Blue",
    hex: "#55BDBA",
    rgb: "rgb(85, 189, 186)",
    cmyk: "cmyk(64, 0, 32, 0)",
    pantone: "325 U"
}];

let devsColors = [{
    name: "Primary",
    hex: "#103a5d",
    rgb: "rgb(16, 58, 93)",
    cmyk: "cmyk(100, 76, 37, 28)",
    pantone: "P 111-16 C"

}, {
    name: "Secondary",
    hex: "#61c2d0",
    rgb: "rgb(97, 194, 208)",
    cmyk: "cmyk(61, 0, 20, 0)",
    pantone: "P 121-12 C"
}, {
    name: "Tertiary",
    hex: "#434944",
    rgb: "rgb(67, 73, 68)",
    cmyk: "cmyk(71, 57, 61, 44)",
    pantone: "P 178-16 C"
}];

let salesColors = [{
    name: "Primary",
    hex: "#371a43",
    rgb: "rgb(55, 26, 67)",
    cmyk: "cmyk(85, 100, 36, 45)",
    pantone: ""
}, {
    name: "Secondary",
    hex: "#794b8d",
    rgb: "rgb(121, 75, 141)",
    cmyk: "cmyk(64, 79, 11, 1)",
    pantone: "P 92-5 C"
}, {
    name: "Light Pink",
    hex: "#f1bbd5",
    rgb: "rgb(241, 187, 213)",
    cmyk: "cmyk(3, 36, 2, 0)",
    pantone: "P 75-11 C"
}, {
    name: "Dark Pink",
    hex: "#a2275b",
    rgb: "rgb(162, 39, 91)",
    cmyk: "cmyk(28, 94, 33, 19)",
    pantone: "P 72-15 C"
}, {
    name: "Blue",
    hex: "#9ba9d4",
    rgb: "rgb(155, 169, 212)",
    cmyk: "cmyk(45, 30, 2, 0)",
    pantone: "P 104-11 C"
}, {
    name: "Tan",
    hex: "#c89e67",
    rgb: "rgb(200, 158, 103)",
    cmyk: "cmyk(20, 37, 63, 8)",
    pantone: "P 19-3 C"
}];

let firefitColors = [{
    name: "Yellow",
    hex: "#EDE227",
    rgb: "rgb(237, 226, 39)"
}, {
    name: "Blue",
    hex: "#2A325A",
    rgb: "rgb(42, 50, 90)"
}];

let greyColors = [{
    name: "Dark Grey",
    hex: "#3E4543",
    rgb: "rgb(62, 69, 61)"
}, {
    name: "Medium Grey",
    hex: "#B3B2B1",
    rgb: "rgb(179, 178, 177)"
}, {
    name: "Light Grey",
    hex: "#DBD9D6",
    rgb: "rgb(219, 217, 214)"
}];


function generatePalette() {
    let appTorus = document.querySelector('#torus');
    let outputTorus = '';
    for (let i = 0; i < torusColors.length; i++) {
        outputTorus += '<div class="color-card"><div class="color" style="background:' + torusColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + torusColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + torusColors[i].hex + '">' + torusColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + torusColors[i].rgb + '">' + torusColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + torusColors[i].cmyk + '">' + torusColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + torusColors[i].pantone + '">' + "Pantone " + torusColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appHMS = document.querySelector('#hms');
    let outputHMS = '';
    for (let i = 0; i < hmsColors.length; i++) {
        outputHMS += '<div class="color-card"><div class="color" style="background:' + hmsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + hmsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + hmsColors[i].hex + '">' + hmsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + hmsColors[i].rgb + '">' + hmsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + hmsColors[i].cmyk + '">' + hmsColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + hmsColors[i].pantone + '">' + "Pantone " + hmsColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appFoundation = document.querySelector('#foundation');
    let outputFoundation = '';
    for (var i = 0; i < foundationColors.length; i++) {
        outputFoundation += '<div class="color-card"><div class="color" style="background:' + foundationColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + foundationColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + foundationColors[i].hex + '">' + foundationColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + foundationColors[i].rgb + '">' + foundationColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + foundationColors[i].cmyk + '">' + foundationColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + foundationColors[i].pantone + '">' + "Pantone " + foundationColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appDevelopments = document.querySelector('#developments');
    let outputDevelopments = '';
    for (var i = 0; i < devsColors.length; i++) {
        outputDevelopments += '<div class="color-card"><div class="color" style="background:' + devsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + devsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + devsColors[i].hex + '">' + devsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + devsColors[i].rgb + '">' + devsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + devsColors[i].cmyk + '">' + devsColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + devsColors[i].pantone + '">' + "Pantone " + devsColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appSales = document.querySelector('#sales');
    let outputSales = '';
    for (var i = 0; i < salesColors.length; i++) {
        outputSales += '<div class="color-card"><div class="color" style="background:' + salesColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + salesColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + salesColors[i].hex + '">' + salesColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + salesColors[i].rgb + '">' + salesColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + salesColors[i].cmyk + '">' + salesColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + salesColors[i].pantone + '">' + "Pantone " + salesColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appFirefit = document.querySelector('#firefit');
    let outputFirefit = '';
    for (var i = 0; i < firefitColors.length; i++) {
        outputFirefit += '<div class="color-card"><div class="color" style="background:' + firefitColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + firefitColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + firefitColors[i].hex + '">' + firefitColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + firefitColors[i].rgb + '">' + firefitColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + firefitColors[i].cmyk + '">' + firefitColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + firefitColors[i].pantone + '">' + "Pantone " + firefitColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    let appGrey = document.querySelector('#grey');
    let outputGrey = '';
    for (var i = 0; i < greyColors.length; i++) {
        outputGrey += '<div class="color-card"><div class="color" style="background:' + greyColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + greyColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + greyColors[i].hex + '">' + greyColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + greyColors[i].rgb + '">' + greyColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-cmyk" data-clipboard-text="' + greyColors[i].cmyk + '">' + greyColors[i].cmyk + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-pantone" data-clipboard-text="' + greyColors[i].pantone + '">' + "Pantone " + greyColors[i].pantone + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }

    appTorus.innerHTML = outputTorus;
    appHMS.innerHTML = outputHMS;
    appFoundation.innerHTML = outputFoundation;
    appDevelopments.innerHTML = outputDevelopments;
    appSales.innerHTML = outputSales;
    appFirefit.innerHTML = outputFirefit;
    appGrey.innerHTML = outputGrey;


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