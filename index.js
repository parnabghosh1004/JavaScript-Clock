let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let time,currHrs,currMins,currSecs;
setInterval(getCurrTime, 1000);

function getCurrTime(){
    let date = new Date();
    let currSecRatio = date.getSeconds()/60;
    let currMinRatio = ( currSecRatio + date.getMinutes())/60;
    let currHrsRatio = (currMinRatio+date.getHours())/12;
    document.documentElement.style.setProperty('--hour-rot',currHrsRatio*360)
    document.documentElement.style.setProperty('--minute-rot',currMinRatio*360)
    document.documentElement.style.setProperty('--second-rot',currSecRatio*360)

    if(date.getMinutes()<10) currMins = `0${date.getMinutes()}`;
    else currMins = `${date.getMinutes()}`;
    if(date.getSeconds()<10) currSecs = `0${date.getSeconds()}`;
    else currSecs = `${date.getSeconds()}`;
    if(date.getHours()<10) currHrs = `0${date.getHours()}`;
    else if (date.getHours()>=10 && date.getHours()<=12 ) currHrs = `${date.getHours()}`;
    else if (date.getHours()>=13 && date.getHours()<=21 ) currHrs = `0${date.getHours()-12}`;
    else currHrs = `${date.getHours()-12}`;

    if(date.getHours()<12) time = `${currHrs}:${currMins}:${currSecs} AM`;
    else time = `${currHrs}:${currMins}:${currSecs} PM`;
    document.getElementById('time').innerText = `Time : ${time}`;
    document.getElementById('date').innerText = `Date : ${date.toLocaleDateString(undefined,options)}`;

}

getCurrTime();