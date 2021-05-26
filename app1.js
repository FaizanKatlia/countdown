var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')
var msecHead = document.getElementById('msec')
var btndis = document.getElementById('disabled')

var min =  prompt("  Enter Time In min ",00);
var sec =  prompt("  Enter Time In sec ",02);
var msec =100;
var interval;


minHead.innerHTML = min;
secHead.innerHTML = sec;
msecHead.innerHTML = msec;

function timer(){
    msec--
    msecHead.innerHTML = msec
    if(msec == 0 ){
        sec--;
        secHead.innerHTML= sec
        msec=100

    }    

         else if (sec == 0){
            if (min !=0){
            min--;
            minHead.innerHTML=min
            sec = 60;}
            else {
                reset();
                alert('Time UP !')
            }
         }
        
}
 

function start(){
    interval =  setInterval(timer,10) 
    // btndis.disabled = true
}

function pause(){
    clearInterval(interval)
    btndis.disabled = false
}

function reset(){
    msec= 00;
    sec= 00;
    min= 00;

    msecHead.innerHTML= msec;
    secHead.innerHTML= sec;
    minHead.innerHTML= min;
    clearInterval(interval)
    btndis.disabled = false
}
function ree(){
    
    min =  prompt("  Enter Time In min ",00);
    sec =  prompt("  Enter Time In sec ",02);
    start();
}