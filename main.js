function button() {
  const one = document.getElementById("btn").checked;
  const nav = document.getElementById("navbar");
  

  var a = document.getElementById("fot");
  var c = document.getElementById("intro");
  var d = document.getElementById("log-nav");
  //button//
  var buttonOne = document.getElementById("btn1");
  var buttonTwo = document.getElementById("btn2");
  var buttonTre = document.getElementById("btn3");
  var buttonFor = document.getElementById("btn4");
  var buttonSise = document.getElementById("btn5");
  var buttonSix = document.getElementById("btn6");
  var buttonSeven = document.getElementById("btn7");

  // color
  var colorA = document.getElementById("colorsatu");
  var colorB = document.getElementById("colordua");
  var colorC = document.getElementById("colortiga");
  var colorD = document.getElementById("colorempat");
  var colorE = document.getElementById("colorlima");
  var colorF = document.getElementById("colorenam");
  var colorG = document.getElementById("colortujuh");
  var colorH = document.getElementById("colordelapan");
  var colorI = document.getElementById("colorsembilan");
  var colorJ = document.getElementById("colorsepuluh");
  if (one === true) {
    // b.style.backgroundColor = "#30353c";
    // b.style.boxShadow = "0px 0px 20px #30353c";


    nav.style.backgroundColor = "rgb(0,0,0,0.5)"
    nav.style.border = "1px solid black"
    
    a.style.backgroundColor = "#111315";
    a.style.boxShadow = "0px 0px 20px rgb(0,0,0)";
    a.style.color = "#fff";
    
    c.style.color = "#fff"

    d.style.backgroundColor = "rgb(255,255,255,0.5)"
    d.style.backdropFilter = "blur(5px)"

    
    //input button
    buttonOne.style.backgroundColor = "#30353c";
    buttonTwo.style.backgroundColor = "#30353c";
    buttonTre.style.backgroundColor = "#30353c";
    buttonFor.style.backgroundColor = "#30353c";
    buttonSise.style.backgroundColor = "#30353c";
    buttonSix.style.backgroundColor = "#30353c";
    buttonSeven.style.backgroundColor = "#30353c";

    buttonOne.style.boxShadow = "0px 0px 20px #30353c";
    buttonTwo.style.boxShadow = "0px 0px 20px #30353c";
    buttonTre.style.boxShadow = "0px 0px 20px #30353c";
    buttonFor.style.boxShadow = "0px 0px 20px #30353c";
    buttonSise.style.boxShadow = "0px 0px 20px #30353c";
    buttonSix.style.boxShadow = "0px 0px 20px #30353c";
    buttonSeven.style.boxShadow = "0px 0px 20px #30353c";

    colorA.style.color = "#fff";
    colorB.style.color = "#fff";
    colorC.style.color = "#fff";
    colorD.style.color = "#fff";
    colorE.style.color = "#fff";
    colorF.style.color = "#fff";
    colorG.style.color = "#fff";
    colorH.style.color = "#fff";
    colorI.style.color = "#fff";
    colorJ.style.color = "#fff";

    // //input button end
  } else {
    window.location.reload(button);
    // alert("button gagal")
    
  }
}
// sistem button
var hukum = new Date().getFullYear()
document.getElementById("tahun").innerHTML = hukum


