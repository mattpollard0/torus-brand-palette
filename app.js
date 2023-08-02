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
    hex: "#003A60",
    rgb: "rgb(00, 58, 96)"
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

function generateTorus() {
    let appTorus = document.querySelector('#torus');
    let outputTorus = '';
    for (let i = 0; i < torusColors.length; i++) {
        outputTorus += '<div class="color-card"><div class="color" style="background:' + torusColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + torusColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + torusColors[i].hex + '">' + torusColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + torusColors[i].rgb + '">' + torusColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appTorus.innerHTML = outputTorus;
    let colorCards = document.getElementsByClassName("color-hex");
  let rgbCodes = document.getElementsByClassName("color-rgb");

  for (let i = 0; i < colorCards.length; i++) {
    colorCards[i].addEventListener('click', copyAttr, false);
    rgbCodes[i].addEventListener('click', copyAttr, false);
  }
};

function generateHMS() {
    let appHMS = document.querySelector('#hms');
    let outputHMS = '';
    for (let i = 0; i < hmsColors.length; i++) {
        outputHMS += '<div class="color-card"><div class="color" style="background:' + hmsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + hmsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + hmsColors[i].hex + '">' + hmsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + hmsColors[i].rgb + '">' + hmsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appHMS.innerHTML = outputHMS;
    let colorCards = document.getElementsByClassName("color-hex");
  let rgbCodes = document.getElementsByClassName("color-rgb");

  for (let i = 0; i < colorCards.length; i++) {
    colorCards[i].addEventListener('click', copyAttr, false);
    rgbCodes[i].addEventListener('click', copyAttr, false);
  }
};

function generateFoundation() {
    let appFoundation = document.querySelector('#foundation');
    let outputFoundation = '';
    for (var i = 0; i < foundationColors.length; i++) {
        outputFoundation += '<div class="color-card"><div class="color" style="background:' + foundationColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + foundationColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + foundationColors[i].hex + '">' + foundationColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + foundationColors[i].rgb + '">' + foundationColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appFoundation.innerHTML = outputFoundation;
    let colorCards = document.getElementsByClassName("color-hex");
  let rgbCodes = document.getElementsByClassName("color-rgb");

  for (let i = 0; i < colorCards.length; i++) {
    colorCards[i].addEventListener('click', copyAttr, false);
    rgbCodes[i].addEventListener('click', copyAttr, false);
  }
};

function generateDevelopments() {
    let appDevelopments = document.querySelector('#developments');
    let outputDevelopments = '';
    for (var i = 0; i < devsColors.length; i++) {
        outputDevelopments += '<div class="color-card"><div class="color" style="background:' + devsColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + devsColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + devsColors[i].hex + '">' + devsColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + devsColors[i].rgb + '">' + devsColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appDevelopments.innerHTML = outputDevelopments;
    let colorCards = document.getElementsByClassName("color-hex");
  let rgbCodes = document.getElementsByClassName("color-rgb");

  for (let i = 0; i < colorCards.length; i++) {
    colorCards[i].addEventListener('click', copyAttr, false);
    rgbCodes[i].addEventListener('click', copyAttr, false);
  }
};

function generateSales() {
    let appSales = document.querySelector('#sales');
    let outputSales = '';
    for (var i = 0; i < salesColors.length; i++) {
        outputSales += '<div class="color-card"><div class="color" style="background:' + salesColors[i].hex + '"></div><div class="color-info"><p class="color-name">' + salesColors[i].name + '</p><p class="color-hex" title="Copy" data-clipboard-text="' + salesColors[i].hex + '">' + salesColors[i].hex + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p><p title="Copy" class="color-rgb" data-clipboard-text="' + salesColors[i].rgb + '">' + salesColors[i].rgb + ' <i class="fa fa-clipboard" aria-hidden="true"></i></p></div></div>';
    }
    appSales.innerHTML = outputSales;
    let colorCards = document.getElementsByClassName("color-hex");
  let rgbCodes = document.getElementsByClassName("color-rgb");

  for (let i = 0; i < colorCards.length; i++) {
    colorCards[i].addEventListener('click', copyAttr, false);
    rgbCodes[i].addEventListener('click', copyAttr, false);
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

generateTorus();
generateHMS();
generateFoundation();
generateDevelopments();
generateSales();
