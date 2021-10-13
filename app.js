let form1= document.getElementById('form1');
let form2= document.getElementById('form2');

let login = document.getElementById('login');
let sign = document.getElementById('sign');

//inputs value
let myname = document.getElementById('myname');
let mypassword = document.getElementById('mypassword');
let myconfirm = document.getElementById('myconfirm');


login.addEventListener('click',(e)=>{
    e.preventDefault();
    form1.style.display = 'none';
    form2.style.display = 'block';
})

sign.addEventListener('click',(e)=>{
    e.preventDefault();
    form1.style.display = 'none';
    form2.style.display = 'block';
})


let save = document.getElementById('save');
save.addEventListener('click',(e)=>{
    e.preventDefault();
    let createh2 = document.createElement('h2');
    let error = document.getElementById('error');
    error.append(createh2);
    createh2.innerHTML = 'Please fill in the blanks';
    createh2.style.background = 'red';
    createh2.style.color = 'white';
    createh2.style.fontSize = '1rem';
    createh2.style.padding = '4px';
    createh2.style.borderRadius = '4px'

    setTimeout(()=>{
        createh2.style.display = 'none'
    },1000)
})