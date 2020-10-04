var x = document.getElementsByClassName("mesa");
var ini = document.getElementsByClassName("ini");
var tot = document.getElementsByClassName("tot");
var totNum = new Array;
var totNum1 = new Array;
var totSeg;
var tothora;
var totMin;
var ch= new Array;

pool = (i) => { 
    var dat1 = new Date();
    var hora1 = new Array;
    var min1= new Array;
    var seg1 = new Array;
    hora1[i] = dat1.getHours();
    min1[i] = dat1.getMinutes();
    seg1[i] = dat1.getSeconds();
    
    if(x[i].src.match('poolOff.png')){
        ch[i] = false;
        function startTime() {
        
            var today = new Date();
            var hora = today.getHours();
            var min = today.getMinutes();
            var seg = today.getSeconds();
            totSeg = seg - seg1[i];
            totMin = min - min1[i];
            totHora = hora - hora1[i];
            
            document.getElementsByClassName('fin')[i].innerHTML =
            `Fin: ${hora}:${min}:${seg}`;
            totNum[i]=(totHora + (totMin/60)+(totSeg/3600))*50;
            totNum1[i] = totNum[i];
            tot[i].innerHTML = `Total: $${totNum[i]}`;
            
            if(ch[i] === true){
                totNum1[i] = totNum[i];
                tot[i].innerHTML = `Total: $${totNum1[i]}`;
                
            }else{
                var t = setTimeout(startTime, 500);
            }
          }
        x[i].src = "pool.png";
        ini[i].innerHTML = `Inicio: ${hora1[i]}:${min1[i]}:${seg1[i]}`;
        startTime();
    }
    else{
        ch[i] = true;
        x[i].src = "poolOff.png";
        
    }
}



    

