const clock=document.querySelector('.clock');

function showTime(){
    const now=new Date();
    const hour=now.getHours();
    const minute=now.getMinutes();
    const second=now.getSeconds();
    clock.innerText=
    `${hour<10 ? `0${hour}`:hour}:${minute<10 ? `0${minute}`:minute}:${second<10 ? `0${second}`:second}`;
}

function init() {
    showTime();
    setInterval(showTime,1000)
}
init();