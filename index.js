console.log("hello")
var colors = document.getElementsByClassName('colors');
var features=document.getElementsByClassName('features');
var timeCount = document.getElementById('info2Wrapper');
var heart=document.getElementById('info-wrapper');
var time=document.querySelector('#info2Wrapper p');
var pic = document.querySelector('#watch-wrapper img')
var date=new Date();
    var hours = date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
setInterval(function(){
    if(seconds===60){
        seconds=00;
        minutes=minutes+1;
    }
    if(minutes===60){
        minutes=00;
        hours=hours+1;
    }
    if(hours===24){
        hours=00;
    }
    if(seconds<10){
        time.innerHTML =  time.innerHTML=hours+":"+minutes+":"+("0"+seconds); 
            if(minutes<10){
                time.innerHTML =  time.innerHTML=hours+":"+("0"+minutes)+":"+("0"+seconds); 
                    if(hours<10){
                        time.innerHTML =  time.innerHTML=("0"+hours)+":"+("0"+minutes)+":"+("0"+seconds);
                    }
            }
            if((minutes>10) && (hours<10)){
                time.innerHTML =  time.innerHTML=("0"+hours)+":"+(minutes)+":"+("0"+seconds);
            }
    }else if(seconds>=10){
        time.innerHTML =  time.innerHTML=hours+":"+minutes+":"+(seconds); 
            if(minutes<10){
                time.innerHTML =  time.innerHTML=hours+":"+("0"+minutes)+":"+(seconds); 
                    if(hours<10){
                        time.innerHTML =  time.innerHTML=("0"+hours)+":"+("0"+minutes)+":"+(seconds);
                    }
            }
            if((minutes>10) && (hours<10)){
                time.innerHTML =  time.innerHTML=("0"+hours)+":"+(minutes)+":"+(seconds);
            }
    }
    seconds=seconds+1;
},1000)

colors[0].addEventListener('click',function(){
    pic.src="js images/red band.png";
})
colors[1].addEventListener('click',function(){
    pic.src="js images/black band.png";
})
colors[2].addEventListener('click',function(){
    pic.src="js images/blue band.png";
})
colors[3].addEventListener('click',function(){
    pic.src="js images/pink band.png";
})
colors[4].addEventListener('click',function(){
    pic.src="js images/purple band.png";
})

features[0].addEventListener('click',function(){
    if(timeCount.classList.contains('hide')){
        timeCount.classList.remove('hide');
        timeCount.classList.add('show');
        heart.classList.remove('show');
        heart.classList.add('hide');
    }
})
features[1].addEventListener('click',function(){
    if(heart.classList.contains('hide')){
        heart.classList.remove('hide');
        heart.classList.add('show');
        timeCount.classList.remove('show');
        timeCount.classList.add('hide');
    }
})
