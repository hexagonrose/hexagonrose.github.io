const buttons=document.querySelectorAll('button');
const howmany=document.querySelector('.howmany');
let gatcha=0;

function count(){
    gatcha+=1;
    howmany.innerHTML='총 가챠 횟수 : '+gatcha+' 회'
}

buttons.forEach(button => {
    button.addEventListener('click', ()=>count());
});
