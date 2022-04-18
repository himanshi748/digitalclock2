function clock () {

    var hours = document.getElementById('hours');
    var minute = document.getElementById('min');
    var second = document.getElementById('sec');
    var txt = document.getElementById('am');


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var text = "AM";


    if(hrs==0)
    {
        hrs=12;
    }
    if(hrs>12)
    {
        hrs=hrs-12;
        text="PM"
    }
    if(hrs<10)
    {
        hrs="0"+hrs;
    }
    if(mins<10)
    {
        mins="0"+mins;
    }

    if(secs<10)
    {
        secs="0"+secs;
    }

    hours.innerHTML=hrs + "<br>Hours";
    minute.innerHTML=mins + "<br>Mins";
    second.innerHTML=secs + "<br>Secs";
    am.innerText=text;

}
setInterval(clock, 1000);



function TimeDetails() {
    
    var A = document.getElementById("mrg");
    var text1 = A.options[A.selectedIndex].text;
    
    var B = document.getElementById("afternoon");
    var text2 = B.options[B.selectedIndex].text;
    
    var C = document.getElementById("evening");
    var text3 = C.options[C.selectedIndex].text;
    
    var D = document.getElementById("ngt");
    var text4 = D.options[D.selectedIndex].text;
    
    
    var idExist = document.getElementById("details");
    if(idExist)
    {
        idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2} <br> Nap Time : ${text3} <br> Night Time : ${text4}` ;
    }
    
}    


function SetTimes() {

    var w = document.getElementById("mrg").value;
    var x = document.getElementById("afternoon").value;
    var y = document.getElementById("evening").value;
    var z = document.getElementById("ngt").value;

    var hour = new Date().getHours();
    
    if(w == hour) {
        document.getElementById("img").style.backgroundImage="url(window_girl.svg)";
        document.getElementById("txt1").innerHTML="GOOD MORNING!! WAKE UP!!";
        document.getElementById("txt2").innerHTML="GRAB SOME HEALTHY BREAKFAST..!!!";
    }    

    if(x == hour) {
        document.getElementById("img").style.backgroundImage="url(lunch.svg)";
        document.getElementById("txt1").innerHTML="GOOD AFTERNOON!!!";
        document.getElementById("txt2").innerHTML="LET'S HAVE SOME LUNCH..!!!";
    }    

    if(y == hour) {
        document.getElementById("img").style.backgroundImage="url(defaul.png)";
        document.getElementById("txt1").innerHTML="GOOD EVENING!! GET SOME TEA!!";
        document.getElementById("txt2").innerHTML="STOP YAWNING.., IT'S JUST EVENING..!!!";
    }    

    if(z == hour) {
        document.getElementById("img").style.backgroundImage="url(night.svg)";
        document.getElementById("txt1").innerHTML="GOOD NIGHT!! SWEET DREAMS!!";
        document.getElementById("txt2").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP..!!!";
    }    
    
    TimeDetails();
    
}  