// Your JS goes here

window.onload = function(){
  var scrnSize = window.innerWidth;
  var pxlWidth = Math.floor(100/11.1) + 1;
  

  genDivs(pxlWidth);

  function genDivs(v){ 
      var e = document.body;
      for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row";
        row.style.width = "100%"; 
        row.style.display = "flex"
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "checker";
            cell.style.backgroundColor = rndBg();
            cell.style.float = "left";
            cell.style.paddingBottom = "11.1%"; 
            cell.style.width = "11.1%";
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
      } 
    }
  function bgClr(val){
    if (val % 2 === 0) return("red");
    return("black");
  }  

  function rndBg(){
    strR = (Math.floor((Math.random() * 255))).toString(16);
    strG = (Math.floor((Math.random() * 255))).toString(16);
    strB = (Math.floor((Math.random() * 255))).toString(16);
    rndClr = "#" + strR + strG + strB;
    console.log(rndClr);
    return rndClr;
  }
};

