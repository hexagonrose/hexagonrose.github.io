const A=document.querySelector('.A');
let acount=0;
const B=document.querySelector('.B');
let bcount=0;
const C=document.querySelector('.C');
let Ccount=0;
const D=document.querySelector('.D');
let Dcount=0;
const E=document.querySelector('.E');
let Ecount=0;
const F=document.querySelector('.F');
let Fcount=0;
const G=document.querySelector('.G');
let Gcount=0;
const H=document.querySelector('.H');
let Hcount=0;
const I=document.querySelector('.I');
let Icount=0;
const J=document.querySelector('.J');
let Jcount=0;
const K=document.querySelector('.K');
let Kcount=0;
const L=document.querySelector('.L');
let Lcount=0;
const M=document.querySelector('.M');
let Mcount=0;
const N=document.querySelector('.N');
let Ncount=0;
const O=document.querySelector('.O');
let Ocount=0;
const P=document.querySelector('.P');
let Pcount=0;
const prob=document.querySelector('.prob');


function count2(event){
    const target=event.target;
    const val=target.innerHTML;
    if (val==='장남') {
        acount+=1;
        A.innerHTML='장남 : '+ acount;
    } else if (val==='무잔') {
        bcount+=1;
        B.innerHTML='무잔 : '+ bcount;
    } else if (val==='빛주') {
        Ccount+=1;
        C.innerHTML='빛주 : '+ Ccount;    
    } else if (val==='장녀') {
        Dcount+=1;
        D.innerHTML='장녀 : '+ Dcount;
    } else if (val==='젠이츠') {
        Ecount+=1;
        E.innerHTML='젠이츠 : '+ Ecount;
    } else if (val==='이노스케') {
        Fcount+=1;
        F.innerHTML='이노스케 : '+ Fcount;    
    } else if (val==='기붕') {
        Gcount+=1;
        G.innerHTML='기붕 : '+ Gcount;    
    } else if (val==='시노부') {
        Hcount+=1;
        H.innerHTML='시노부 : '+ Hcount;
    } else if (val==='아카자') {
        Icount+=1;
        I.innerHTML='아카자 : '+ Icount;
    } else if (val==='카나오') {
        Jcount+=1;
        J.innerHTML='카나오 : '+ Jcount;
    } else if (val==='엔무') {
        Kcount+=1;
        K.innerHTML='엔무 : '+ Kcount;
    } else if (val==='타마요') {
        Lcount+=1;
        L.innerHTML='타마요 : '+ Lcount;
    } else if (val==='유시로') {
        Mcount+=1;
        M.innerHTML='유시로 : '+ Mcount;
    } else if (val==='하가네즈카') {
        Ncount+=1;
        N.innerHTML='하가네즈카 : '+ Ncount;
    } else if (val==='사비토') {
        Ocount+=1;
        O.innerHTML='사비토 : '+ Ocount;
    } else if (val==='우로코다키') {
        Pcount+=1;
        P.innerHTML='우로코다키 : '+ Pcount;
    } else {
        pass
    }
    let per=(acount+bcount+Ccount+Dcount+Ecount+Fcount+Gcount+Hcount+Icount)/gatcha*100;
    prob.innerHTML='7,8성 확률 : '+per+'%';
}

buttons.forEach(button => {
    button.addEventListener('click', ()=>count2(event));
});
