let p = 1;
function Easy(){
    p = 3;
    document.getElementById("corr").style.color = "white";
    var x = (Math.floor(Math.random() * 256)); 
	var y = (Math.floor(Math.random() * 256));
	var z = (Math.floor(Math.random() * 256));
    var thergb = [];
     thergb[0] = "rgb(" + x + ", " + y + ", " + z + ")";
     document.getElementById("rgb").innerHTML = thergb[0];
     thergb[1] = "rgb(" + Math.abs((x*y)%256) + "," + Math.abs((y*z)%256) + "," + Math.abs((z*x)%256) + ")";
    thergb[2] = "rgb(" + Math.abs((y*z)%256) + "," + Math.abs((z*x*y)%256) + "," + Math.abs((x+234)%256) + ")";
    let q = Math.floor(Math.random() * 3);
    [thergb[0] , thergb[q]] = [thergb[q],thergb[0]];
    let bot = document.getElementsByClassName("bot");
    for(var i = 0 ; i < 6 ; i++){
        if(i<=2){
            bot[i].style.backgroundColor = thergb[i];
        }
        else{
            bot[i].style.backgroundColor = "goldenrod";
        }
    }
}
function Hard(){
    p = 0;
    document.getElementById("corr").style.color = "white";
    var x = Math.floor(Math.random() * 256); 
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
    var thergb = [];
     thergb[0] = "rgb(" + x + ", " + y + ", " + z + ")";
     document.getElementById("rgb").innerHTML = thergb[0];
     thergb[1] = "rgb(" + Math.abs((x*y)%256) + "," + Math.abs((y*z)%256) + "," + Math.abs((z*x)%256) + ")";
     thergb[2] = "rgb(" + Math.abs((y*z)%256) + "," + Math.abs((z*x*y)%256) + "," + Math.abs((x+234)%256) + ")";
     thergb[3] = "rgb(" + Math.abs(((x+y)*100)%256) + "," + Math.abs((y+z+x)%256) + "," + Math.abs((z*x*x)%256) + ")";
    thergb[4] = "rgb(" + Math.abs((z*z*z)%256) + "," + Math.abs((y*y*y)%256) + "," + Math.abs((x*x*x)/3) + ")";
    thergb[5] = "rgb(" + Math.abs((x+333)%256) + "," + Math.abs((y*y*x*z)%256) + "," + Math.abs((223+y+x)%256) + ")";
    let q = Math.floor(Math.random() * 6);
    [thergb[0] , thergb[q]] = [thergb[q],thergb[0]];
    let bot = document.getElementsByClassName("bot");
    for(var i = 0 ; i < 6 ; i++){
            bot[i].style.backgroundColor = thergb[i];
    }
}

function NewColors(){
    document.getElementById("New").innerHTML = "New Colors";
    document.getElementById("corr").style.color = "white";
      if(document.getElementById('col6').style.backgroundColor == "goldenrod"){
           Easy();
      }
      else{
          Hard();
      }
}

function color(clicked_id){
    let m = document.getElementById("rgb").innerHTML;
    if(document.getElementById(clicked_id).style.backgroundColor == m){
        document.getElementById("corr").innerHTML = "Correct !!!"; 
        document.getElementById("corr").style.color = "black";
        document.getElementById("up").style.backgroundColor = m;
        let v = document.getElementsByClassName("bot");
        for (let i = 0; i < v.length - p; i++) {
            v[i].style.backgroundColor = m;
          }
        document.getElementById("New").innerHTML = "Play Again";  
    }
    else{
        document.getElementById("corr").innerHTML = "Try Again !!!";
        document.getElementById(clicked_id).style.backgroundColor = "goldenrod";
        document.getElementById("corr").style.color = "black";
    }
}