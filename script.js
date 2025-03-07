function clock(){
    let hours = document.getElementById('h');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');


    let ho = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = ho >= 12 ?"PM":"AM"; 

    if(ho > 12){
        ho = ho - 12;
    }

    ho = (ho < 10) ? "0" + ho : ho;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    hours.innerHTML = ho;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};
setInterval(clock,1000);