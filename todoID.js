const idBox=document.querySelector('.idBox'),
input=idBox.querySelector('input'),
greet=document.querySelector('.greet'),
showToDo=document.querySelector('.toDo'),
showDoIt=document.querySelector('.doIt'),
showDone=document.querySelector('.done'),
showToDoList=document.querySelector('.todoBox'),
showList=document.querySelector('.list'),
showDoneList=document.querySelector('.doneList');

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    input.value=''
    saveName(currentValue);
    showName(currentValue);
}

function saveName(value){
    localStorage.setItem('id',value);
}

function showName(value){
    greet.innerHTML=`Welcome! ${value}`;
    input.classList.add('hide');
    showToDo.classList.remove('hide');
    showToDoList.classList.remove('hide');
    showDoIt.classList.remove('hide');
    showDone.classList.remove('hide');
    showList.classList.remove('hide');
    showDoneList.classList.remove('hide');

}

function askName(){
    greet.innerHTML='What is your name?'
    input.classList.remove('hide');
    showToDo.classList.add('hide');
    showDoIt.classList.add('hide');
    showDone.classList.add('hide');
    showToDoList.classList.add('hide');
    showList.classList.add('hide');
    showDoneList.classList.add('hide');
}


function loadName(){
    const user=localStorage.getItem('id');
    if (user === null) {
        askName();
    } else {
        showName(user);
    }
}

idBox.addEventListener('submit',handleSubmit);

function init(){
    loadName();
}
init();