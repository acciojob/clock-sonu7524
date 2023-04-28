//your JS code here. If required.
function getTimer(){
    const time = new Date();
    let dayString = `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`;
    let timeString = "";
    let hr = `${time.getHours()}`;
    if(hr >= 12){
        if(hr===12){
            timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} PM`;
        }
        else{
            hr -= 12;
            timeString = `${hr}:${time.getMinutes()}:${time.getSeconds()} PM`;
        }
    }
    else{
        timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`;
    }

    return dayString+" "+timeString;
}

const p = document.getElementById("timer");

function timer(){
    p.innerText = getTimer();
}

setInterval(timer,1000);