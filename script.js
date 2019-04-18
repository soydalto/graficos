document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("grafico",data);
}