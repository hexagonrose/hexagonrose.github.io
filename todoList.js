const todoList=document.querySelector('.todoBox'),
inputList=todoList.querySelector('input'),
list=document.querySelector('.list'),
doneList=document.querySelector('.doneList'),
box=list.querySelector('button');

let toDo=[];
let done=[];

function handleSubmit(event){
    event.preventDefault();
    const currentValue=inputList.value;
    paintList(currentValue);
    inputList.value='';
}

function changeToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    const span=li.querySelector('span');
    const value=span.innerHTML;
    paintDone(value);
    deleteToDo(event);
}

function paintList(value){
    const li=document.createElement('li');
    const delbtn=document.createElement('button');
    const doneBtn=document.createElement('button');
    const span=document.createElement('span');
    const todoId=toDo.length+1;
    delbtn.innerHTML='&#10007;';
    doneBtn.innerHTML='&#10004;';
    delbtn.addEventListener('click',deleteToDo);
    doneBtn.addEventListener('click',changeToDo);
    span.innerHTML=value;
    li.appendChild(doneBtn);
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id=todoId;
    list.appendChild(li);
    const obj={
        text: value,
        id: todoId
    }
    toDo.push(obj);
    saveToDo();
}

function paintDone(value){
    const li=document.createElement('li');
    const delbtn=document.createElement('button');
    const span=document.createElement('span');
    const doneId=done.length+1;
    delbtn.innerHTML='&#10007;';
    delbtn.addEventListener('click',deleteDone);
    span.innerHTML=value;
    li.appendChild(span);
    li.appendChild(delbtn);
    li.id=doneId;
    doneList.appendChild(li);
    const obj={
        text: value,
        id: doneId
    }
    done.push(obj);
    saveDone();
}

function saveToDo(){
    localStorage.setItem('toDo',JSON.stringify(toDo));
}

function saveDone(){
    localStorage.setItem('done',JSON.stringify(done));
}

function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    list.removeChild(li);
    const cleanToDo = toDo.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
      });
      toDo = cleanToDo;
      saveToDo();
}

function deleteDone(event){
    const btn=event.target;
    const li=btn.parentNode;
    doneList.removeChild(li);
    const cleanDone = done.filter(function (done) {
        return done.id !== parseInt(li.id);
      });
      done = cleanDone;
      saveDone();
}


function loadToDo(){
    const load=localStorage.getItem('toDo');
    if (load!==null){
        const parsedToDo = JSON.parse(load);
        parsedToDo.forEach(function (toDo) {
        paintList(toDo.text);
    });
  
    }
}

function loadDone(){
    const load=localStorage.getItem('done');
    if (load!==null){
        const parsedDone = JSON.parse(load);
        parsedDone.forEach(function (done) {
        paintDone(done.text);
    });
  
    }
}



function init(){
    todoList.addEventListener('submit',handleSubmit);
    loadToDo();
    loadDone();
}
init();