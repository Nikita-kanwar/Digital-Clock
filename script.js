function clock(){
    let hours = document.getElementById('h');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');


    let ho = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = ho >= 12 ?"PM":"AM"; 

    hours.innerHTML = ho;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};
clock();