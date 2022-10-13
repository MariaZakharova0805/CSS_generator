//ГЕНЕРАТОР ТРЕУГОЛЬНИКА
function triangleGenerate() {
  let heightTR = document.getElementById("heightTR").value;
  let widthTR = document.getElementById("widthTR").value;
  let top = document.getElementById("top");
  let topLeft = document.getElementById("topLeft");
  let topRight = document.getElementById("topRight");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let bottomLeft = document.getElementById("bottomLeft");
  let bottomRight = document.getElementById("bottomRight");
  let bottom = document.getElementById("bottom");
  let triangleResult = document.getElementById("triangleResult");
  let strOne;
  let strTwo;

  function triangleCSSValue() {
    triangleCSS.value = "border-width: " + strOne + " border-color: " + strTwo;
    triangleResult.style = triangleCSS.value;
  }

  if (top.checked) {
    strOne = `0 ${widthTR}px ${heightTR}px ${widthTR}px;`;
    strTwo = `transparent transparent #007bff transparent;`;
    triangleCSSValue();
  } else if (topLeft.checked) {
    strOne = `${widthTR}px ${widthTR}px 0 0;`;
    strTwo = `#007bff transparent transparent transparent;`;
    triangleCSSValue();
  } else if (topRight.checked) {
    strOne = `0 ${widthTR}px ${widthTR}px 0;`;
    strTwo = `transparent #007bff transparent transparent;`;
    triangleCSSValue();
  } else if (left.checked) {
    strOne = `${heightTR}px ${widthTR}px ${heightTR}px 0;`;
    strTwo = `transparent #007bff transparent transparent;`;
    triangleCSSValue();
  } else if (right.checked) {
    strOne = `${heightTR}px 0 ${heightTR}px ${widthTR}px;`;
    strTwo = `transparent transparent transparent #007bff ;`;
    triangleCSSValue();
  } else if (bottomLeft.checked) {
    strOne = `${widthTR}px 0 0 ${widthTR}px;`;
    strTwo = `transparent transparent transparent #007bff ;`;
    triangleCSSValue();
  } else if (bottomRight.checked) {
    strOne = `0 0 ${widthTR}px ${widthTR}px;`;
    strTwo = `transparent transparent #007bff transparent;`;
    triangleCSSValue();
  } else if (bottom.checked) {
    strOne = `${widthTR}px  ${heightTR}px 0 ${heightTR}px;`;
    strTwo = `#007bff transparent transparent transparent;`;
    triangleCSSValue();
  }
}

for (let item of document.querySelectorAll(".triangleInput")) {
  item.addEventListener("input", triangleGenerate);
}

triangleGenerate();

//ГЕНЕРАТОР ГРАНИЦ
function borderGeneratCSS() {
  let topLeft = document.getElementById("top-left").value;
  let topRight = document.getElementById("top-right").value;
  let bottomLeft = document.getElementById("bottom-left").value;
  let bottomRight = document.getElementById("bottom-right").value;
  let str = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`;

  cssCodeBorder.value = "box-shadow: " + str;
  result2.style.borderRadius = str;
}

for (let item of document.querySelectorAll(".border")) {
  item.addEventListener("input", borderGeneratCSS);
}

borderGeneratCSS();

//ГЕНЕРАТОР ГРАДИЕНТА

function generateGradient() {
  let degree = document.getElementById("degree").value; //направление
  let colorOneMove = document.getElementById("colorOneMove").value;
  let colorTwoMove = document.getElementById("colorTwoMove").value;

  let colorOne = document.getElementById("colorOne").value;
  let redOne = parseInt(colorOne.slice(1, 3), 16);
  let greenOne = parseInt(colorOne.slice(3, 5), 16);
  let blueOne = parseInt(colorOne.slice(5, 7), 16);

  let colorTwo = document.getElementById("colorTwo").value;
  let redTwo = parseInt(colorTwo.slice(1, 3), 16);
  let greenTwo = parseInt(colorTwo.slice(3, 5), 16);
  let blueTwo = parseInt(colorTwo.slice(5, 7), 16);

  let resultGrd = document.getElementById("resultGrd");
  let cssGradien = document.getElementById("cssGradien");

  let str = `-webkit-linear-gradient(${degree}deg, rgb(${redOne}, ${greenOne}, ${blueOne}) ${colorOneMove}%, rgb(${redTwo}, ${greenTwo}, ${blueTwo}) ${colorTwoMove}%);`;
  cssGradien.value = "background: " + str;
  resultGrd.style = cssGradien.value;
}

for (let item of document.querySelectorAll(".grd")) {
  item.addEventListener("input", generateGradient);
}

generateGradient();

//ГЕНЕРАТОР ТЕНИ
function generatCSS() {
  //проверяем отмечен чекбокс или нет
  let inset = document.getElementById("inset").checked;
  inset = inset ? " inset" : "";

  let offsetX = document.getElementById("offsetX").value;
  let offsetY = document.getElementById("offsetY").value;
  let blur = document.getElementById("blur").value;
  let stretch = document.getElementById("stretch").value;
  let opacity = document.getElementById("opacity").value;

  //перводим цвет из 16ричной в 10речную систему
  let color = document.getElementById("color").value;
  let red = parseInt(color.slice(1, 3), 16);
  let green = parseInt(color.slice(3, 5), 16);
  let blue = parseInt(color.slice(5, 7), 16);

  let result = document.getElementById("result");
  let textarea = document.getElementById("cssCode");

  let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red},${green},${blue},${opacity}) `;
  textarea.value = "box-shadow:" + str;

  //делаем тень для квадратика
  result.style.boxShadow = str;
}

for (let item of document.querySelectorAll("input")) {
  item.addEventListener("input", generatCSS);
}

generatCSS();
