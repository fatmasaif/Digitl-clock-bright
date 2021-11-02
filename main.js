function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
   
    var session=document.getElementById('session');
    if(hrs>=12){
      hrs-=12;  
      session.innerHTML="PM"
    }else{
        session.innerHTML="AM"
    }
      if(hrs<=9){
        document.getElementById('hours').innerHTML="0"+ hrs;
        }
      else{document.getElementById('hours').innerHTML=hrs;}

      if(min<=9){document.getElementById('minutes').innerHTML="0"+min;
      }
      else{document.getElementById('minutes').innerHTML=min;}

      if(sec<=9){
        document.getElementById('seconds').innerHTML="0"+sec;
      }
      else{document.getElementById('seconds').innerHTML=sec;}
    

}
setInterval(displayTime,0);
